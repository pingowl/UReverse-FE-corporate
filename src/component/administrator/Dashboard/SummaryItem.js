import React from 'react';
import styles from './Dashboard.module.css';

const SummaryItem = ({ title, count, change }) => (
  <div className={styles.summaryItem}>
    <div className={styles.title}>{title}</div>
    <div className={styles.count}>{count}건</div>
    <div className={`${styles.change} ${change.up ? styles.up : styles.down}`}>
      {change.up ? '↑' : '↓'} {change.value}%
    </div>
  </div>
);

export default SummaryItem;