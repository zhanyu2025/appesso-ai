const mobileSchema = {
  mobile: {
    trim: true,
    notEmpty: {
      errorMessage: '手机号码不能为空',
    },
    matches: {
      options: [/^\d{11}$/],
      errorMessage: '手机号码必须是11位数字',
    },
  },
};

const mobileLoginSchema = {
  mobile: {
    trim: true,
    notEmpty: {
      errorMessage: '手机号码不能为空',
    },
    matches: {
      options: [/^\d{11}$/],
      errorMessage: '手机号码必须是11位数字',
    },
  },
  code: {
    trim: true,
    notEmpty: {
      errorMessage: '验证码不能为空',
    },
    matches: {
      options: [/^\d{6}$/],
      errorMessage: '验证码必须是6位数字',
    },
  },
};

const postSchema = {
  content: {
    trim: true,
    notEmpty: {
      errorMessage: 'This is a mandatory field',
    },
    isLength: {
      options: {
        min: 1,
        max: 255,
      },
      errorMessage: 'Post length cannot be less than 1 and more than 255',
    },
  },
};

const chatSchema = {
  participantId: {
    notEmpty: {
      errorMessage: 'This is a mandatory field',
    },
    isInt: {
      errorMessage: 'Participant Id should be an integer',
    },
  },
};

const messageSchema = {
  content: {
    trim: true,
    notEmpty: {
      errorMessage: 'This is a mandatory field',
    },
    isLength: {
      options: {
        min: 1,
        max: 1000,
      },
      errorMessage: 'Message length cannot be less than 1 and more than 1000',
    },
  },
};

const validateUsername = {
  username: {
    trim: true,
    notEmpty: {
      errorMessage: '用户名不能为空',
    },
    isLength: {
      options: {
        min: 3,
        max: 30,
      },
      errorMessage: '用户名长度必须在3到30个字符之间',
    },
    matches: {
      options: [/^[a-zA-Z0-9_]+$/],
      errorMessage: '用户名只能包含字母、数字和下划线',
    },
    custom: {
      options: (value) => {
        if (value.includes('@')) {
          throw new Error('用户名不能包含@');
        }
        return true;
      },
    },
  },
};

const validateDateOfBirth = {
  month: {
    notEmpty: {
      errorMessage: '月份不能为空',
    },
  },
  day: {
    notEmpty: {
      errorMessage: '日期不能为空',
    },
  },
  year: {
    notEmpty: {
      errorMessage: '年份不能为空',
    },
  },
};

const profileSchema = {
  name: {
    trim: true,
    notEmpty: {
      errorMessage: '姓名不能为空',
    },
    isLength: {
      errorMessage: '姓名必须至少1个字符，最多20个字符长',
      options: {
        min: 1,
        max: 20,
      },
    },
    escape: true,
  },
  bio: {
    trim: true,
    isLength: {
      errorMessage: '简介不能超过255个字符',
      options: {
        min: 0,
        max: 255,
      },
    },
    optional: true,
  },
  website: {
    trim: true,
    optional: { options: { checkFalsy: true } },
    isURL: {
      errorMessage: '网站地址无效',
      options: {
        protocols: ['http', 'https'],
      },
    },
  },
  dateOfBirth: {
    notEmpty: {
      errorMessage: '出生日期不能为空',
    },
    isISO8601: {
      errorMessage: '无效的日期格式',
      options: {
        strict: true,
      },
    },
  },
};

module.exports = {
  postSchema,
  chatSchema,
  mobileSchema,
  mobileLoginSchema,
  messageSchema,
  profileSchema,
  validateUsername,
  validateDateOfBirth,
};
