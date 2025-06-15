import React from 'react';
import styles from './InspectionForm.module.css';

const defectItems = [
  { key: 'hasStain', label: '얼룩' },
  { key: 'isTorn', label: '찢김' },
  { key: 'hasFading', label: '변색' },
  { key: 'isStretched', label: '늘어남' },
  { key: 'otherDefect', label: '기타 하자' },
];

const DefectToggleGroup = ({ form, onChange }) => {
  return (
    <div className={styles['defect-grid']}>
      {defectItems.map((item) => (
        <div key={item.key} className={styles['defect-item']}>
          <span>{item.label}</span>
          <div className={styles['defect-toggle']}>
            {['Y', 'N'].map((val) => (
              <React.Fragment key={val}>
                <input
                  type="radio"
                  id={`${item.key}_${val}`}
                  name={item.key}
                  value={val}
                  checked={form[item.key] === val}
                  onChange={onChange}
                />
                <label htmlFor={`${item.key}_${val}`}>
                  {val === 'Y' ? '있음' : '없음'}
                </label>
              </React.Fragment>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default DefectToggleGroup;
