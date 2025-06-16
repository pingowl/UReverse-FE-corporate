// src/api/user.js
import axios from '../axiosInstance';

export const fetchUser = async ({ email = '', offset = 10, pageNum = 1 }) => {
  try {
    const response = await axios.post('/admins/users', {
      email,
      offset,
      pageNum,
    });

    if (response.data.success) {
      return { success: true, data: response.data.response };
    } else {
      return { success: false, error: response.data.error || '유저 목록 불러오기 실패' };
    }
  } catch (error) {
    return { success: false, error: error.message || 'API 요청 실패' };
  }
};
