import React, { useState } from 'react';
import ImageModal from '../../common/ImageModal/ImageModal';
import styles from './ProductInfoSection.module.css';

export default function ProductImages({ imageUrls }) {
  const [modalImg, setModalImg] = useState(null);

  return (
    <>
      <div className={styles['image-list']}>
        {[0, 1, 2].map((idx) => (
          <div
            key={idx}
            className={styles['image-thumb']}
            onClick={() => imageUrls[idx] && setModalImg(imageUrls[idx])}
            style={{
              cursor: imageUrls[idx] ? 'pointer' : 'default',
              opacity: imageUrls[idx] ? 1 : 0.25,
              background: imageUrls[idx] ? '#ffe066' : 'transparent',
            }}
          >
            {imageUrls[idx] && (
              <img
                src={imageUrls[idx]}
                alt={`상품이미지${idx + 1}`}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            )}
          </div>
        ))}
      </div>
      {modalImg && (
        <ImageModal src={modalImg} onClose={() => setModalImg(null)} />
      )}
    </>
  );
}
