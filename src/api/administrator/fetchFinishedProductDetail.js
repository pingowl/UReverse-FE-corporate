import axios from '../axiosInstance';

/**
 * 특정 상품 상세 조회
 * @param {number} productId
 */
export async function fetchFinishedProductDetail(productId) {
  try {
    const response = await axios.get(`/admins/products/finish/${productId}`);
    console.log(productId);
    if (response.data.success) {
      // response.data.response 가 { product: ..., result: ... } 구조라고 가정
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
