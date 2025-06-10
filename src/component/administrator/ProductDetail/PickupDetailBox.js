import React from 'react';
import styles from './PickupDetail.module.css';
import ProductInfo from './ProductInfo';
import InspectionResult from './InspectionResult';
import DeliveryInfo from './DeliveryInfo';
import StatusNotice from './StatusNotice';
import Button from '../../common/Button/Button';

const PickupDetailBox = ({ productData }) => {
  const { product, result, delivery } = productData;
  const status = product.status;

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
      {/* 상태 안내 메시지 */}
      {renderStatusNotice()}<br/><br/>
      

      {/* 공통: 상품 정보 */}
      <ProductInfo product={product} />
      <hr />

      {/* 검수 결과*/}
      <InspectionResult result={result} status={status} />
      <hr />


      <DeliveryInfo delivery={delivery} />
      <hr />

      {/* 수거 요청 버튼 */}
      {(status === 'SECOND_INSPECT') && (
        <div className={styles.delivery_button_container}>
          <button className={styles.delivery_button}>수거 등록</button>
        </div>
      )}


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

export default PickupDetailBox;

