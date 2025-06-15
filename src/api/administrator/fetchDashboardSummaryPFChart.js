// api/dashboard.js
import axios from '.././axiosInstance';

/**
 * 검수 결과 통계 조회
 * @param {string} date - 조회 날짜 (예: '2025-06-12')
 * @param {'human' | 'ai'} inspectorType - 'human' 또는 'ai'
 */

export async function fetchDashboardSummaryPFChart(date, inspectorType) {
   try {
    const response = await axios.get(`/admins/dash-boards/inspection-result/${date}/${inspectorType}`);
    if (response.data.success) {
      return {
        success: true,
        ...response.data.response,
      };
    } else {
      return {
        success: false,
        error: response.data.error,
        passRatio: 0,
        failRatio: 0,
      };
    }
  } catch (error) {
    return {
      success: false,
      error: error.message,
      passRatio: 0,
      failRatio: 0,
    };
  }
}
