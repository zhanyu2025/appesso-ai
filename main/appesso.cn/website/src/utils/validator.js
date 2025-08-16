import validator from 'validator';

export const newPostValidator = {
  validateForm: (values) => {
    const errors = {};
    if (!values.content.trim()) {
      errors.content = 'This is a mandatory field';
    } else if (values.content.length > 255) {
      errors.content = 'Post cannot contain more than 255 characters';
    }
    return errors;
  },
};

export const messageValidator = {
  validateForm: (values) => {
    const errors = {};
    if (!values.content.trim()) {
      errors.content = 'This is a mandatory field';
    } else if (values.content.length > 255) {
      errors.content = 'Post cannot contain more than 255 characters';
    }
    return errors;
  },
};

export const changeUsernameValidator = {
  validateForm: (values) => {
    const errors = {};
    if (!values.username.trim()) {
      errors.username = 'This is a mandatory field';
    } else if (values.username.length < 3) {
      errors.username = 'Username cannot be less than 3 characters';
    } else if (values.username.length > 30) {
      errors.username = 'Username cannot be more than 30 characters';
    } else if (validator.isNumeric(values.username)) {
      errors.username = 'Username must be alphanumeric';
    } else if (validator.contains(values.username, '@')) {
      errors.username = 'Invalid username. Username must not contain @';
    }
    return errors;
  },
};

export const ChangeBirthDateValidator = {
  validateForm: (values) => {
    const errors = {};
    if (!values.month.trim()) {
      errors.month = '请选择月份';
    }
    if (!values.day.trim()) {
      errors.day = '请选择日期';
    }
    if (!values.year.trim()) {
      errors.year = '请选择年份';
    }

    // Additional date validation
    if (values.month.trim() && values.day.trim() && values.year.trim()) {
      const dateString = `${values.year}/${values.month}/${values.day}`;
      const dateObj = new Date(dateString);

      if (Number.isNaN(dateObj.getTime())) {
        errors.month = '请选择有效的日期';
      } else {
        // Check if the date is in the future
        if (dateObj > new Date()) {
          errors.month = '出生日期不能是未来时间';
        }
        // Check if the date is too old (more than 120 years ago)
        const minDate = new Date();
        minDate.setFullYear(minDate.getFullYear() - 120);
        if (dateObj < minDate) {
          errors.month = '出生日期不能超过120年前';
        }
      }
    }

    return errors;
  },
};

export const editProfileValidator = {
  validateForm: (values) => {
    const errors = {};
    if (!values.name.trim()) {
      errors.name = '姓名不能为空';
    } else if (values.name.length < 2) {
      errors.name = '姓名不能少于2个字符';
    } else if (values.name.length > 100) {
      errors.name = '姓名不能超过100个字符';
    }
    if (values.bio.trim().length > 255) {
      errors.bio = '个人简介不能超过255个字符';
    }
    if (values.website.trim() && !validator.isURL(values.website)) {
      errors.website = '网站地址无效';
    }
    if (!values.month.trim()) {
      errors.month = '请选择月份';
    }
    if (!values.day.trim()) {
      errors.day = '请选择日期';
    }
    if (!values.year.trim()) {
      errors.year = '请选择年份';
    }

    // Additional date validation
    if (values.month.trim() && values.day.trim() && values.year.trim()) {
      const dateString = `${values.year}/${values.month}/${values.day}`;
      const dateObj = new Date(dateString);

      if (Number.isNaN(dateObj.getTime())) {
        errors.month = '请选择有效的日期';
      } else {
        // Check if the date is in the future
        if (dateObj > new Date()) {
          errors.month = '出生日期不能是未来时间';
        }
        // Check if the date is too old (more than 120 years ago)
        const minDate = new Date();
        minDate.setFullYear(minDate.getFullYear() - 120);
        if (dateObj < minDate) {
          errors.month = '出生日期不能超过120年前';
        }
      }
    }

    return errors;
  },
};
