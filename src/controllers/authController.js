import { prisma } from "../config/prisma.js";
import { comparePassword, hashPassword } from "../utils/password.js";
import { generateToken } from "../utils/jwt.js";

/**
 * POST /api/auth/login
 * Login with employeeId and password
 */
export async function login(req, res, next) {
  try {
    const { employeeId, password } = req.body;

    if (!employeeId || typeof employeeId !== "string" || !employeeId.trim()) {
      return res.status(400).json({
        success: false,
        message: "Employee ID is required."
      });
    }

    if (!password || typeof password !== "string") {
      return res.status(400).json({
        success: false,
        message: "Password is required."
      });
    }

    const trimmedEmployeeId = employeeId.trim();

    const user = await prisma.user.findUnique({
      where: { employeeId: trimmedEmployeeId }
    });

    if (!user) {
      return res.status(401).json({
        success: false,
        message: "Invalid employee ID or password."
      });
    }

    if (!user.isActive) {
      return res.status(403).json({
        success: false,
        message: "Your account is deactivated. Please contact administrator."
      });
    }

    const isMatch = await comparePassword(password, user.passwordHash);
    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message: "Invalid employee ID or password."
      });
    }

    const token = generateToken({
      id: user.id,
      employeeId: user.employeeId,
      role: user.role
    });

    // Exclude passwordHash from response
    const { passwordHash: _, ...safeUser } = user;

    return res.status(200).json({
      success: true,
      message: "Login successful.",
      token,
      user: safeUser
    });
  } catch (error) {
    next(error);
  }
}

/**
 * GET /api/auth/me
 * Get current authenticated user profile
 */
export async function getMe(req, res, next) {
  try {
    return res.status(200).json({
      success: true,
      user: req.user
    });
  } catch (error) {
    next(error);
  }
}

/**
 * POST /api/auth/change-password
 * Change password for authenticated employee
 */
export async function changePassword(req, res, next) {
  try {
    const { currentPassword, newPassword } = req.body;

    if (!currentPassword || typeof currentPassword !== "string") {
      return res.status(400).json({
        success: false,
        message: "Current password is required."
      });
    }

    if (!newPassword || typeof newPassword !== "string" || newPassword.length < 6) {
      return res.status(400).json({
        success: false,
        message: "New password must be at least 6 characters long."
      });
    }

    // Retrieve user passwordHash from database
    const user = await prisma.user.findUnique({
      where: { id: req.user.id }
    });

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found."
      });
    }

    const isMatch = await comparePassword(currentPassword, user.passwordHash);
    if (!isMatch) {
      return res.status(400).json({
        success: false,
        message: "Current password is incorrect."
      });
    }

    if (currentPassword === newPassword) {
      return res.status(400).json({
        success: false,
        message: "New password cannot be the same as current password."
      });
    }

    const newHashedPassword = await hashPassword(newPassword);

    await prisma.user.update({
      where: { id: req.user.id },
      data: { passwordHash: newHashedPassword }
    });

    return res.status(200).json({
      success: true,
      message: "Password changed successfully."
    });
  } catch (error) {
    next(error);
  }
}
