const ms = require('ms');
const createError = require('http-errors');
const prisma = require('../services/connect-db');
const { redisClient } = require('../utils/redis');
const { sendMobileCode: sendSmsCode } = require('../utils/sms');
const { clearTokens, generateJWT } = require('../utils/auth');
const { ACCESS_TOKEN_SECRET, ACCESS_TOKEN_LIFE } = require('../utils/config');

const sendMobileCode = async (req, res, next) => {
  const { mobile } = req.body;

  // 生成6位随机验证码
  const code = Math.floor(100000 + Math.random() * 900000).toString();

  try {
    // 导入Redis客户端和短信发送工具

    // 安全限制策略
    // 1. 检查IP请求频率（每IP每分钟最多3次）
    const clientIP = req.ip || req.connection.remoteAddress;
    const ipRequestCount = await redisClient.get(
      `ip_request_count:${clientIP}`
    );
    // eslint-disable-next-line radix
    if (ipRequestCount && parseInt(ipRequestCount) >= 3) {
      return res.status(429).json({
        error: '请求过于频繁，请稍后再试',
      });
    }

    // 2. 检查手机号请求频率（每手机号每分钟最多1次）
    const lastRequestTime = await redisClient.get(`mobile_code_time:${mobile}`);
    let currentTime = Math.floor(Date.now() / 1000);

    // eslint-disable-next-line radix
    if (lastRequestTime && currentTime - parseInt(lastRequestTime) < 60) {
      return res.status(429).json({
        error: '请求过于频繁，请稍后再试',
      });
    }

    // 3. 检查手机号当日发送次数（每日最多10次）
    let today = new Date().toISOString().split('T')[0];
    const dailyCount = await redisClient.get(
      `mobile_daily_count:${mobile}:${today}`
    );
    // eslint-disable-next-line radix
    if (dailyCount && parseInt(dailyCount) >= 10) {
      return res.status(429).json({
        error: '今日发送验证码次数已达上限',
      });
    }

    // 发送短信验证码
    try {
      await sendSmsCode(mobile, code);
    } catch (smsError) {
      return res.status(500).json({ 
        error: smsError.message || '短信发送失败，请稍后重试' 
      });
    }

    // 更新安全限制计数器
    // 1. 更新IP请求计数器
    const ipKey = `ip_request_count:${clientIP}`;
    const ipCount = await redisClient.incr(ipKey);
    if (ipCount === 1) {
      // 设置1分钟过期时间
      await redisClient.expire(ipKey, 60);
    }

    // 2. 记录手机号请求时间
    currentTime = Math.floor(Date.now() / 1000);
    await redisClient.setex(
      `mobile_code_time:${mobile}`,
      60,
      currentTime.toString()
    );

    // 3. 更新手机号当日发送计数器
    // eslint-disable-next-line prefer-destructuring
    today = new Date().toISOString().split('T')[0];
    const dailyKey = `mobile_daily_count:${mobile}:${today}`;
    const updatedDailyCount = await redisClient.incr(dailyKey);
    if (updatedDailyCount === 1) {
      // 设置24小时过期时间
      await redisClient.expire(dailyKey, 86400);
    }

    // 将验证码存储到Redis，设置2分钟过期时间
    await redisClient.setex(`mobile_code:${mobile}`, 120, code);

    return res.status(200).json({
      message: '验证码已发送',
    });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('发送验证码失败:', error);
    return next(error);
  }
};

const loginMobile = async (req, res, next) => {
  const { mobile, code } = req.body;

  try {
    // 导入Redis客户端
    const storedCode = await redisClient.get(`mobile_code:${mobile}`);

    // 检查验证码是否存在
    if (!storedCode) {
      return res.status(400).json({
        error: '验证码已过期或未发送，请重新获取',
      });
    }

    // 验证验证码是否正确
    if (storedCode !== code) {
      return res.status(400).json({
        error: '验证码错误',
      });
    }

    // 查找用户
    let user = await prisma.sys_user.findUnique({
      where: {
        username: mobile,
      },
    });

    // 如果用户不存在，则创建新用户
    if (!user) {
      user = await prisma.sys_user.create({
        data: {
          username: mobile,
          nickname: `用户${mobile.slice(-4)}`, // 使用手机号后四位作为昵称
          status: 1, // 默认启用状态
        },
      });
    }

    // 删除已使用的验证码
    await redisClient.del(`mobile_code:${mobile}`);

    req.userId = user.id;
    return next();
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('手机号登录失败:', error);
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
        const error = createError.Unauthorized('Invalid credentials。');
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
  logout,
  loginMobile,
  sendMobileCode,
  verifyAndGenerateAccessToken,
};
