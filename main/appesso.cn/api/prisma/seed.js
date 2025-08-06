const { faker } = require('@faker-js/faker');

const prisma = require('../services/connect-db');
const logger = require('../utils/logger');

const fakeUser = () => {
  const firstName = faker.person.firstName();
  const lastName = faker.person.lastName();
  const fullName = `${firstName} ${lastName}`;
  const mobile = faker.phone.number('1##########'); // 生成11位手机号
  const username = faker.internet.userName(firstName, lastName).toLowerCase();
  return {
    name: fullName,
    mobile,
    username,
  };
};

async function main() {
  const fakerRounds = 10; // 减少数量，只创建10个测试用户
  logger.info('Seeding....');
  
  // 创建一些测试用户
  for (let i = 0; i < fakerRounds; i += 1) {
    const user = fakeUser();
    // eslint-disable-next-line no-await-in-loop
    await prisma.user.create({
      data: {
        username: user.username,
        mobile: user.mobile,
        provider: 'mobile',
        profile: {
          create: {
            name: user.name,
          },
        },
      },
    });
  }
  
  // 创建一个测试用户用于登录
  await prisma.user.create({
    data: {
      username: 'testuser',
      mobile: '13800138000',
      provider: 'mobile',
      profile: {
        create: {
          name: '测试用户',
        },
      },
    },
  });
  
  logger.info('Seeding completed!');
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
