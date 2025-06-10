import React from 'react';
import styles from './ProductDetail.module.css';

const InspectionResult = ({ result }) => {
  const aiResult = result.ai || {};

  return (
    <div className={styles.inspectionBox}>
      <h3 className={styles.inspectionTitle}>검수 결과</h3>

      <div className={styles.inspectionContent}>
        <p><strong>검수자:</strong> <span>{result.inspector?.inspectorId}</span></p>
        <p><strong>코멘트:</strong> <span>{result.inspector?.comment}</span></p>
      </div>

      <hr className={styles.divider} />

      <div className={styles.aiSection}>
        <h4>AI 자동 검수 결과</h4>
        <div className={styles.aiItems}>
          {Object.entries(aiResult).map(([key, value]) => (
            <div key={key} className={`${styles.aiItem} ${value ? styles.bad : styles.good}`}>
              <span className={styles.label}>{key}</span>
              <span className={styles.status}>
                {value ? '⚠️ 이상 있음' : '✅ 이상 없음'}
              </span>
            </div>
          ))}
        </div>
      </div>

      <hr className={styles.divider} />

      <div className={styles.gradeSection}>
        <p><strong>최종 등급:</strong> <span className={`${styles.grade} ${styles[`grade_${result.grade}`]}`}>{result.grade}</span></p>
      </div>
    </div>
  );
};

export default InspectionResult;
