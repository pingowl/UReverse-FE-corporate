import React, { useState } from 'react';
import styles from './ProductDetail.module.css';

const InspectionResult = ({ result }) => {
  return (
    <div className={styles.inspectionBox}>
      <h3 className={styles.inspectionTitle}>검수 결과</h3>
      <div className={styles.inspectionContent}>
        <p><strong>검수자:</strong> <span>{result.inspectorId}</span></p>
        <p><strong>등급:</strong> <span className={`${styles.grade} ${styles[`grade_${result.grade}`]}`}>{result.grade}</span></p>
        <p><strong>코멘트:</strong> <span>{result.comment}</span></p>
      </div>
    </div>
  );
};

export default InspectionResult;
