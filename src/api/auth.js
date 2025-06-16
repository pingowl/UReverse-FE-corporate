import axios from '../api/axiosInstance';

/**
 * 로그인 요청 함수
 * @param {string} email
 * @param {string} password
 * @returns {Promise<{success: boolean, response?: any, error?: string}>}
 */
export async function login(email, password) {
  try {
    const res = await axios.post(
      '/auth/login',
      { email, password },
      { withCredentials: true }
    );
    return res.data;
  } catch (error) {
    // 네트워크 에러 등
    return {
      success: false,
      error: '아이디 또는 비밀번호를 확인하세요.',
    };
  }
}
