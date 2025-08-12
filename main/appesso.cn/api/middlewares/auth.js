const createError = require('http-errors');
const ms = require('ms');
const { validationResult } = require('express-validator');

const prisma = require('../services/connect-db');
const { generateJWT, COOKIE_OPTIONS } = require('../utils/auth');
const { ACCESS_TOKEN_SECRET, ACCESS_TOKEN_LIFE } = require('../utils/config');

/**
 * Middleware to verify if the user is authenticated.
 * It validates the token from the Authorization header against the database.
 */
const isAuthenticated = async (req, res, next) => {
  try {
    const authHeader = req.get('Authorization');
    if (!authHeader) {
      return next(createError.Unauthorized('Authorization header missing'));
    }

    const token = authHeader.split('Bearer ')[1];
    if (!token) {
      return next(createError.Unauthorized('Token missing from header'));
    }

    // Find the token in the database
    const userToken = await prisma.sys_user_token.findUnique({
      where: {
        token,
      },
    });

    // If token is not found, it's invalid
    if (!userToken) {
      return next(createError.Unauthorized('Invalid token'));
    }

    // Check if the token has expired
    if (new Date() > new Date(userToken.expire_date)) {
      // Clean up expired token from the database
      await prisma.sys_user_token.delete({ where: { token } });
      return next(createError.Unauthorized('Token expired'));
    }

    // Attach user ID to the request object for subsequent middleware
    req.userId = userToken.user_id;
    return next();
  } catch (error) {
    return next(error);
  }
};

/**
 * Generates a new MD5 token and saves it to the database,
 * then sends it back to the client.
 */
const generateAuthTokens = async (req, res, next) => {
  try {
    if (!req.userId) {
      throw createError.InternalServerError('User ID not found on request');
    }

    const user = await prisma.sys_user.findUnique({
      where: { id: req.userId },
      select: {
        id: true,
        username: true,
        create_date: true,
      },
    });

    if (!user) {
      throw createError.Unauthorized('User not found');
    }

    // Generate a new MD5 hash token
    const accessToken = generateJWT(req.userId, ACCESS_TOKEN_SECRET);
    const expireDate = new Date(Date.now() + ms(ACCESS_TOKEN_LIFE));

    // Atomically update the token if it exists, or create a new one if it doesn't
    await prisma.sys_user_token.upsert({
      where: {
        user_id: req.userId,
      },
      update: {
        token: accessToken,
        expire_date: expireDate,
        update_date: new Date(),
      },
      create: {
        id: BigInt(Date.now()),
        user_id: req.userId,
        token: accessToken,
        expire_date: expireDate,
        create_date: new Date(),
        update_date: new Date(),
      },
    });

    res.cookie('accessToken', accessToken, {
      ...COOKIE_OPTIONS,
      expires: expireDate,
    });

    return res.status(200).json({
      user: {
        ...user,
        id: user.id.toString(),
      },
      accessToken,
      expiresAt: expireDate,
    });
  } catch (error) {
    return next(error);
  }
};

/**
 * Validates request body based on express-validator rules.
 */
const validateRequest = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      errors: errors.array({ onlyFirstError: true }),
    });
  }
  return next();
};

/**
 * Checks if a user with the given ID exists.
 */
const isValidUser = async (req, res, next) => {
  const { id } = req.params;
  try {
    const user = await prisma.sys_user.findUnique({
      where: {
        id: BigInt(id),
      },
    });
    if (!user) {
      throw createError.NotFound('User not found');
    }
    return next();
  } catch (error) {
    return next(error);
  }
};

module.exports = {
  isAuthenticated,
  generateAuthTokens,
  validateRequest,
  isValidUser,
};
