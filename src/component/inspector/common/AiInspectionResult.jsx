import React from 'react';
import styles from './ProductInfoSection.module.css';
import { DEFECTS } from './data';

export default function AiInspectionResult({ ai }) {
  return (
    <div className={styles['inspection-section']}>
      <div className={styles['inspection-title']}>
        AI 검수 결과 :&nbsp;
        <span
          className={
            ai?.result === 'PASS'
              ? styles['inspection-pass']
              : styles['inspection-fail']
          }
        >
          {ai?.result === 'PASS' ? 'PASS' : 'FAIL'}
        </span>
      </div>
      <div className={styles['defect-row']}>
        {DEFECTS.map(({ key, label, emoji }) => (
          <div
            key={key}
            className={`${styles['defect-box']} ${
              ai?.[key] === 'Y' ? styles['defect-bad'] : styles['defect-good']
            }`}
          >
            <span className={styles['defect-emoji']}>{emoji}</span>
            {label} {ai?.[key] === 'Y' ? '있음' : '없음'}
          </div>
        ))}
      </div>
      <ul className={styles['inspection-meta']}>
        <li>
          <b>AI 코멘트</b>: {ai?.notes}
        </li>
        <li>
          <b>검수 일시</b>: {ai?.createdAt}
        </li>
      </ul>
    </div>
  );
}
