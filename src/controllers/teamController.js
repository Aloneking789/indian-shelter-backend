import { prisma } from "../config/prisma.js";

/**
 * GET /api/team
 * Get all team members for "Meet Our Team" section
 * Displays photos, names, and designations
 */
export async function getTeamMembers(req, res, next) {
  try {
    const { department, includeInactive } = req.query;

    const where = {};

    if (includeInactive !== "true") {
      where.isActive = true;
    }

    if (department && typeof department === "string" && department.trim()) {
      where.department = { contains: department.trim(), mode: "insensitive" };
    }

    const team = await prisma.teamMember.findMany({
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
      count: team.length,
      data: team
    });
  } catch (error) {
    next(error);
  }
}

/**
 * GET /api/team/:id
 * Get single team member details
 */
export async function getTeamMemberById(req, res, next) {
  try {
    const { id } = req.params;

    const member = await prisma.teamMember.findUnique({
      where: { id },
      include: {
        createdBy: {
          select: { id: true, name: true, employeeId: true }
        }
      }
    });

    if (!member) {
      return res.status(404).json({
        success: false,
        message: "Team member not found."
      });
    }

    return res.status(200).json({
      success: true,
      data: member
    });
  } catch (error) {
    next(error);
  }
}

/**
 * POST /api/team
 * Add new team member (photo, name, designation, etc.)
 * Admin only
 */
export async function createTeamMember(req, res, next) {
  try {
    const {
      name,
      designation,
      photoUrl,
      bio,
      email,
      phone,
      department,
      order,
      isActive
    } = req.body;

    // Validation
    if (!name || typeof name !== "string" || !name.trim()) {
      return res.status(400).json({
        success: false,
        message: "Team member name is required."
      });
    }

    if (!designation || typeof designation !== "string" || !designation.trim()) {
      return res.status(400).json({
        success: false,
        message: "Designation is required."
      });
    }

    if (!photoUrl || typeof photoUrl !== "string" || !photoUrl.trim()) {
      return res.status(400).json({
        success: false,
        message: "Photo URL is required. Upload a photo via /api/storage/upload or provide a URL."
      });
    }

    const member = await prisma.teamMember.create({
      data: {
        name: name.trim(),
        designation: designation.trim(),
        photoUrl: photoUrl.trim(),
        bio: bio ? String(bio).trim() : null,
        email: email ? String(email).trim().toLowerCase() : null,
        phone: phone ? String(phone).trim() : null,
        department: department ? String(department).trim() : null,
        order: order !== undefined ? parseInt(order, 10) || 0 : 0,
        isActive: isActive !== undefined ? Boolean(isActive) : true,
        createdById: req.user ? req.user.id : null
      },
      include: {
        createdBy: {
          select: { id: true, name: true, employeeId: true }
        }
      }
    });

    return res.status(201).json({
      success: true,
      message: "Team member added successfully.",
      data: member
    });
  } catch (error) {
    next(error);
  }
}

/**
 * PATCH /api/team/:id
 * Update team member details
 * Admin only
 */
export async function updateTeamMember(req, res, next) {
  try {
    const { id } = req.params;
    const {
      name,
      designation,
      photoUrl,
      bio,
      email,
      phone,
      department,
      order,
      isActive
    } = req.body;

    const existing = await prisma.teamMember.findUnique({
      where: { id }
    });

    if (!existing) {
      return res.status(404).json({
        success: false,
        message: "Team member not found."
      });
    }

    const updateData = {};

    if (name !== undefined) {
      if (!name || typeof name !== "string" || !name.trim()) {
        return res.status(400).json({ success: false, message: "Name cannot be empty." });
      }
      updateData.name = name.trim();
    }

    if (designation !== undefined) {
      if (!designation || typeof designation !== "string" || !designation.trim()) {
        return res.status(400).json({ success: false, message: "Designation cannot be empty." });
      }
      updateData.designation = designation.trim();
    }

    if (photoUrl !== undefined) {
      if (!photoUrl || typeof photoUrl !== "string" || !photoUrl.trim()) {
        return res.status(400).json({ success: false, message: "Photo URL cannot be empty." });
      }
      updateData.photoUrl = photoUrl.trim();
    }

    if (bio !== undefined) updateData.bio = bio ? String(bio).trim() : null;
    if (email !== undefined) updateData.email = email ? String(email).trim().toLowerCase() : null;
    if (phone !== undefined) updateData.phone = phone ? String(phone).trim() : null;
    if (department !== undefined) updateData.department = department ? String(department).trim() : null;
    if (order !== undefined) updateData.order = parseInt(order, 10) || 0;
    if (isActive !== undefined) updateData.isActive = Boolean(isActive);

    const updated = await prisma.teamMember.update({
      where: { id },
      data: updateData,
      include: {
        createdBy: {
          select: { id: true, name: true, employeeId: true }
        }
      }
    });

    return res.status(200).json({
      success: true,
      message: "Team member updated successfully.",
      data: updated
    });
  } catch (error) {
    next(error);
  }
}

/**
 * DELETE /api/team/:id
 * Delete team member
 * Admin only
 */
export async function deleteTeamMember(req, res, next) {
  try {
    const { id } = req.params;

    const existing = await prisma.teamMember.findUnique({
      where: { id }
    });

    if (!existing) {
      return res.status(404).json({
        success: false,
        message: "Team member not found."
      });
    }

    await prisma.teamMember.delete({
      where: { id }
    });

    return res.status(200).json({
      success: true,
      message: `Team member '${existing.name}' deleted successfully.`
    });
  } catch (error) {
    next(error);
  }
}
