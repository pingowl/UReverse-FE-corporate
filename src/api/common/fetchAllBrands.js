import axios from '../axiosInstance';

export const fetchAllBrands = async () => {
  try {
    const response = await axios.get('/common/allBrands');
    if (response.data.success) {
      return { success: true, brands: response.data.response };
    } else {
      return { success: false, error: '브랜드 API 실패' };
    }
  } catch (error) {
    return { success: false, error: error.message || '알 수 없는 오류' };
  }
};
