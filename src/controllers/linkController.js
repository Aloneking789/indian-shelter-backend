import { prisma } from "../config/prisma.js";

/**
 * GET /api/links
 * List resource links filtered by category (POLICY or PMAY)
 */
export async function getLinks(req, res, next) {
  try {
    const { category, includeInactive } = req.query;

    const where = {};

    if (category) {
      const upperCat = category.toUpperCase();
      if (upperCat === "POLICY" || upperCat === "PMAY") {
        where.category = upperCat;
      }
    }

    if (includeInactive !== "true") {
      where.isActive = true;
    }

    const links = await prisma.resourceLink.findMany({
      where,
      orderBy: [
        { order: "asc" },
        { createdAt: "asc" }
      ],
      include: {
        createdBy: {
          select: { id: true, name: true, employeeId: true }
        }
      }
    });

    return res.status(200).json({
      success: true,
      count: links.length,
      data: links
    });
  } catch (error) {
    next(error);
  }
}

/**
 * GET /api/links/:id
 * Get a single resource link
 */
export async function getLinkById(req, res, next) {
  try {
    const { id } = req.params;

    const link = await prisma.resourceLink.findUnique({
      where: { id },
      include: {
        createdBy: {
          select: { id: true, name: true, employeeId: true }
        }
      }
    });

    if (!link) {
      return res.status(404).json({
        success: false,
        message: "Resource link not found."
      });
    }

    return res.status(200).json({
      success: true,
      data: link
    });
  } catch (error) {
    next(error);
  }
}

/**
 * POST /api/links
 * Create a new resource link (POLICY or PMAY)
 */
export async function createLink(req, res, next) {
  try {
    const { category, title, url, description, order, isActive } = req.body;

    if (!category || (category !== "POLICY" && category !== "PMAY")) {
      return res.status(400).json({
        success: false,
        message: "Category must be either 'POLICY' or 'PMAY'."
      });
    }

    if (!title || typeof title !== "string" || !title.trim()) {
      return res.status(400).json({
        success: false,
        message: "Title/Name is required."
      });
    }

    if (!url || typeof url !== "string" || !url.trim()) {
      return res.status(400).json({
        success: false,
        message: "URL/Link is required."
      });
    }

    let formattedUrl = url.trim();
    if (!/^https?:\/\//i.test(formattedUrl) && !formattedUrl.startsWith("/")) {
      formattedUrl = "https://" + formattedUrl;
    }

    const newLink = await prisma.resourceLink.create({
      data: {
        category,
        title: title.trim(),
        url: formattedUrl,
        description: description?.trim() || null,
        order: typeof order === "number" ? order : 0,
        isActive: typeof isActive === "boolean" ? isActive : true,
        createdById: req.user?.id || null
      },
      include: {
        createdBy: {
          select: { id: true, name: true, employeeId: true }
        }
      }
    });

    return res.status(201).json({
      success: true,
      message: `${category === "POLICY" ? "Policy" : "PMAY"} link added successfully.`,
      data: newLink
    });
  } catch (error) {
    next(error);
  }
}

/**
 * PATCH /api/links/:id
 * Update an existing resource link
 */
export async function updateLink(req, res, next) {
  try {
    const { id } = req.params;
    const { title, url, description, order, isActive } = req.body;

    const existing = await prisma.resourceLink.findUnique({
      where: { id }
    });

    if (!existing) {
      return res.status(404).json({
        success: false,
        message: "Resource link not found."
      });
    }

    const dataToUpdate = {};

    if (title && typeof title === "string" && title.trim()) {
      dataToUpdate.title = title.trim();
    }

    if (url && typeof url === "string" && url.trim()) {
      let formattedUrl = url.trim();
      if (!/^https?:\/\//i.test(formattedUrl) && !formattedUrl.startsWith("/")) {
        formattedUrl = "https://" + formattedUrl;
      }
      dataToUpdate.url = formattedUrl;
    }

    if (description !== undefined) {
      dataToUpdate.description = description ? description.trim() : null;
    }

    if (typeof order === "number") {
      dataToUpdate.order = order;
    }

    if (typeof isActive === "boolean") {
      dataToUpdate.isActive = isActive;
    }

    const updated = await prisma.resourceLink.update({
      where: { id },
      data: dataToUpdate,
      include: {
        createdBy: {
          select: { id: true, name: true, employeeId: true }
        }
      }
    });

    return res.status(200).json({
      success: true,
      message: "Resource link updated successfully.",
      data: updated
    });
  } catch (error) {
    next(error);
  }
}

/**
 * DELETE /api/links/:id
 * Delete a resource link
 */
export async function deleteLink(req, res, next) {
  try {
    const { id } = req.params;

    const existing = await prisma.resourceLink.findUnique({
      where: { id }
    });

    if (!existing) {
      return res.status(404).json({
        success: false,
        message: "Resource link not found."
      });
    }

    await prisma.resourceLink.delete({
      where: { id }
    });

    return res.status(200).json({
      success: true,
      message: "Resource link deleted successfully."
    });
  } catch (error) {
    next(error);
  }
}
