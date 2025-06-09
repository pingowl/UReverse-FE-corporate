import React from 'react';
import styles from './Pagination.module.css';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <div className={styles.pagination}>
      <button
        onClick={() => onPageChange(Math.max(currentPage - 1, 1))}
        disabled={currentPage === 1}
      >
        〈
      </button>
      <span className={styles.pageNumber}>{currentPage}</span>
      <button
        onClick={() => onPageChange(Math.min(currentPage + 1, totalPages))}
        disabled={currentPage === totalPages}
      >
        〉
      </button>
    </div>
  );
};

export default Pagination;
