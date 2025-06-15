import React from 'react';
import styles from './ImageModal.module.css';

const ImageModal = ({ src, onClose }) => {
  if (!src) return null;

  return (
    <div className={styles['modal-backdrop']} onClick={onClose}>
      <div
        className={styles['modal-img-box']}
        onClick={(e) => e.stopPropagation()}
      >
        <img src={src} alt="확대이미지" />
        <button className={styles['modal-close']} onClick={onClose}>
          ×
        </button>
      </div>
    </div>
  );
};

export default ImageModal;
