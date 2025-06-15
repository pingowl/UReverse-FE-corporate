import React, { useState } from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';
import styles from './Dashboard.module.css';

const chartData = [
  { name: '합격', value: 83.33 },
  { name: '불합격', value: 16.67 },
];

const COLORS = [
  '#FF0000', // 빨강
  '#0000FF', // 파랑
];

const SummaryPFChart = () => {
  const [type, setType] = useState('검수자');
  return(
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
        <PieChart width={500} height={310}>
          <Pie
            data={chartData}
            dataKey="value"     // 각 항목의 값으로 크기 계산
            nameKey="name"      // 항목 이름 표시용
            cx="50%"            // 차트 가로 가운데
            cy="50%"            // 차트 세로 가운데
            outerRadius={140}   // 반지름 120px
            label               // 라벨 표시
          >
            {chartData.map((_, i) => (
              <Cell key={i} fill={COLORS[i % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip/>
          <Legend
            layout="vertical"      // 세로 정렬
            verticalAlign="middle"    // 수직 기준 위쪽
            align="right"          // 수평 기준 오른쪽
          />
      </PieChart>
      </div>
      
    </div>
  );
};

export default SummaryPFChart;