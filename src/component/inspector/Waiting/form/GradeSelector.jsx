import React from 'react';
import styles from './InspectionForm.module.css';

const grades = ['S', 'A', 'B', 'C', 'F'];

const GradeSelector = ({ form, onChange }) => {
  return (
    <div className={styles['grade-row']}>
      {grades.map((grade) => (
        <label
          key={grade}
          className={`${styles['grade-label']} ${
            form.grade === grade ? styles['grade-selected'] : ''
          }`}
        >
          <input
            type="radio"
            name="grade"
            value={grade}
            checked={form.grade === grade}
            onChange={onChange}
            className={styles['grade-radio']}
          />
          {grade}
        </label>
      ))}
    </div>
  );
};

export default GradeSelector;
