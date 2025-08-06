const createError = require('http-errors');
const { customAlphabet } = require('nanoid');
const jwt = require('jsonwebtoken');
const ms = require('ms');

const prisma = require('../services/connect-db');
const { clearTokens, generateJWT } = require('../utils/auth');
const {
  REFRESH_TOKEN_SECRET,
  ACCESS_TOKEN_SECRET,
  ACCESS_TOKEN_LIFE,
} = require('../utils/config');

const nanoid = customAlphabet('abcdefghijklmnopqrstuvwxyz0123456789', 10);

const loginMobile = async (req, res, next) => {
  const { mobile } = req.body;
  try {
    let user = await prisma.user.findUnique({
      where: {
        mobile,
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
      // Create a new user if not found
      const generatedUsername = `user_${nanoid()}`; // Generate a username
      user = await prisma.user.create({
        data: {
          mobile,
          username: generatedUsername,
          provider: 'mobile',
          profile: {
            create: {
              name: generatedUsername, // Default name from generated username
              img: 'https://storage.googleapis.com/twitter-clone-347513.appspot.com/images/default_avatar.jpg', // Default image
            },
          },
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
    }

    req.userId = user.id;
    return next();
  } catch (error) {
    return next(error);
  }
};

const verifyAndGenerateAccessToken = async (req, res, next) => {
  const { signedCookies } = req;
  const { refreshToken } = signedCookies;
  if (!refreshToken) {
    return res.sendStatus(204);
  }
  try {
    const refreshTokenInDB = await prisma.session.findFirst({
      where: {
        refreshToken,
      },
    });
    if (!refreshTokenInDB) {
      await clearTokens(req, res, next);
      const error = createError.Unauthorized();
      throw error;
    }
    try {
      const decodedToken = jwt.verify(refreshToken, REFRESH_TOKEN_SECRET);
      const { userId } = decodedToken;
      const user = await prisma.user.findUnique({
        where: {
          id: userId,
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
        await clearTokens(req, res);
        const error = createError('Invalid credentials', 401);
        throw error;
      }
      const accessToken = generateJWT(
        user.id,
        ACCESS_TOKEN_SECRET,
        ACCESS_TOKEN_LIFE
      );
      return res.status(200).json({
        user,
        accessToken,
        expiresAt: new Date(Date.now() + ms(ACCESS_TOKEN_LIFE)),
      });
    } catch (error) {
      return next(error);
    }
  } catch (error) {
    return next(error);
  }
};

const logout = async (req, res, next) => {
  await clearTokens(req, res, next);
  return res.sendStatus(204);
};

module.exports = {
  loginMobile,
  verifyAndGenerateAccessToken,
  logout,
};
