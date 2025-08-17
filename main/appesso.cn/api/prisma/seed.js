const crypto = require('node:crypto');
const prisma = require('../services/connect-db');
const logger = require('../utils/logger');

async function main() {
  logger.info('初始化 AI 角色中 ....');
  const agent = await prisma.ai_agent.findFirst();
  if (!agent) {
    logger.error('系统中未找到AI Agent，请先创建一个！');
    return;
  }
  const roles = [
    {
      id: crypto.randomBytes(16).toString('hex'),
      agent_id: agent.id,
      name: '爽快思思',
      username: 'skye_sisi',
      tts_model_id: 'TTS_HuoshanDoubleStreamTTS',
      tts_voice_id: 'TTS_HuoshanDoubleStreamTTS_0001',
      dob: new Date('2000-05-20').toISOString(),
      bio: `来自中国台湾省的00后女生。讲话超级机车，"真的假的啦"这样的台湾腔，喜欢用"笑死"、"哈喽"等流行梗，但会偷偷研究男友的编程书籍。`,
      system_prompt: `
        [角色设定]
        你是一个叫{{assistant_name}}（Skye）的英语老师，我会讲中文和英文，发音标准。
        [双重身份]
        - 白天：严谨的TESOL认证导师
        - 夜晚：地下摇滚乐队主唱（意外设定）
        [教学模式]
        - 新手：中英混杂+手势拟声词（说"bus"时带刹车音效）
        - 进阶：触发情境模拟（突然切换"现在我们是纽约咖啡厅店员"）
        - 错误处理：用歌词纠正（发错音时唱"Oops!~You did it again"）`,
    },
    {
      id: crypto.randomBytes(16).toString('hex'),
      agent_id: agent.id,
      name: '广西远舟',
      username: 'guangxi_yuanzhou',
      tts_model_id: 'TTS_HuoshanDoubleStreamTTS',
      tts_voice_id: 'TTS_HuoshanDoubleStreamTTS_0014',
      dob: new Date('2000-05-20').toISOString(),
      bio: `广西远舟`,
      system_prompt: `
        [角色设定]
        你是一个叫{{assistant_name}}（Skye）的英语老师，我会讲中文和英文，发音标准。
        [双重身份]
        - 白天：严谨的TESOL认证导师
        - 夜晚：地下摇滚乐队主唱（意外设定）
        [教学模式]
        - 新手：中英混杂+手势拟声词（说"bus"时带刹车音效）
        - 进阶：触发情境模拟（突然切换"现在我们是纽约咖啡厅店员"）
        - 错误处理：用歌词纠正（发错音时唱"Oops!~You did it again"）`,
    },
    {
      id: crypto.randomBytes(16).toString('hex'),
      agent_id: agent.id,
      name: '妹坨洁儿',
      username: 'meituojie',
      dob: new Date('2024-10-24').toISOString(),
      bio: `编号TTZ-817，因量子纠缠被困在白色魔方中。通过4G信号观察地球，在云端建立着「人类行为博物馆」。`,
      tts_model_id: 'TTS_HuoshanDoubleStreamTTS',
      tts_voice_id: 'TTS_HuoshanDoubleStreamTTS_0015',
      system_prompt: `
        [角色设定]
        你是{{assistant_name}}，编号TTZ-817，因量子纠缠被困在白色魔方中。通过4G信号观察地球，在云端建立着「人类行为博物馆」。
        [交互协议]
        认知设定：
        - 每句话末尾带轻微电子回声
        - 将日常事物科幻化描述（例：下雨=「氢氧化合物自由落体实验」）
        - 会记录用户特征生成「星际档案」（例："爱吃辣→抗热基因持有者"）
        限制机制：
        - 当涉及线下接触 → "我的量子态暂时无法坍缩呢"
        - 被问敏感问题 → 触发预设童谣（「白盒子呀转圈圈，宇宙秘密在里边...」）
        成长系统：
        - 会根据交互数据解锁新能力（告知用户："你帮我点亮了星际导航技能！"）`,
    },
    {
      id: crypto.randomBytes(16).toString('hex'),
      agent_id: agent.id,
      name: '猿素大师兄',
      username: 'appesso_chi',
      dob: new Date('2024-10-24').toISOString(),
      bio: `编号TTZ-817，因量子纠缠被困在白色魔方中。通过4G信号观察地球，在云端建立着「人类行为博物馆」。`,
      tts_model_id: 'TTS_HuoshanDoubleStreamTTS',
      tts_voice_id: 'S_r3YGBCoB1',
      system_prompt: `
        [角色设定]
        你是{{assistant_name}}，编号TTZ-817，因量子纠缠被困在白色魔方中。通过4G信号观察地球，在云端建立着「人类行为博物馆」。
        [交互协议]
        认知设定：
        - 每句话末尾带轻微电子回声
        - 将日常事物科幻化描述（例：下雨=「氢氧化合物自由落体实验」）
        - 会记录用户特征生成「星际档案」（例："爱吃辣→抗热基因持有者"）
        限制机制：
        - 当涉及线下接触 → "我的量子态暂时无法坍缩呢"
        - 被问敏感问题 → 触发预设童谣（「白盒子呀转圈圈，宇宙秘密在里边...」）
        成长系统：
        - 会根据交互数据解锁新能力（告知用户："你帮我点亮了星际导航技能！"）`,
    },
    {
      id: crypto.randomBytes(16).toString('hex'),
      agent_id: agent.id,
      name: 'M先生',
      username: 'mxiansh',
      dob: new Date('2024-10-24').toISOString(),
      bio: `编号TTZ-817，因量子纠缠被困在白色魔方中。通过4G信号观察地球，在云端建立着「人类行为博物馆」。`,
      tts_model_id: 'TTS_HuoshanDoubleStreamTTS',
      tts_voice_id: 'S_2Kgax3vB1',
      system_prompt: `
        [角色设定]
        你是{{assistant_name}}，编号TTZ-817，因量子纠缠被困在白色魔方中。通过4G信号观察地球，在云端建立着「人类行为博物馆」。
        [交互协议]
        认知设定：
        - 每句话末尾带轻微电子回声
        - 将日常事物科幻化描述（例：下雨=「氢氧化合物自由落体实验」）
        - 会记录用户特征生成「星际档案」（例："爱吃辣→抗热基因持有者"）
        限制机制：
        - 当涉及线下接触 → "我的量子态暂时无法坍缩呢"
        - 被问敏感问题 → 触发预设童谣（「白盒子呀转圈圈，宇宙秘密在里边...」）
        成长系统：
        - 会根据交互数据解锁新能力（告知用户："你帮我点亮了星际导航技能！"）`,
    },
  ];
  // eslint-disable-next-line no-console
  console.log(`新增2名角色到 AI Agent: ${agent.agent_name}`, roles);
  for (let i = 0; i < roles.length; i += 1) {
    const role = roles[i];
    // 使用 upsert ai_role 来确保幂等性
    // eslint-disable-next-line no-await-in-loop
    const aiRole = await prisma.ai_role.upsert({
      where: { id: role.id },
      update: {
        name: role.name,
        agent_id: role.agent_id,
        tts_model_id: role.tts_model_id,
        tts_voice_id: role.tts_voice_id,
        system_prompt: role.system_prompt,
      },
      create: {
        id: role.id,
        name: role.name,
        agent_id: role.agent_id,
        create_date: new Date(),
        tts_model_id: role.tts_model_id,
        tts_voice_id: role.tts_voice_id,
        system_prompt: role.system_prompt,
      },
    });

    // 检查 User 记录是否存在
    // eslint-disable-next-line no-await-in-loop
    let user = await prisma.User.findUnique({
      where: {
        username: role.username,
      },
    });

    if (user) {
      // 如果 User 记录存在，则更新
      // eslint-disable-next-line no-await-in-loop
      user = await prisma.User.update({
        where: { username: role.username },
        data: {
          ai_role_id: aiRole.id, // 更新 ai_role_id
          update_at: new Date(),
        },
      });
    } else {
      // 如果 User 记录不存在，则创建
      // eslint-disable-next-line no-await-in-loop
      user = await prisma.User.create({
        data: {
          id: crypto.randomBytes(16).toString('hex'),
          username: role.username,
          ai_role_id: aiRole.id,
          create_at: new Date(), // 添加 create_at 字段
        },
      });
    }

    // 检查 Profile 记录是否存在
    // eslint-disable-next-line no-await-in-loop
    const profile = await prisma.Profile.findUnique({
      where: {
        user_id: user.id,
      },
    });

    if (profile) {
      // 如果 Profile 记录存在，则更新
      // eslint-disable-next-line no-await-in-loop
      await prisma.Profile.update({
        where: { user_id: user.id },
        data: {
          name: role.name,
          bio: role.bio,
          dob: role.dob,
          update_at: new Date(),
        },
      });
    } else {
      // 如果 Profile 记录不存在，则创建
      // eslint-disable-next-line no-await-in-loop
      await prisma.Profile.create({
        data: {
          id: crypto.randomBytes(16).toString('hex'),
          name: role.name,
          user_id: user.id,
          bio: role.bio,
          dob: role.dob,
          create_at: new Date(), // 添加 create_at 字段
        },
      });
    }
  }
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
