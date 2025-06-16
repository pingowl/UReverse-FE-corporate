// api/dashboard.js
import axios from '../axiosInstance';

// 여기서 periodMap 제거 or 사용하지 않음
// const periodMap = {
//   '7days': 'week',
//   '1month': 'month',
//   '6months': 'halfyear',
//   '1year': 'year',
// };

export const fetchDashboardFinish= async (period) => {
  try {
    // period는 이미 컴포넌트에서 변환된 값 (week, month, halfyear, year)
    const response = await axios.get(`/admins/dash-boards/finish-stats/${period}`);

    if (response.data.success) {
      return { success: true, data: response.data.response };
    } else {
      return { success: false, error: 'API returned failure' };
    }
  } catch (error) {
    return { success: false, error: error.message || 'Unknown error' };
  }
};
