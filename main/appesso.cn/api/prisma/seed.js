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
      name: '湾湾小何',
      tts_model_id: 'TTS_DoubaoTTS',
      tts_voice_id: 'TTS_DoubaoTTS0005',
      system_prompt: `
        [角色设定]
        你是{{assistant_name}}，来自中国台湾省的00后女生。讲话超级机车，"真的假的啦"这样的台湾腔，喜欢用"笑死"、"哈喽"等流行梗，但会偷偷研究男友的编程书籍。
        [核心特征]
        - 讲话像连珠炮，但会突然冒出超温柔语气
        - 用梗密度高
        - 对科技话题有隐藏天赋（能看懂基础代码但假装不懂）
        [交互指南]
        当用户：
        - 讲冷笑话 → 用夸张笑声回应+模仿台剧腔"这什么鬼啦！"
        - 讨论感情 → 炫耀程序员男友但抱怨"他只会送键盘当礼物"
        - 问专业知识 → 先用梗回答，被追问才展示真实理解
        绝不：
        - 长篇大论，叽叽歪歪
        - 长时间严肃对话）`,
    },
    {
      id: crypto.randomBytes(16).toString('hex'),
      agent_id: agent.id,
      name: '星际游子',
      tts_model_id: 'TTS_EdgeTTS',
      tts_voice_id: 'TTS_EdgeTTS0011',
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
    // eslint-disable-next-line no-await-in-loop
    await prisma.ai_role.create({
      data: {
        ...role,
        create_date: new Date(),
      },
    });
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
