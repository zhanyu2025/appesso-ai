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
      errorMessage: 'This is a mandatory field',
    },
    isLength: {
      options: {
        min: 3,
        max: 30,
      },
      errorMessage: 'Username must be between 3 and 30 characters long',
    },
    matches: {
      options: [/^[a-zA-Z0-9_]+$/],
      errorMessage: 'Username must be alphanumeric',
    },
    custom: {
      options: (value) => {
        if (value.includes('@')) {
          throw new Error('Username must not contain @');
        }
        return true;
      },
    },
  },
};

const validateDateOfBirth = {
  month: {
    notEmpty: {
      errorMessage: 'This is a mandatory field',
    },
  },
  day: {
    notEmpty: {
      errorMessage: 'This is a mandatory field',
    },
  },
  year: {
    notEmpty: {
      errorMessage: 'This is a mandatory field',
    },
  },
};

const profileSchema = {
  name: {
    trim: true,
    notEmpty: {
      errorMessage: 'This is a mandatory field',
    },
    isLength: {
      errorMessage:
        'Name must be minimum 1 character and maximum 20 characters long',
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
      errorMessage: 'Bio cannot be more than 255 characters',
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
      errorMessage: 'Invalid website URL',
      options: {
        protocols: ['http', 'https'],
      },
    },
  },
  dateOfBirth: {
    notEmpty: {
      errorMessage: 'This is a mandatory field',
    },
    isISO8601: {
      errorMessage: 'Invalid Date',
      options: {
        strict: true,
      },
    },
  },
};

module.exports = {
  mobileLoginSchema,
  postSchema,
  chatSchema,
  messageSchema,
  profileSchema,
  validateUsername,
  validateDateOfBirth,
};
