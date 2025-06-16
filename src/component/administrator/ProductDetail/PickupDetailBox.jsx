import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './PickupDetail.module.css';
import ProductInfo from './ProductInfo';
import AiInspectionResult from './AiInspectionResult';
import InspectionCriteria from '../../inspector/common/InspectionCriteria';
import HumanInspectionResult from './HumanInspectionResult';
import DeliveryInfo from './DeliveryInfo';
import StatusNotice from './StatusNotice';
import Button from '../../common/Button/Button';
import { fetchPickupProductDetail } from '../../../api/administrator/fetchPickupProductDetail';
import { fetchRegisterPickup } from '../../../api/administrator/fetchRegisterPickup';

const PickupDetailBox = ({ productId }) => {
  const [detail, setDetail] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [registering, setRegistering] = useState(false);  // 수거 등록 중 상태
  const [registerError, setRegisterError] = useState(null); // 등록 오류
  const navigate = useNavigate();

  useEffect(() => {
    if (!productId) return;

    const getPickupDetail = async () => {
      setLoading(true);

      try {
        const res = await fetchPickupProductDetail(productId);
        if (res.success) {
          setDetail(res.response);
          setError(null);
        } else {
          setError(res.error || '상품 상세 정보를 불러오는 데 실패했습니다.');
        }
      } catch (err) {
        setError('API 호출 중 오류가 발생했습니다.');
      } finally {
        setLoading(false);
      }
    };

    getPickupDetail();
  }, [productId]);
  const handleRegisterPickup = async () => {
    setRegistering(true);
    setRegisterError(null);
    try {
      const res = await fetchRegisterPickup(productId);
      if (res.success) {
        alert('수거 등록이 완료되었습니다.');
        const refreshed = await fetchPickupProductDetail(productId);
        if (refreshed.success) setDetail(refreshed.response);
      } else {
        setRegisterError(res.error);
      }
    } catch (err) {
      setRegisterError('수거 등록 중 오류가 발생했습니다.');
    } finally {
      setRegistering(false);
    }
  };


  if (loading) {
    return <div className={styles.pickupDetailBox}>로딩 중...</div>;
  }

  if (error) {
    return (
      <div className={styles.pickupDetailBox}>
        <p style={{ color: 'red' }}>{error}</p>
        <Button text="← 뒤로가기" color="secondary" onClick={() => window.history.back()} />
      </div>
    );
  }

  if (!detail) return null;

  const { product = {}, aiResult = {}, inspectorResult = {}, delivery = {}, grade = null } = detail;
  const status = product.status || '';

  const result = {
    aiResult: aiResult,
    inspectorResult: inspectorResult,
    grade: grade,
  };
console.log(aiResult);
  const renderStatusNotice = () => {
    switch (status) {
      case 'FINISH':
        return <StatusNotice text="수거가 완료되었습니다." />;
      case 'DELIVERY_REQUEST':
      case 'DELIVERING':
        return <StatusNotice text="수거 요청이 정상적으로 등록되었습니다." />;
      case 'SECOND_INSPECT':
        return <StatusNotice text="수거 등록이 필요합니다." />;
      case 'FIRST_INSPECT':
        return <StatusNotice text="AI검수가 완료되었습니다. 2차 검수 중입니다." />;
      default:
        return null;
    }
  };

  return (
    <div className={styles.pickupDetailBox}>
      <div className={styles.header}>
        <div className={styles.leftHeader}>
          <div className={styles.tag} />
          <h2 className={styles.titleTop}>상품 상세 조회</h2>
        </div>
      </div>

      {renderStatusNotice()}
      <br /><br />

      <ProductInfo product={product} grade={grade}/>
      <AiInspectionResult result={result} status={status} />
      <InspectionCriteria />
      <HumanInspectionResult result={result} status={status}/>

      <DeliveryInfo delivery={delivery} />

      {status === 'SECOND_INSPECT' && (
        <div className={styles.delivery_button_container}>
          <button
            className={styles.delivery_button}
            onClick={handleRegisterPickup}
            disabled={registering}
          >
            {registering ? '등록 중...' : '수거 등록'}
          </button>
          {registerError && <p style={{ color: 'red', marginTop: '8px' }}>{registerError}</p>}
        </div>
      )}

      <div className={styles.buttonRow}>
        <Button text="뒤로" onClick={() => navigate(-1)} color="green" />
      </div>
    </div>
  );
};

export default PickupDetailBox;
