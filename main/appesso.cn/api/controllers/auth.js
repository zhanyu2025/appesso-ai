const createError = require('http-errors');
const ms = require('ms');

const prisma = require('../services/connect-db');
const { clearTokens, generateJWT } = require('../utils/auth');
const { ACCESS_TOKEN_SECRET, ACCESS_TOKEN_LIFE } = require('../utils/config');

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
  if (!signedCookies.accessToken) {
    return res.sendStatus(204);
  }
  try {
    const token = await prisma.sys_user_token.findFirst({
      where: {
        token: signedCookies.accessToken,
      },
    });
    if (!token) {
      await clearTokens(req, res, next);
      const error = createError.Unauthorized();
      throw error;
    }
    try {
      const sysUser = await prisma.sys_user.findUnique({
        where: {
          id: token.user_id,
        },
        select: {
          id: true,
        },
      });
      const user = await prisma.User.findFirst({
        where: {
          sys_user_id: BigInt(sysUser.id),
        },
        select: {
          username: true,
          profile: true,
        },
      });
      if (!sysUser || !user) {
        await clearTokens(req, res);
        const error = createError('Invalid credentials', 401);
        throw error;
      }
      const accessToken = generateJWT(
        sysUser.id,
        ACCESS_TOKEN_SECRET,
        ACCESS_TOKEN_LIFE
      );
      return res.status(200).json({
        user: {
          ...sysUser,
          id: String(sysUser.id),
          profile: user.profile,
          username: user.username,
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
