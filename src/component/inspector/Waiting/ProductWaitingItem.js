import React from 'react';
import { FaClock } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import styles from './ProductWaiting.module.css';

const ProductWaitingItem = ({ id, image, name, categoryMain, categorySub, price, date }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/inspector/waiting/${id}`);
  };

  return (
    <div className={styles.productItem} onClick={handleClick} style={{ cursor: 'pointer' }}>
      <div className={styles.imageBox}>
        <img src={image} alt={name} className={styles.image} />
      </div>
      <div className={styles.infoRow}>
        <span className={styles.name}>
          <span className={styles.brand}>{name}</span>
          <span className={styles.category}> - {categoryMain}/{categorySub}</span>
        </span>
        <span className={styles.price}>{price}P</span>
      </div>
      <div className={styles.dateRow}>
        <FaClock className={styles.clockIcon} />
        <span className={styles.date}>{date}</span>
      </div>
    </div>
  );
};

export default ProductWaitingItem;

