import React from 'react';
import styles from './InspectionForm.module.css';

const ExpectedPointDisplay = ({
  discountedPoint,
  selectedRate,
  selectedColor,
}) => {
  const percentage = Math.round(selectedRate * 100);

  return (
    <div className={styles['form-row']}>
      <span>H.point</span>
      <input
        className={styles['form-input']}
        value={discountedPoint.toLocaleString()}
        readOnly
        style={{ fontWeight: 700, color: selectedColor, width: 100 }}
      />
      <span
        className={styles['point-rate']}
        style={{ color: selectedColor, marginLeft: 8, fontWeight: 600 }}
      >
        ({percentage}%)
      </span>
    </div>
  );
};

export default ExpectedPointDisplay;
