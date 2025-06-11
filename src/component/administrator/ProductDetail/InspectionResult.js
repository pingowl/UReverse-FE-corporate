import React from 'react';
import styles from './ProductDetail.module.css';

const InspectionResult = ({ result, status }) => {
  const ai = result.ai || {};
  const inspector = result.inspector || {};

  const renderResultItems = (labelMap, resultObj) => (
    <div className={styles.aiItems}>
      {Object.entries(labelMap).map(([key, label]) => (
        <div
          key={key}
          className={`${styles.aiItem} ${resultObj[key] ? styles.bad : styles.good}`}
        >
          <span className={styles.label}>{label}</span>
          <span className={styles.status}>
            {resultObj[key] ? '⚠️ 이상 있음' : '✅ 이상 없음'}
          </span>
        </div>
      ))}
    </div>
  );

  const conditionLabels = {
    stain: '오염',
    tear: '찢어짐',
    stretching: '늘어남',
    fading: '색바램',
  };

  console.log(status+"abc");
  const isAIInspectorPending = status === 'REGISTER';
  const isInspectorPending = status === 'FIRST_INSPECT' || status === 'REGISTER';

  return (
    <div className={styles.inspectionBox}>
      <h3 className={styles.inspectionTitle}>검수 결과</h3>

      {/* AI 검수 결과 */}
      <section className={styles.aiSection}>
        <h4>AI 자동 검수 결과</h4>
        {isAIInspectorPending ? (
          <p className={styles.inspectionComment}>🕐 AI가 검수 중입니다.</p>
        ) : (
          <>
        {renderResultItems(conditionLabels, ai)}
        {ai.comment && (
          <p className={styles.inspectionComment}>
            <strong>AI 코멘트 : </strong> <span>{ai.comment}</span>
          </p>
        )}
        </>)}
      </section>

      <hr className={styles.divider} />

      {/* 수동 검수자 결과 */}
      <section className={styles.aiSection}>
        <h4>관리자 검수 결과</h4>

        {isInspectorPending ? (
          <p className={styles.inspectionComment}>🕐 검수자가 검수 중입니다.</p>
        ) : (
          <>
            {renderResultItems(conditionLabels, inspector)}
            {inspector.inspectorId && (
              <p className={styles.inspectionComment}>
                <strong>검수자 : </strong> <span>{inspector.inspectorId}</span>
              </p>
            )}
            {inspector.comment && (
              <p className={styles.inspectionComment}>
                <strong>검수자 코멘트 : </strong> <span>{inspector.comment}</span>
              </p>
            )}
          </>
        )}
      </section>

      <hr className={styles.divider} />

      {/* 최종 등급 */}
       <div className={styles.gradeSection}>
         {isInspectorPending ? (
          <p className={styles.inspectionComment}>🕐 아직 최종 등급이 나오지 않았습니다.</p>
        ) : (
          <>
        <p>
          <strong>최종 등급:</strong>{' '}
          <span className={`${styles.grade} ${styles[`grade_${result.grade}`]}`}>
            {result.grade}
          </span>
        </p>
        </>)}
      </div>
    </div>
  );
};


export default InspectionResult;
