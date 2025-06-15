import axios from './axiosInstance';

export const fetchUserName = async () => {
  try {
    const response = await axios.get('/auth/name', {
      withCredentials: true, 
    });

    if (response.data.success) {
      return { success: true, name: response.data.response };
    } else {
      return { success: false, error: response.data.error || '이름 불러오기 실패' };
    }
  } catch (error) {
    return { success: false, error: error.message || 'API 요청 실패' };
  }
};
