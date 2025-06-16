import axios from 'axios';

const instance = axios.create({
  baseURL: '/api/v1',
  withCredentials: true,
});

let isRefreshing = false;
let refreshSubscribers = [];

function onRefreshed(token) {
  refreshSubscribers.forEach(cb => cb(token));
  refreshSubscribers = [];
}

function addRefreshSubscriber(cb) {
  refreshSubscribers.push(cb);
}

function redirectToLogin(path) {
  alert('로그인이 필요합니다.');
  setTimeout(() => {
    if (path.startsWith('/admin')) {
      window.location.href = '/admin/login';
    } else if (path.startsWith('/inspector')) {
      window.location.href = '/inspector/login';
    } else {
      window.location.href = '/login';
    }
  }, 300);
}

instance.interceptors.request.use(
  config => {
    const token = localStorage.getItem('accessToken');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  error => Promise.reject(error)
);

instance.interceptors.response.use(
  response => response,
  async error => {
    const originalRequest = error.config;
    const path = window.location.pathname;

    if (
      error.response &&
      error.response.status === 403 &&
      !originalRequest._retry &&
      !/^\/(admin|inspector)\/login/.test(path)
    ) {
      originalRequest._retry = true;
      localStorage.removeItem('accessToken');

      if (!isRefreshing) {
        isRefreshing = true;
        try {
          const res = await axios.get('/api/v1/auth/refresh', {
            withCredentials: true,
          });

          const newAccessToken = res.data.response.accessToken;
          localStorage.setItem('accessToken', newAccessToken);
          instance.defaults.headers['Authorization'] = `Bearer ${newAccessToken}`;
          onRefreshed(newAccessToken);
          isRefreshing = false;
        } catch (e) {
          isRefreshing = false;
          onRefreshed(null); // 실패 알림: 토큰 없음을 알려서 대기 요청 모두 실패 처리
          redirectToLogin(path);
          return Promise.reject(e);
        }
      }

      return new Promise((resolve, reject) => {
        addRefreshSubscriber(token => {
          if (token) {
            originalRequest.headers['Authorization'] = `Bearer ${token}`;
            resolve(instance(originalRequest));
          } else {
            // refresh 실패했으니 여기서 거부
            reject(error);
          }
        });
      });
    }

    return Promise.reject(error);
  }
);

export default instance;
