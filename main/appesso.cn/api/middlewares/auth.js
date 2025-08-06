const createError = require('http-errors');
const ms = require('ms');
const jwt = require('jsonwebtoken');
const { validationResult } = require('express-validator');

const prisma = require('../services/connect-db');
const { generateJWT, COOKIE_OPTIONS } = require('../utils/auth');
const {
  ACCESS_TOKEN_SECRET,
  ACCESS_TOKEN_LIFE,
  REFRESH_TOKEN_SECRET,
  REFRESH_TOKEN_LIFE,
} = require('../utils/config');

const isAuthenticated = async (req, res, next) => {
  try {
    console.log('Auth middleware - checking authentication');

    const authToken = req.get('Authorization');
    console.log(
      'Auth middleware - Authorization header:',
      authToken ? 'Present' : 'Missing'
    );

    const accessToken = authToken?.split('Bearer ')[1];
    if (!accessToken) {
      console.log('Auth middleware - No access token found');
      const error = createError.Unauthorized('No access token provided');
      throw error;
    }

    const { signedCookies = {} } = req;
    const { refreshToken } = signedCookies;
    console.log(
      'Auth middleware - Refresh token:',
      refreshToken ? 'Present' : 'Missing'
    );

    if (!refreshToken) {
      console.log('Auth middleware - No refresh token found in cookies');
      const error = createError.Unauthorized('No refresh token found');
      throw error;
    }

    const refreshTokenInDB = await prisma.session.findFirst({
      where: {
        refreshToken,
      },
    });

    if (!refreshTokenInDB) {
      console.log('Auth middleware - Refresh token not found in database');
      const error = createError.Unauthorized('Invalid refresh token');
      throw error;
    }

    let decodedToken;
    try {
      decodedToken = jwt.verify(accessToken, ACCESS_TOKEN_SECRET);
      console.log('Auth middleware - Access token verified successfully');
    } catch (err) {
      console.log(
        'Auth middleware - Access token verification failed:',
        err.message
      );
      const error = createError.Unauthorized('Invalid access token');
      return next(error);
    }

    const { userId } = decodedToken;
    const user = await prisma.user.findUnique({ where: { id: userId } });

    if (!user) {
      console.log('Auth middleware - User not found for ID:', userId);
      const error = createError.Unauthorized('User not found');
      throw error;
    }

    console.log(
      'Auth middleware - Authentication successful for user:',
      userId
    );
    req.userId = user.id;
    return next();
  } catch (error) {
    console.log('Auth middleware - Error:', error.message);
    return next(error);
  }
};

const generateAuthTokens = async (req, res, next) => {
  try {
    if (!req.userId) {
      const error = createError.InternalServerError();
      throw error;
    }
    const user = await prisma.user.findUnique({
      where: {
        id: req.userId,
      },
      select: {
        id: true,
        mobile: true,
        username: true,
        provider: true,
        createdAt: true,
        profile: true,
      },
    });
    if (!user) {
      const error = createError.Unauthorized();
      throw error;
    }
    const refreshToken = generateJWT(
      req.userId,
      REFRESH_TOKEN_SECRET,
      REFRESH_TOKEN_LIFE
    );
    const accessToken = generateJWT(
      req.userId,
      ACCESS_TOKEN_SECRET,
      ACCESS_TOKEN_LIFE
    );
    await prisma.user.update({
      where: {
        id: user.id,
      },
      data: {
        sessions: {
          create: {
            refreshToken,
            expirationTime: new Date(Date.now() + ms(REFRESH_TOKEN_LIFE)),
          },
        },
      },
    });
    res.cookie('refreshToken', refreshToken, {
      ...COOKIE_OPTIONS,
      expires: new Date(Date.now() + ms(REFRESH_TOKEN_LIFE)),
    });
    return res.status(200).json({
      user,
      accessToken,
      expiresAt: new Date(Date.now() + ms(ACCESS_TOKEN_LIFE)),
    });
  } catch (error) {
    return next(error);
  }
};

const validateRequest = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      errors: errors.array({ onlyFirstError: true }),
    });
  }
  return next();
};

const isValidUser = async (req, res, next) => {
  const { id } = req.params;
  try {
    const user = await prisma.user.findUnique({
      where: {
        id: Number(id),
      },
    });
    if (!user) {
      const error = createError.NotFound();
      throw error;
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
