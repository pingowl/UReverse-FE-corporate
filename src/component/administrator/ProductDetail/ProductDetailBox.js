import React, { useEffect, useState } from 'react';
import styles from './ProductDetail.module.css';
import ProductInfo from './ProductInfo';
import InspectionResult from './InspectionResult';
import Button from '../../common/Button/Button';
import { fetchFinishedProductDetail } from '../../../api/administrator/fetchFinishedProductDetail';

const ProductDetailBox = ({ productId }) => {
  const [productData, setProductData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

   useEffect(() => {
  if (!productId) return;

  const loadProductDetail = async () => {
    setLoading(true);
    try {
      const res = await fetchFinishedProductDetail(productId);

      if (res.success) {
        setProductData(res.response);
        setError(null);
      } else {
        setError(res.error || '상품 상세 정보를 불러오는 데 실패했습니다.');
      }
    } catch (err) {
      console.error('API 호출 에러:', err);
      setError('API 호출 중 오류가 발생했습니다.');
    } finally {
      setLoading(false);
    }
  };

  loadProductDetail();
}, [productId]);


  if (loading) return <div className={styles.productDetailBox}>로딩 중...</div>;
  if (error) return (
    <div className={styles.productDetailBox}>
      <p style={{ color: 'red' }}>{error}</p>
      <Button text="← 뒤로가기" color="secondary" onClick={() => window.history.back()} />
    </div>
  );

  if (!productData) return null;

  const product = productData.product || productData;
  const result = {
  aiResult: productData.aiResult || {},
  inspectorResult: productData.inspectorResult || {},
  grade: productData.grade || '',
};
  const status = product.status || '';

  return (
    <div className={styles.productDetailBox}>
      <div className={styles.header}>
        <div className={styles.leftHeader}>
          <div className={styles.tag} />
          <h2 className={styles.titleTop}>상품 상세 조회</h2>
        </div>
      </div>

      <ProductInfo product={product} />
      <hr />
      <div className={styles.ins}>
        <InspectionResult result={result} status={status} />
      </div>

      <div className={styles.footer}>
        <Button text="← 뒤로가기" color="secondary" onClick={() => window.history.back()} />
      </div>
    </div>
  );
};

export default ProductDetailBox;