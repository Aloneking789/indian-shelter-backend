import { prisma } from "../config/prisma.js";
import { hashPassword } from "../utils/password.js";

/**
 * GET /api/staff
 * List all staff members (Admin only)
 */
export async function getStaffList(req, res, next) {
  try {
    const { search, role, status } = req.query;

    const where = {};

    if (role && (role === "ADMIN" || role === "EMPLOYEE")) {
      where.role = role;
    }

    if (status === "active") {
      where.isActive = true;
    } else if (status === "inactive") {
      where.isActive = false;
    }

    if (search && typeof search === "string" && search.trim()) {
      const q = search.trim();
      where.OR = [
        { name: { contains: q, mode: "insensitive" } },
        { employeeId: { contains: q, mode: "insensitive" } },
        { email: { contains: q, mode: "insensitive" } },
      ];
    }

    const staffMembers = await prisma.user.findMany({
      where,
      orderBy: [
        { role: "asc" },
        { createdAt: "asc" }
      ],
      select: {
        id: true,
        employeeId: true,
        name: true,
        email: true,
        role: true,
        isActive: true,
        createdAt: true,
        updatedAt: true,
        _count: {
          select: {
            createdTemplates: true,
          }
        }
      }
    });

    return res.status(200).json({
      success: true,
      count: staffMembers.length,
      data: staffMembers
    });
  } catch (error) {
    next(error);
  }
}

/**
 * POST /api/staff
 * Add new staff member with initial password (Admin only)
 */
export async function createStaff(req, res, next) {
  try {
    const { employeeId, name, email, role, password } = req.body;

    if (!employeeId || typeof employeeId !== "string" || !employeeId.trim()) {
      return res.status(400).json({
        success: false,
        message: "Employee ID is required (e.g. IS-EMP-003)."
      });
    }

    if (!name || typeof name !== "string" || !name.trim()) {
      return res.status(400).json({
        success: false,
        message: "Full name is required."
      });
    }

    if (!email || typeof email !== "string" || !email.trim()) {
      return res.status(400).json({
        success: false,
        message: "Corporate email address is required."
      });
    }

    const trimmedEmail = email.trim().toLowerCase();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(trimmedEmail)) {
      return res.status(400).json({
        success: false,
        message: "Please provide a valid email address."
      });
    }

    if (!password || typeof password !== "string" || password.trim().length < 6) {
      return res.status(400).json({
        success: false,
        message: "Initial password is required and must be at least 6 characters long."
      });
    }

    const trimmedEmployeeId = employeeId.trim().toUpperCase();
    const trimmedName = name.trim();
    const staffRole = role === "ADMIN" ? "ADMIN" : "EMPLOYEE";

    // Check uniqueness of Employee ID
    const existingById = await prisma.user.findUnique({
      where: { employeeId: trimmedEmployeeId }
    });
    if (existingById) {
      return res.status(400).json({
        success: false,
        message: `Employee ID '${trimmedEmployeeId}' is already assigned to ${existingById.name}.`
      });
    }

    // Check uniqueness of Email
    const existingByEmail = await prisma.user.findUnique({
      where: { email: trimmedEmail }
    });
    if (existingByEmail) {
      return res.status(400).json({
        success: false,
        message: `Email address '${trimmedEmail}' is already registered.`
      });
    }

    // Hash the password securely with bcrypt
    const passwordHash = await hashPassword(password.trim());

    const newStaff = await prisma.user.create({
      data: {
        employeeId: trimmedEmployeeId,
        name: trimmedName,
        email: trimmedEmail,
        role: staffRole,
        passwordHash,
        isActive: true
      },
      select: {
        id: true,
        employeeId: true,
        name: true,
        email: true,
        role: true,
        isActive: true,
        createdAt: true,
        updatedAt: true
      }
    });

    return res.status(201).json({
      success: true,
      message: `Staff member '${newStaff.name}' (${newStaff.employeeId}) successfully registered.`,
      data: newStaff
    });
  } catch (error) {
    next(error);
  }
}

/**
 * PATCH /api/staff/:id/password
 * Admin changes / resets password for a staff member (Admin only)
 */
export async function changeStaffPassword(req, res, next) {
  try {
    const { id } = req.params;
    const { newPassword } = req.body;

    if (!newPassword || typeof newPassword !== "string" || newPassword.trim().length < 6) {
      return res.status(400).json({
        success: false,
        message: "New password must be at least 6 characters long."
      });
    }

    const staffMember = await prisma.user.findUnique({
      where: { id }
    });

    if (!staffMember) {
      return res.status(404).json({
        success: false,
        message: "Staff member not found."
      });
    }

    // Hash new password
    const passwordHash = await hashPassword(newPassword.trim());

    await prisma.user.update({
      where: { id },
      data: { passwordHash }
    });

    return res.status(200).json({
      success: true,
      message: `Password for ${staffMember.name} (${staffMember.employeeId}) updated successfully.`
    });
  } catch (error) {
    next(error);
  }
}

/**
 * PATCH /api/staff/:id
 * Update staff details (name, email, role, isActive) (Admin only)
 */
export async function updateStaff(req, res, next) {
  try {
    const { id } = req.params;
    const { name, email, role, isActive } = req.body;

    const staff = await prisma.user.findUnique({
      where: { id }
    });

    if (!staff) {
      return res.status(404).json({
        success: false,
        message: "Staff member not found."
      });
    }

    // Prevent admin from deactivating or demoting themselves
    if (req.user.id === id) {
      if (isActive === false) {
        return res.status(400).json({
          success: false,
          message: "You cannot deactivate your own administrative account."
        });
      }
      if (role && role !== "ADMIN") {
        return res.status(400).json({
          success: false,
          message: "You cannot revoke your own administrator role."
        });
      }
    }

    const dataToUpdate = {};

    if (name && typeof name === "string" && name.trim()) {
      dataToUpdate.name = name.trim();
    }

    if (email && typeof email === "string" && email.trim()) {
      const trimmedEmail = email.trim().toLowerCase();
      if (trimmedEmail !== staff.email) {
        const emailCheck = await prisma.user.findUnique({ where: { email: trimmedEmail } });
        if (emailCheck) {
          return res.status(400).json({
            success: false,
            message: `Email '${trimmedEmail}' is already taken.`
          });
        }
        dataToUpdate.email = trimmedEmail;
      }
    }

    if (role && (role === "ADMIN" || role === "EMPLOYEE")) {
      dataToUpdate.role = role;
    }

    if (typeof isActive === "boolean") {
      dataToUpdate.isActive = isActive;
    }

    const updatedStaff = await prisma.user.update({
      where: { id },
      data: dataToUpdate,
      select: {
        id: true,
        employeeId: true,
        name: true,
        email: true,
        role: true,
        isActive: true,
        createdAt: true,
        updatedAt: true
      }
    });

    return res.status(200).json({
      success: true,
      message: `Staff details for '${updatedStaff.name}' updated successfully.`,
      data: updatedStaff
    });
  } catch (error) {
    next(error);
  }
}

/**
 * DELETE /api/staff/:id
 * Delete or deactivate staff member (Admin only)
 */
export async function deleteStaff(req, res, next) {
  try {
    const { id } = req.params;

    if (req.user.id === id) {
      return res.status(400).json({
        success: false,
        message: "You cannot delete your own account."
      });
    }

    const staff = await prisma.user.findUnique({
      where: { id },
      include: {
        _count: {
          select: {
            createdTemplates: true,
            updatedTemplates: true,
            importBatches: true
          }
        }
      }
    });

    if (!staff) {
      return res.status(404).json({
        success: false,
        message: "Staff member not found."
      });
    }

    // If staff has created templates or imports, soft-deactivate instead of hard deleting to preserve audit trails
    const hasHistory =
      staff._count.createdTemplates > 0 ||
      staff._count.updatedTemplates > 0 ||
      staff._count.importBatches > 0;

    if (hasHistory) {
      await prisma.user.update({
        where: { id },
        data: { isActive: false }
      });
      return res.status(200).json({
        success: true,
        message: `Staff member '${staff.name}' has associated templates/history. Their account has been deactivated.`
      });
    }

    await prisma.user.delete({
      where: { id }
    });

    return res.status(200).json({
      success: true,
      message: `Staff member '${staff.name}' (${staff.employeeId}) has been deleted.`
    });
  } catch (error) {
    next(error);
  }
}
