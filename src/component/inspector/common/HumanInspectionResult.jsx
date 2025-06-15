import React from 'react';
import styles from './ProductInfoSection.module.css';
import { DEFECTS } from './data';
import { FaClock } from 'react-icons/fa';

export default function HumanInspectionResult({ human }) {
  return (
    <div className={styles['inspection-section']}>
      <div className={styles['inspection-title']}>
        검수자 검수 결과 :&nbsp;
        <span
          className={
            human?.result === 'PASS'
              ? styles['inspection-pass']
              : styles['inspection-fail']
          }
        >
          {human?.result === 'PASS' ? 'PASS' : 'FAIL'}
        </span>
      </div>
      <div className={styles['defect-row']}>
        {DEFECTS.map(({ key, label, emoji }) => (
          <div
            key={key}
            className={`${styles['defect-box']} ${
              human?.[key] === 'Y'
                ? styles['defect-bad']
                : styles['defect-good']
            }`}
          >
            <span className={styles['defect-emoji']}>{emoji}</span>
            {label} {human?.[key] === 'Y' ? '있음' : '없음'}
          </div>
        ))}
      </div>
      <ul className={styles['inspection-meta']}>
        <li>
          <b>검수자 코멘트</b>: {human?.notes}
        </li>
        <li>
          <b>검수자</b>: {human?.inspectorEmail}
        </li>
        <li>
          <b>검수 일시</b>: {human?.createdAt}
        </li>
      </ul>
    </div>
  );
}
