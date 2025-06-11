import React from 'react';
import styles from './ProductDetail.module.css';
import ProductInfo from './ProductInfo';
import InspectionResult from './InspectionResult';
import Button from '../../common/Button/Button';

const ProductDetailBox = ({ productData }) => {
  const { product, result } = productData;
  const status = product.status;

  return (
    <div className={styles.productDetailBox}>
      <div className={styles.header}>
        <div className={styles.leftHeader}>
          <div className={styles.tag} />
          <h2 className={styles.titleTop}>상품 상세 조회</h2>
        </div>
      </div>

      {/* 상품 정보 */}
      <ProductInfo product={product}/>
      <hr />

      {/* 검수 결과 */}
      <div className={styles.ins}>
        <InspectionResult result={result} status={status} />
      </div>
      

      {/* 하단 버튼 */}
      <div className={styles.footer}>
        <Button
          text="← 뒤로가기"
          color="secondary"
          onClick={() => window.history.back()}
        />
      </div>
    </div>
  );
};

export default ProductDetailBox;

