import axios from '../api/axiosInstance';

/**
 * 상품 목록 조회 (검수 대기/완료 모두 사용)
 * @param {Object} params
 * @param {string} params.keyword - 검색 키워드
 * @param {boolean} params.inspected - 검수 여부(false: 대기, true: 완료)
 * @param {number} params.pageNum - 페이지 번호
 * @param {number} params.pageSize - 페이지당 아이템 수
 * @returns {Promise<{items: Array, totalPages: number, success: boolean, error?: string}>}
 */
export async function fetchProducts({ keyword, inspected, pageNum, pageSize }) {
  try {
    const response = await axios.get('/inspectors/products/search', {
      params: { keyword, inspected, pageNum, pageSize },
    });
    if (response.data.success) {
      return {
        success: true,
        ...response.data.response,
      };
    } else {
      return {
        success: false,
        error: response.data.error,
        items: [],
        totalPages: 1,
      };
    }
  } catch (error) {
    return {
      success: false,
      error: error.message,
      items: [],
      totalPages: 1,
    };
  }
}

/**
 * 검수 대기 상품 상세 조회
 * @param {string} productId - 상품 ID
 * @returns {Promise<Object>} - { success, response }
 */
export async function fetchPendingProductDetail(productId) {
  try {
    const res = await axios.get(`/inspectors/products/${productId}/pending`);
    return res.data;
  } catch (error) {
    throw error;
  }
}

/**
 * 상품 검수 결과 등록
 * @param {Object} data - 검수 결과 데이터 (productId 및 form 값 포함)
 * @returns {Promise<Object>} - 서버 응답 데이터
 */
export async function submitProductInspection(data) {
  try {
    const res = await axios.post('/inspectors/products/inspection', data);
    return res.data;
  } catch (error) {
    throw error;
  }
}
