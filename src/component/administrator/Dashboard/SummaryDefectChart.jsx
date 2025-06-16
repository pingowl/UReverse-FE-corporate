import React, { useEffect, useState } from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';
import styles from './Dashboard.module.css';
import { fetchDashboardSummaryDefectChart } from '../../../api/administrator/fetchDashboardSummaryDefectChart';
import CustomTooltip from './CustomTooltip'; // ✅ 추가

const COLORS = [
  '#6C91E6', '#7D89C2', '#E89FB0', '#EAD38C',
  '#A891B7', '#E8A07D', '#B8C292',
];

const SummaryDefectChart = ({ date }) => {
  const [type, setType] = useState('AI');
  const [chartData, setChartData] = useState([]);
  const [hasData, setHasData] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      const result = await fetchDashboardSummaryDefectChart(date, type === 'AI' ? 'ai' : 'human');
      if (result.success) {
        setHasData(result.totalCount > 0);
        setChartData(result.data);
      } else {
        setHasData(false);
        console.error('결함 통계 조회 오류:', result.error);
      }
    };

    if (date) loadData();
  }, [date, type]);

  return (
    <div className={styles.chartCard}>
      <div className={styles.cardHeader}>
        <span className={styles.subtitle}>상품 결함 유형 통계</span>
        <div className={styles.buttonGroup}>
          <button
            className={type === 'AI' ? styles.active : ''}
            onClick={() => setType('AI')}
          >
            AI
          </button>
          <button
            className={type === '검수자' ? styles.active : ''}
            onClick={() => setType('검수자')}
          >
            검수자
          </button>
        </div>
      </div>
      <div className={styles.chartDiv}>
        {hasData ? (
          <PieChart width={500} height={310}>
            <Pie
              data={chartData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={140}
              label
            >
              {chartData.map((_, i) => (
                <Cell key={i} fill={COLORS[i % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip content={<CustomTooltip />} /> {/* ✅ 툴팁 변경 */}
            <Legend layout="vertical" verticalAlign="middle" align="right" />
          </PieChart>
        ) : (
          <div className={styles.noData}>아직 데이터가 없습니다.</div>
        )}
      </div>
    </div>
  );
};

export default SummaryDefectChart;
