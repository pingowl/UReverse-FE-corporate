import axios from '../axiosInstance';

export const fetchRegisterPickup = async (productId) => {
  try {
    const response = await axios.post(`/admins/products/${productId}/pickup`);
    if (response.data.success) {
      return { success: true };
    } else {
      return { success: false, error: response.data.error || '수거 등록 실패' };
    }
  } catch (error) {
    return { success: false, error: error.message || 'API 요청 실패' };
  }
};
