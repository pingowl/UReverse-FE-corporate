import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ProductInfoSection from '../common/ProductInfoSection';
import SectionHeader from '../../common/Header/SectionHeader';
import styles from './FinishedProductDetailBox.module.css';
import { fetchInspectedProductDetail } from '../../../api/products';
import Button from '../../common/Button/Button';

function FinishedProductDetailBox() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [modalImg, setModalImg] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchDetail = async () => {
      try {
        const res = await fetchInspectedProductDetail(id);
        if (res.success) setProduct(res.response);
      } finally {
        setLoading(false);
      }
    };
    fetchDetail();
  }, [id]);

  if (loading) return <div>로딩중...</div>;
  if (!product) return <div>상품 정보를 불러올 수 없습니다.</div>;

  return (
    <div className={styles['detail-container']}>
      <SectionHeader title="검수 완료 상품 상세"></SectionHeader>

      <ProductInfoSection product={product} setModalImg={setModalImg} />

      <div className={styles.buttonRow}>
        <Button text="뒤로" onClick={() => navigate(-1)} color="yellow" />
      </div>
    </div>
  );
}

export default FinishedProductDetailBox;
