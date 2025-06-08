import React, { useState } from 'react';
import styles from './ProductDetail.module.css';

const ProductInfo = ({ product }) => {
  const images = [product.image1, product.image2, product.image3].filter(Boolean);
  const [currentIdx, setCurrentIdx] = useState(0);

  const nextImage = () => {
    setCurrentIdx((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIdx((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className={styles.productInfoSection}>
      <div className={styles.carousel}>
        <button onClick={prevImage} className={styles.navButton}>〈</button>
        <img src={images[currentIdx]} alt={`상품 이미지 ${currentIdx + 1}`} className={styles.carouselImage} />
        <button onClick={nextImage} className={styles.navButton}>〉</button>
      </div>

        <div className={styles.metabox}>
            <div className={styles.meta}>
                <h2 className={styles.productName}>{product.brand}</h2>
                <p className={styles.category}>{product.category}</p>
                <p className={styles.point}>{product.point.toLocaleString()} P</p>
                <div className={styles.extraInfo}>
                <p>등록자: <span>{product.userId}</span></p>
                <p>등록일: <span>{product.date}</span></p>
                </div>
            </div>
        </div>
    </div>
  );
};

export default ProductInfo;
