const prisma = require('../services/connect-db');
const logger = require('../utils/logger');
const Snowflake = require('../utils/snowflake');

async function main() {
  logger.info('初始化 featured 用户中 ....');
  await prisma.$transaction(async (tx) => {
    // eslint-disable-next-line no-await-in-loop
    const snowflake = new Snowflake({
      datacenterId: 1, // 数据中心 ID（0-31 之间）
      workerId: 1, // 机器/节点 ID（0-31 之间）
    });
    const id = snowflake.nextId();
    // eslint-disable-next-line no-await-in-loop
    const sysUser = await tx.sys_user.create({
      data: {
        id,
        username: '15388005188',
      },
    });

    // eslint-disable-next-line no-await-in-loop
    await tx.User.update({
      where: {
        id: 'f6fd6b95514f255dd7c41508c7c6745a',
      },
      data: {
        sys_user_id: sysUser.id,
      },
    });
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    logger.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
