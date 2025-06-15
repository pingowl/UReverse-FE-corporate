import React from 'react';
import { IoCheckmarkDoneSharp } from 'react-icons/io5';
import styles from '../inspector/Waiting/ProductWaitingDetailBox.module.css';

const LastSavedIndicator = ({ lastSaved, fallbackDate }) => {
  const formattedDate = new Date(lastSaved || fallbackDate).toLocaleString();

  return (
    <span className={styles['detail-save-time']}>
      <span role="img" aria-label="저장됨">
        <IoCheckmarkDoneSharp />
      </span>
      마지막 저장&nbsp;
      <b>{formattedDate}</b>
    </span>
  );
};

export default LastSavedIndicator;
