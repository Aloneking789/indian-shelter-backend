import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "india_shelter_finance_jwt_secret_key_2026_super_secure_token";
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || "7d";

/**
 * Generate a signed JWT token
 * @param {object} payload 
 * @param {string} [expiresIn]
 * @returns {string}
 */
export function generateToken(payload, expiresIn = JWT_EXPIRES_IN) {
  return jwt.sign(payload, JWT_SECRET, { expiresIn });
}

/**
 * Verify a JWT token
 * @param {string} token 
 * @returns {object} Decoded payload
 */
export function verifyToken(token) {
  return jwt.verify(token, JWT_SECRET);
}
