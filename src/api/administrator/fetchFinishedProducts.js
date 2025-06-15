import axios from '../axiosInstance';

/**
 * 상품 리스트 조회 API
 * @param {object} params - 필터링 및 페이징 파라미터
 */

export async function fetchFinishedProducts(params) {
  try {
    const response = await axios.post('/admins/products/finish', params);
    return response.data;
  } catch (error) {
    console.error('API 요청 실패:', error);
    return {
      success: false,
      error: error.message,
    };
  }
}