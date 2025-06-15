import React, { useState } from 'react';
import styles from './Dashboard.module.css';
import SummaryCard from './SummaryCard';
import SummaryPFChart from './SummaryPFChart';
import SummaryDefectChart from './SummaryDefectChart';

const SummaryBox = () => {
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10));

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

      <div className={styles.grid}>
        <SummaryCard/>
        <SummaryPFChart/>
        <SummaryDefectChart/>
      </div>
    </div>
  );
};

export default SummaryBox;
