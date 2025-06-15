import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';
import styles from './Dashboard.module.css';

const dataMap = {
  '7days': [
    { baseDate: "2025-06-10", finishCount: 1 },
    { baseDate: "2025-06-11", finishCount: 0 },
    { baseDate: "2025-06-12", finishCount: 0 },
    { baseDate: "2025-06-13", finishCount: 2 },
    { baseDate: "2025-06-14", finishCount: 3 },
  ],
  '6months': [
    { baseDate: "2025-05", finishCount: 1 },
    { baseDate: "2025-06", finishCount: 3 },
  ],
};

const ChartBox = () => {
  const [period, setPeriod] = useState('7days');

  const chartData = dataMap[period] || [];

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
        {chartData.length === 0 ? (
          <div>데이터가 없습니다.</div>
        ) : (
          <ResponsiveContainer width="100%" height={350}>
            <BarChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="baseDate" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="finishCount" fill="#77bfa3" />
            </BarChart>
          </ResponsiveContainer>
        )}
      </div>
    </div>
  );
};

export default ChartBox;
