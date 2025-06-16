import React, { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';
import styles from './Dashboard.module.css';
import { fetchDashboardFinish } from '../../../api/administrator/fetchDashboardFinish';
import CustomTooltip from './CustomTooltip';

const periodMap = {
  '7days': 'week',
  '1month': 'month',
  '6months': 'halfyear',
  '1year': 'year',
};

const ChartBox = () => {
  const [period, setPeriod] = useState('7days');
  const [chartData, setChartData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      setError(null);

      try {
        const apiPeriod = periodMap[period] || 'week';
        const result = await fetchDashboardFinish(apiPeriod);

        if (result.success) {
          setChartData(result.data);
          console.log(result.data);
        } else {
          setChartData([]);
          setError('데이터를 불러오는데 실패했습니다.');
        }
      } catch (e) {
        setError('서버와 통신 중 오류가 발생했습니다.');
        setChartData([]);
      }

      setLoading(false);
    };

    loadData();
  }, [period]);

  return (
    <div className={styles.chartBox}>
      <div className={styles.header}>
        <div className={styles.leftHeader}>
          <div className={styles.tag} />
          <h2 className={styles.titleTop}>수거 상품 건수 추이</h2>
        </div>
        <select
          className={styles.dropdown}
          value={period}
          onChange={(e) => setPeriod(e.target.value)}
        >
          <option value="7days">최근 7일</option>
          <option value="1month">최근 1달</option>
          <option value="6months">최근 6개월</option>
          <option value="1year">최근 1년</option>
        </select>
      </div>

      <div className={styles.chartPlaceholder}>
        {loading ? (
          <div>로딩중...</div>
        ) : error ? (
          <div>{error}</div>
        ) : chartData.length === 0 ? (
          <div>데이터가 없습니다.</div>
        ) : (
          <ResponsiveContainer width="100%" height={350}>
            <BarChart
              data={chartData}
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
              barCategoryGap="20%"
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="baseDate" />
              <YAxis />
              <Tooltip content={<CustomTooltip customName="수거 완료" />} />
              <Bar
                dataKey="finishCount"
                fill="#77bfa3"
                radius={[5, 5, 0, 0]}
                isAnimationActive={true}
              />
            </BarChart>
          </ResponsiveContainer>
        )}
      </div>
    </div>
  );
};
export default ChartBox;
