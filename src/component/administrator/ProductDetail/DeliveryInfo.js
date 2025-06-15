import React from 'react';
import styles from './PickupDetail.module.css';

const DeliveryInfo = ({ delivery }) => {
  if (!delivery) return null;

  return (
    <div className={styles.deliveryInfoBox}>
      <h3 className={styles.deliveryTitle}>배송 정보</h3>
      <div className={styles.infoRow}>
        <span className={styles.label}><strong>판매자 : </strong></span>
        <span className={styles.value}>{delivery.senderName}</span>
      </div>
      <div className={styles.infoRow}>
        <span className={styles.label}><strong>연락처 :</strong> </span>
        <span className={styles.value}>{delivery.senderPhone}</span>
      </div>
      <div className={styles.infoRow}>
        <span className={styles.label}><strong>주소 : </strong></span>
        <span className={styles.value}>({delivery.postalCode}) {delivery.address}</span>
      </div>
    </div>
  );
};

export default DeliveryInfo;
