import React, { useState } from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';
import styles from './Dashboard.module.css';

const chartData = [
  { name: '찢어짐', value: 10 },
  { name: '오염', value: 30 },
  { name: '바램', value: 40 },
  { name: '늘어남', value: 15 },
  { name: '기타', value: 5 },
];

const COLORS = [
  '#FF0000', // 빨강
  '#0000FF', // 파랑
  '#00AA00', // 초록
  '#FFA500', // 주황
  '#800080', // 보라
  '#FFFF00', // 노랑
  '#00CED1', // 청록
];


const SummaryDefectChart = () => {
  const [type, setType] = useState('AI');

  return (
    <div className={styles.chartCard}>
      <div className={styles.cardHeader}>
        <span className={styles.subtitle}>상품 결합 유형 통계</span>
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

export default SummaryDefectChart;