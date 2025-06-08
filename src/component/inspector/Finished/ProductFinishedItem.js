import React from 'react';
import { FaClock } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import styles from './ProductFinished.module.css';

const ProductFinishedItem = ({ id, image, name, price, date }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/inspector/finished/${id}`);
  };

  return (
    <div className={styles.productItem} onClick={handleClick} style={{ cursor: 'pointer' }}>
      <div className={styles.imageBox}>
        <img src={image} alt={name} className={styles.image} />
      </div>
      <div className={styles.infoRow}>
        <span className={styles.name}>{name}</span>
        <span className={styles.price}>{price}원</span>
      </div>
      <div className={styles.dateRow}>
        <FaClock className={styles.clockIcon} />
        <span className={styles.date}>{date}</span>
      </div>
    </div>
  );
};

export default ProductFinishedItem;

