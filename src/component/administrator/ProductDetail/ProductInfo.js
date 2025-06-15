import React, { useState } from 'react';
import styles from './ProductDetail.module.css';

const ProductInfo = ({ product }) => {
  // product.images 배열 사용, 없으면 빈 배열 처리
  const images = Array.isArray(product.images) ? product.images.filter(url => url && url !== 'null') : [];
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
        {images.length > 0 ? (
          <>
            <button onClick={prevImage} className={styles.navButton}>〈</button>
            <img
              src={images[currentIdx]}
              alt={`상품 이미지 ${currentIdx + 1}`}
              className={styles.carouselImage}
            />
            <button onClick={nextImage} className={styles.navButton}>〉</button>
          </>
        ) : (
          <div className={styles.noImage}>이미지가 없습니다</div>
        )}
      </div>

      {/* 제품 메타 정보 */}
      <div className={styles.metabox}>
        <div className={styles.meta}>
          <h2 className={styles.productName}>{product.brand}</h2>
          <p className={styles.category}>{product.categoryMain} / {product.categorySub}</p>

          {/* paidPoint(실제 지급한 포인트) 옆에 expectPoint(예상 포인트) 작게 표시 */}
          <div className={styles.pointBox}>
            <span className={styles.point}>
              {product.paidPoint != null ? `${product.paidPoint.toLocaleString()} P` : ' - '}
            </span>
            {product.expectPoint != null && (
              <span className={styles.expectPoint}>
                (예상 {product.expectPoint.toLocaleString()} P)
              </span>
            )}
          </div>

          {/* 기타 정보 */}
          <div className={styles.extraInfo}>
            <p>판매자: <span>{product.userEmail}</span></p>
            <p>수정일: <span>{product.updatedAt}</span></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
