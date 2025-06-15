import React from 'react';
import styles from './Dashboard.module.css';


const SummaryCard = () => {
  return (
    <div className={styles.card}>
      <div className={styles.cardItem}>
        <span className={styles.label}>현재 수거 요청 대기건수</span>
        <span className={styles.value}>42건</span>
      </div>
      <div className={styles.cardItem}>
        <span className={styles.label}>오늘 지급 포인트 총합</span>
        <span className={styles.value}>18,200P</span>
      </div>
      <div className={styles.cardItem}>
        <span className={styles.label}>이번주 인기 판매 브랜드 TOP 3</span>
        <ol className={styles.rank}>
          <li>나이키</li>
          <li>아디다스</li>
          <li>유니클로</li>
        </ol>
      </div>
    </div>
  );
};


export default SummaryCard;