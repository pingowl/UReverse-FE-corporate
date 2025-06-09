import React, { useState } from 'react';
import styles from './Dashboard.module.css';

const ChartBox = () => {
  const [period, setPeriod] = useState('7days');

  return (
    <div className={styles.chartBox}>
      <div className={styles.header}>
        <div className={styles.leftHeader}>
          <div className={styles.tag} />
          <h2 className={styles.titleTop}>포인트별 분포</h2>
        </div>
        <select
          className={styles.dropdown}
          value={period}
          onChange={(e) => setPeriod(e.target.value)}
        >
          <option value="7days">최근 7일</option>
          <option value="1month">최근 1개월</option>
          <option value="6months">최근 6개월</option>
          <option value="1year">최근 1년</option>
        </select>
      </div>

      <div className={styles.chartPlaceholder}>
        {/* 차트가 들어갈 영역 */}
        차트 영역 (추후 추가 예정)
      </div>
    </div>
  );
};

export default ChartBox;
