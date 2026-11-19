/**
 * Role-based authorization middleware
 * @param  {...string} allowedRoles Allowed user roles (e.g., 'ADMIN', 'EMPLOYEE')
 */
export function authorize(...allowedRoles) {
  return (req, res, next) => {
    if (!req.user) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized: Please log in first."
      });
    }

    if (!allowedRoles.includes(req.user.role)) {
      return res.status(403).json({
        success: false,
        message: `Forbidden: Only ${allowedRoles.join(" or ")} roles can perform this action.`
      });
    }

    next();
  };
}
