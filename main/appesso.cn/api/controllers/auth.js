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

const loginMobile = async (req, res, next) => {
  const { mobile } = req.body;
  try {
    let user = await prisma.sys_user.findUnique({
      where: {
        username: mobile,
      },
    });
    if (!user) {
      user = await prisma.sys_user.create({
        data: {
          username: mobile,
        },
        select: {
          id: true,
          username: true,
          create_date: true,
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
  const { accessToken } = signedCookies;
  if (!accessToken) {
    return res.sendStatus(204);
  }
  try {
    const token = await prisma.sys_user_token.findFirst({
      where: {
        token: accessToken,
      },
    });
    if (!token) {
      await clearTokens(req, res, next);
      const error = createError.Unauthorized();
      throw error;
    }
    try {
      const user = await prisma.sys_user.findUnique({
        where: {
          id: token.user_id,
        },
        select: {
          id: true,
          username: true,
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
        user: {
          ...user,
          id: String(user.id),
        },
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
