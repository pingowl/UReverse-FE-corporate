import axios from '../axiosInstance';

export const fetchPickupProductDetail = async (productId) => {
  try {
    const response = await axios.get(`/admins/products/pickup/${productId}`);
    if (response.data.success) {
      return {
        success: true,
        response: response.data.response, 
      };
    } else {
      return {
        success: false,
        error: response.data.error || 'API 요청 실패',
      };
    }
  } catch (error) {
    return {
      success: false,
      error: error.message,
    };
  }
}
