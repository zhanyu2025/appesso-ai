const checkIfEmpty = (obj) => {
  if (obj && Object.keys(obj).length === 0) {
    return true;
  }
  return false;
};

const setAllObjectProperties = (obj, value) => {
  const newObj = Object.keys(obj).reduce((acc, cur) => {
    acc[cur] = value;
    return acc;
  }, {});
  return newObj;
};

const loadScript = (src) => {
  return new Promise((resolve, reject) => {
    try {
      const script = document.createElement('script');
      script.src = src;
      script.async = true;
      script.defer = true;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        reject(new Error(`Failed to load the script ${src}`));
      };
      document.body.appendChild(script);
    } catch (error) {
      reject(error);
    }
  });
};

const STATUS = Object.freeze({
  IDLE: 'idle',
  PENDING: 'pending',
  SUCCEEDED: 'succeeded',
  FAILED: 'failed',
});

const NOTIFICATION_TYPE = Object.freeze({
  POST: 'post',
  REPOST: 'repost',
  REPLY: 'reply',
  LIKE: 'like',
  FOLLOW: 'follow',
});

const DateOptions = {
  months: [
    { value: '1', label: '1月' },
    { value: '2', label: '2月' },
    { value: '3', label: '3月' },
    { value: '4', label: '4月' },
    { value: '5', label: '5月' },
    { value: '6', label: '6月' },
    { value: '7', label: '7月' },
    { value: '8', label: '8月' },
    { value: '9', label: '9月' },
    { value: '10', label: '10月' },
    { value: '11', label: '11月' },
    { value: '12', label: '12月' },
  ],
  year_range: 120,
  daysInMonth(month, year) {
    // If month or year not selected, show 1-31 days
    if (!month || !year) {
      const days = [];
      // eslint-disable-next-line no-plusplus
      for (let i = 1; i <= 31; i++) {
        days.push({ value: String(i), label: `${i}日` });
      }
      return days;
    }
    const totalDaysInMonth = new Date(year, month, 0).getDate();
    const days = [];
    // eslint-disable-next-line no-plusplus
    for (let i = 1; i <= totalDaysInMonth; i++) {
      days.push({ value: String(i), label: `${i}日` });
    }
    return days;
  },
  getYearsInRange(yearRange) {
    const years = [];
    const currentYear = new Date().getFullYear();
    // eslint-disable-next-line no-plusplus
    for (let i = currentYear; i >= currentYear - yearRange; i--) {
      years.push({ value: String(i), label: String(i) });
    }
    return years;
  },
};

export {
  checkIfEmpty,
  setAllObjectProperties,
  loadScript,
  STATUS,
  NOTIFICATION_TYPE,
  DateOptions,
};
