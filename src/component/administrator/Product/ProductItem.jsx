import React from 'react';
import { FaClock } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import styles from './Product.module.css';

const ProductItem = ({ id, image, brand, categoryMain, categorySub, grade, finishDate }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/admin/products/${id}`);
  };

  return (
    <div className={styles.productItem} onClick={handleClick} style={{ cursor: 'pointer' }}>
      <div className={styles.imageBox}>
        <img src={image} alt={brand} className={styles.image} />
      </div>
      <div className={styles.infoRow}>
        <span className={styles.name}>
          <span className={styles.brand}>{brand}</span>
          <span className={styles.category}> - {categoryMain}/{categorySub}</span>
        </span>
        <span className={`${styles.grade} ${styles[`grade_${grade}`]}`}>{grade}</span>
      </div>
      <div className={styles.dateRow}>
        <FaClock className={styles.clockIcon} />
        <span className={styles.date}>{finishDate}</span>
      </div>
    </div>
  );
};

export default ProductItem;

