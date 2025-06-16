import React from 'react';
import styles from './GradeBadge.module.css';

const GradeBadge = ({ grade }) => {
  const validGrades = ['S', 'A', 'B', 'C', 'F'];
  const upperGrade = (grade || '').toUpperCase();
  const className = validGrades.includes(upperGrade)
    ? `${styles.grade} ${styles[`grade_${upperGrade}`]}`
    : styles.grade;

  return <span className={className}>{upperGrade}</span>;
};

export default GradeBadge;
