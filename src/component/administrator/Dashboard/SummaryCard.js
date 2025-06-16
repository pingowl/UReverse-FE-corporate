import React, { useEffect, useState } from 'react';
import styles from './Dashboard.module.css';
import { fetchDashboardSummary } from '../../../api/administrator/fetchDashboardSummary';


const SummaryCard = ({date}) => {
  const [summary, setSummary] = useState({
    pickupRequest: 0,
    totalPaidPoint: 0,
    topBrands: [],
  });

  useEffect(() => {
    const loadSummary = async () => {
      const result = await fetchDashboardSummary(date);
      if (result.success) {
        setSummary({
          pickupRequest: result.pickupRequest,
          totalPaidPoint: result.totalPaidPoint,
          topBrands: result.topBrands,
        });
      } else {
        console.error('대시보드 요약 데이터를 불러오는 중 오류:', result.error);
      }
    };

    if (date) loadSummary();
  }, [date]);

  return (
    <div className={styles.card}>
      <div className={styles.cardItem}>
        <span className={styles.label}>현재 수거 요청 대기건수</span>
        <span className={styles.value}>{summary.pickupRequest}건</span>
      </div>
      <div className={styles.cardItem}>
        <span className={styles.label}>오늘 지급 포인트 총합</span>
        <span className={styles.value}>{summary.totalPaidPoint.toLocaleString()}P</span>
      </div>
      <div className={styles.cardItem}>
        <span className={styles.label}>이번주 인기 판매 브랜드 TOP 3</span>
        <ol className={styles.rank}>
          {summary.topBrands.length > 0 ? (
            summary.topBrands.map((brand, idx) => <li key={idx}>{brand.name}</li>)
          ) : (
            <p>--데이터 없음--</p>
          )}
        </ol>
      </div>
    </div>
  );
};

export default SummaryCard;