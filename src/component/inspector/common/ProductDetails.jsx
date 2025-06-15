import React from 'react';
import styles from './ProductInfoSection.module.css';

export default function ProductDetails({ product }) {
  return (
    <div className={styles['product-info-card']}>
      <div className={styles['info-row']}>
        <span className={styles['info-label']}>브랜드 :</span>
        <span className={styles['info-value']}>{product.brandName}</span>
      </div>
      <div className={styles['info-row']}>
        <span className={styles['info-label']}>카테고리 :</span>
        <span className={styles['info-value']}>
          {product.categoryMain} - {product.categorySub}
        </span>
      </div>
      <div className={styles['info-row']}>
        <span className={styles['info-label']}>예상포인트 :</span>
        <span className={styles['info-value']}>
          {product.expectedPoint?.toLocaleString()}원
        </span>
      </div>
      <div className={styles['info-row']}>
        <span className={styles['info-label']}>판매자 ID :</span>
        <span className={styles['info-value']}>{product.userId}</span>
      </div>
    </div>
  );
}
