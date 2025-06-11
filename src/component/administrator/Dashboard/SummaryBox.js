import React, { useState } from 'react';
import SummaryItem from './SummaryItem';
import styles from './Dashboard.module.css';

const SummaryBox = () => {
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10));

  const summaryData = [
    { title: '검수대기', count: 129, change: { value: 16.3, up: true } },
    { title: '출고대기', count: 87, change: { value: 5.2, up: false } },
    { title: '반품대기', count: 45, change: { value: 3.1, up: true } },
  ];

  return (
    <div className={styles.summaryBox}>
      <div className={styles.header}>
        <div className={styles.leftHeader}>
          <div className={styles.tag} />
          <h2 className={styles.titleTop}>대시보드</h2>
        </div>
        <input
          type="date"
          className={styles.datepicker}
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>

      <div className={styles.items}>
        {summaryData.map((item, idx) => (
          <SummaryItem key={idx} {...item} />
        ))}
      {/* 수거 요청 들어온 대시보드 추가하기 */}
      </div>
    </div>
  );
};

export default SummaryBox;
