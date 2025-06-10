import React from 'react';
import styles from './Pickup.module.css';

const steps = [
  { key: 'REGISTER', label: '상품 등록' },
  { key: 'FIRST_INSPECTED', label: '1차 검수' },
  { key: 'SECOND_INSPECTED', label: '2차 검수' },
  { key: 'DELIVERY_REQUESTED', label: '배송 요청' },
  { key: 'DELIVERING', label: '배송 중' },
  { key: 'FINISHED', label: '배송 완료' },
];

const PickupProgress = ({ currentState }) => {
  const currentStepIndex = steps.findIndex(step => step.key === currentState);

  return (
    <div className={styles.progressContainer}>
      <div className={styles.steps}>
        {steps.map((step, index) => (
          <div
            key={step.key}
            className={`${styles.step} ${index <= currentStepIndex ? styles.active : ''}`}
          >
            <div className={styles.circle}>{index + 1}</div>
            <div className={styles.label}>{step.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PickupProgress;
