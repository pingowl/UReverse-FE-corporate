// api/dashboard.js
import axios from '.././axiosInstance';

/**
 * 대시보드 요약 정보 조회
 * @param {string} date - 조회할 날짜 (예: "2025-06-12")
 * @returns {Promise<{pickupRequest: number, totalPaidPoint: number, topBrands: Array<{name: string, salesCount: number}>}>}
 */

export async function fetchDashboardSummary(date) {
  try {
    const response = await axios.get(`/admins/dash-boards/summary/${date}`);
    if (response.data.success) {
      return {
        success: true,
        ...response.data.response,
      };
    } else {
      return {
        success: false,
        error: response.data.error,
        pickupRequest: 0,
        totalPaidPoint: 0,
        topBrands: [],
      };
    }
  } catch (error) {
    return {
      success: false,
      error: error.message,
      pickupRequest: 0,
      totalPaidPoint: 0,
      topBrands: [],
    };
  }
}
