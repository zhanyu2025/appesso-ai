import axios from 'axios';

const instance = axios.create({
  baseURL:
    process.env.NODE_ENV === 'development'
      ? ''
      : process.env.REACT_APP_API_URL?.replace(/\/api\/?$/, ''),
  withCredentials: true,
  timeout: 30000,
});

export default instance;
