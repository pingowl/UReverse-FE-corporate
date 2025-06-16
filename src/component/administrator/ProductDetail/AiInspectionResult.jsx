import React from 'react';
import styles from '../../inspector/common/ProductInfoSection.module.css';
import { DEFECTS } from './data';

export default function AiInspectionResult({ result, status }) {
  const ai = result?.aiResult;
  const isAIPending = status === 'REGISTER';

  return (
    <div className={styles['inspection-section']}>
      {isAIPending ? (
        <span className={styles.inspectionComment}>🕐 AI 검수 중입니다.</span>
      ) : (
        <>
          <div className={styles['inspection-title']}>
            AI 검수 결과 :&nbsp;
            <span className={styles['inspection-pass']}>PASS</span>
          </div>

          <div className={styles['defect-row']}>
            {DEFECTS.map(({ key, label, emoji }) => (
              <div
                key={key}
                className={`${styles['defect-box']} ${
                  ai[key] ? styles['defect-bad'] : styles['defect-good']
                }`}
              >
                <span className={styles['defect-emoji']}>{emoji}</span>
                {label} {ai[key] ? '있음' : '없음'}
              </div>
            ))}
          </div>

          <ul className={styles['inspection-meta']}>
            {ai.note && (
              <li>
                <b>AI 코멘트</b>: {ai.note}
              </li>
            )}
            {ai.inspectorEmail && (
              <li>
                <b>검수 시스템</b>: {ai.inspectorEmail}
              </li>
            )}
          </ul>
        </>
      )}
    </div>
  );
}
