import React, { useEffect, useState } from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';
import styles from './Dashboard.module.css';
import { fetchDashboardSummaryPFChart } from '../../../api/administrator/fetchDashboardSummaryPFChart';

const COLORS = ['#0000FF', '#FF0000'];

const SummaryPFChart = ({date}) => {
  const [type, setType] = useState('검수자');
  const [chartData, setChartData] = useState([
    { name: 'PASS', value: 0 },
    { name: 'FAIL', value: 0 },
  ]);
  const [hasData, setHasData] = useState(true);

   useEffect(() => {
    const loadChart = async () => {
      const typeKey = type === 'AI' ? 'ai' : 'human';
      const result = await fetchDashboardSummaryPFChart(date, typeKey);

     if (result.success) {
        if (result.totalCount === 0) {
          setHasData(false);
        } else {
          setHasData(true);
          setChartData([
            { name: 'PASS', value: result.passRatio },
            { name: 'FAIL', value: result.failRatio },
          ]);
        }
      } else {
        console.error('검수 통계 조회 오류:', result.error);
        setHasData(false);
      }
    };

    if (date) loadChart();
  }, [date, type]);

  return (
    <div className={styles.chartCard}>
      <div className={styles.cardHeader}>
        <span className={styles.subtitle}>검수 결과 통계</span>
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
            <Tooltip />
            <Legend layout="vertical" verticalAlign="middle" align="right" />
          </PieChart>
        ) : (
          <div className={styles.noData}>아직 데이터가 없습니다.</div> // 👈 메시지 표시
        )}
      </div>
    </div>
  );
};
export default SummaryPFChart;