import React, { useState } from 'react';
import styles from './ProductDetail.module.css';

const ProductInfo = ({ product }) => {
  const images = [product.image1, product.image2].filter(Boolean);
  const [currentIdx, setCurrentIdx] = useState(0);

  const nextImage = () => {
    setCurrentIdx((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIdx((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className={styles.productInfoSection}>
      
      {/* 이미지 캐러셀 */}
      <div className={styles.carousel}>
        <button onClick={prevImage} className={styles.navButton}>〈</button>
        <img
          src={images[currentIdx]}
          alt={`상품 이미지 ${currentIdx + 1}`}
          className={styles.carouselImage}
        />
        <button onClick={nextImage} className={styles.navButton}>〉</button>
      </div>

      {/* 제품 메타 정보 */}
      <div className={styles.metabox}>
        <div className={styles.meta}>
          <h2 className={styles.productName}>{product.brand}</h2>
          <p className={styles.category}>{product.category}</p>

          {/* paid_point(실제 지급한 포인트) 옆에 expect_point(예상 포인트) 작게 표시 */}
          <div className={styles.pointBox}>
            <span className={styles.point}>
              {product.paid_point.toLocaleString()} P
            </span>
            {product.expect_point && (
              <span className={styles.expectPoint}>
                (예상 {product.expect_point.toLocaleString()}P)
              </span>
            )}
          </div>

          {/* 기타 정보 */}
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
