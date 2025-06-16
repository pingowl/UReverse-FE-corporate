import axios from '../axiosInstance';

export const fetchAllCategories = async () => {
  try {
    const response = await axios.get('/common/allCategoryMainName');
    if (response.data.success) {
      return { success: true, categories: response.data.response }; // ✅ key 변경
    } else {
      return { success: false, error: '카테고리 API 실패' };
    }
  } catch (error) {
    return { success: false, error: error.message || '알 수 없는 오류' };
  }
};
