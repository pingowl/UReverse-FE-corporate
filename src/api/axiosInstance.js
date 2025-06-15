import axios from 'axios';

const instance = axios.create({
  baseURL: '/api/v1',
  withCredentials: true, // refreshToken 쿠키 자동 포함
});

// 요청 인터셉터: accessToken 자동 헤더 추가
instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('accessToken');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default instance;
