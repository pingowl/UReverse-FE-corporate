import React from 'react';
import { useLocation } from 'react-router-dom';
import styles from './ProductInfoSection.module.css';
import { CRITERIA } from './data';

export default function InspectionCriteria() {
  const location = useLocation();
  const isAdminPath = location.pathname.startsWith('/admin');

  return (
    <div className={styles['criteria-section']}>
      <div className={styles['criteria-title']}>검수 기준</div>
      <table
        className={`${styles['criteria-table']} ${
          isAdminPath ? styles['admin-theme'] : ''
        }`}
      >
        <thead>
          <tr>
            <th>등급</th>
            <th>상태 설명</th>
            <th>외관/손상 기준</th>
            <th>예상 포인트 비율</th>
          </tr>
        </thead>
        <tbody>
          {CRITERIA.map((row) => (
            <tr key={row.grade}>
              <td style={{ color: row.color, fontWeight: 700 }}>{row.grade}</td>
              <td>{row.desc}</td>
              <td>{row.detail}</td>
              <td style={{ color: row.color, fontWeight: 700 }}>{row.rate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
