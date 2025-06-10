import React from 'react';
import styles from './PickupDetail.module.css';

const DeliveryInfo = ({ delivery }) => {
  if (!delivery) return null;

  const { sender_name, phone, postal_code, address} = delivery;

  return (
    <div className={styles.deliveryInfoBox}>
      <h3 className={styles.deliveryTitle}>배송 정보</h3>
      <div className={styles.infoRow}>
        <span className={styles.label}><strong>판매자 : </strong></span>
        <span className={styles.value}>{sender_name}</span>
      </div>
      <div className={styles.infoRow}>
        <span className={styles.label}><strong>연락처 :</strong> </span>
        <span className={styles.value}>{phone}</span>
      </div>
      <div className={styles.infoRow}>
        <span className={styles.label}><strong>주소 : </strong></span>
        <span className={styles.value}>({postal_code}) {address}</span>
      </div>
    </div>
  );
};

export default DeliveryInfo;
