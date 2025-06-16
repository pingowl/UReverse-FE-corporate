import React from 'react';
import styles from '../../inspector/common/ProductInfoSection.module.css';
import { DEFECTS } from './data';

export default function HumanInspectionResult({ result, status }) {
  const human = result?.inspectorResult;
  const isInspectorPending = status === 'FIRST_INSPECT' || status === 'REGISTER';

  return (
    <div className={styles['inspection-section']}>
      {isInspectorPending ? (
        <span className={styles.inspectionComment}>🕐 검수자가 검수 중입니다.</span>
      ) : (
        <div className={styles['inspection-title']}>
          검수자 검수 결과 :&nbsp;
          <span className={styles['inspection-pass']}>PASS</span>
        </div>
      )}

      {!isInspectorPending && (
        <>
          <div className={styles['defect-row']}>
            {DEFECTS.map(({ key, label, emoji }) => (
              <div
                key={key}
                className={`${styles['defect-box']} ${
                  human[key] ? styles['defect-bad'] : styles['defect-good']
                }`}
              >
                <span className={styles['defect-emoji']}>{emoji}</span>
                {label} {human[key] ? '있음' : '없음'}
              </div>
            ))}
          </div>

          <ul className={styles['inspection-meta']}>
            {human.note && (
              <li>
                <b>검수자 코멘트</b>: {human.note}
              </li>
            )}
            {human.inspectorEmail && (
              <li>
                <b>검수자</b>: {human.inspectorEmail}
              </li>
            )}
          </ul>
        </>
      )}
    </div>
  );
}
