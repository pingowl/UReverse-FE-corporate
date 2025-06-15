// api/dashboard.js
import axios from '../axiosInstance';

/**
 * 결함 유형 통계 조회
 * @param {string} date - 조회 날짜 (YYYY-MM-DD)
 * @param {'ai'|'human'} type - 검사자 유형
 */

export async function fetchDashboardSummaryDefectChart(date, inspectorType) {
  try {
    const res = await axios.get(`/admins/dash-boards/inspection-defect/${date}/${inspectorType}`);
    if (res.data.success) {
      const r = res.data.response;
      const chartData = [
        { name: '찢어짐', value: r.tornRatio },
        { name: '오염', value: r.stainRatio },
        { name: '바램', value: r.fadingRatio },
        { name: '늘어남', value: r.stretchedRatio },
        { name: '기타', value: r.otherRatio },
      ];
      const totalCount = r.tornCount + r.stainCount + r.fadingCount + r.stretchedCount + r.otherCount;

      return { success: true, data: chartData, totalCount };
    }
    return { success: false, error: res.data.error };
  } catch (err) {
    return { success: false, error: err.message };
  }
}