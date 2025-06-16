import React from 'react';
import styles from './ProductDetail.module.css';
import ProductImages from '../../inspector/common/ProductImages';
import GradeBadge from '../../common/Product/GradeBadge';

const ProductInfo = ({ product, grade }) => {
  const images = Array.isArray(product.images) ? product.images.filter(url => url && url !== 'null') : [];

  return (
    <div className={styles.productInfoSection}>
      <ProductImages imageUrls={product.images} />

      {/* 제품 메타 정보 */}
      <div className={styles.metabox}>
        <div className={styles.inforow}>
          <span className={styles.infolabel}>브랜드 :</span>
          <span className={styles.infovalue}>{product.brand}</span>
        </div>
        <div className={styles.inforow}>
          <span className={styles.infolabel}>카테고리 :</span>
          <span className={styles.infovalue}>
            {product.categoryMain} - {product.categorySub}
          </span>
        </div>
        <div className={styles.inforow}>
          <span className={styles.infolabel}>포인트 :</span>
          <span className={styles.infovalue}>
            <span className={styles.point}>
              {product.paidPoint != null ? `${product.paidPoint.toLocaleString()} P` : ' - '}
            </span>
            {product.expectPoint != null && (
              <span className={styles.expectPoint}>
                (예상 {product.expectPoint.toLocaleString()} P)
              </span>
            )}
          </span>
        </div>
        <div className={styles.inforow}>
          <span className={styles.infolabel}>판매자 :</span>
          <span className={styles.infovalue}>{product.userEmail}</span>
        </div>
        <div className={styles.inforow}>
          <span className={styles.infolabel}>수정일 :</span>
          <span className={styles.infovalue}>{product.updatedAt}</span>
        </div>
          {grade ? (
          <GradeBadge grade={grade} />
        ) : (
          <span>-</span>
        )}
      </div>
    </div>
  );
};

export default ProductInfo;
