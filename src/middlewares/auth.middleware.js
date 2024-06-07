import HttpStatus from 'http-status-codes';
import jwt from 'jsonwebtoken';

/**
 * Middleware to authenticate if user has a valid Authorization token
 * Authorization: Bearer <token>
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */

export const userAuth = async (req, res, next) => {
  try {
    let bearerToken = req.header('Authorization');
    if (!bearerToken)
      throw {
        code: HttpStatus.BAD_REQUEST,
        message: 'Authorization token is required'
      };
    bearerToken = bearerToken.split(' ')[1];

    const user = await jwt.verify(bearerToken, process.env.SECRET_KEY);
    req.userId = user._id;
    req.userRole = user.role;
    next();
  } catch (error) {
    res.status(HttpStatus.BAD_REQUEST).json({
      success: false,
      message: `${error}`
    });
  }
};

export const checkRole = async (req, res, next) => {
  if (res.userRole === 'admin') {
    next();
  } else {
    res.status(HttpStatus.UNAUTHORIZED).json({
      success: false,
      message: `${error}`
    });
  }
};
