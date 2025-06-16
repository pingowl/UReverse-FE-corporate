import React, { useState } from 'react';
import ImageModal from '../../common/ImageModal/ImageModal';
import styles from './ProductInfoSection.module.css';

export default function ProductImages({ imageUrls }) {
  const [modalImg, setModalImg] = useState(null);

  const images = Array.isArray(imageUrls)
    ? imageUrls.filter((url) => url && url !== 'null')
    : [];

  return (
    <>
      <div className={styles['image-list']}>
        {[0, 1, 2].map((idx) => (
          <div
            key={idx}
            className={styles['image-thumb']}
            onClick={() => images[idx] && setModalImg(images[idx])}
            style={{
              cursor: images[idx] ? 'pointer' : 'default',
              opacity: images[idx] ? 1 : 0.25,
              background: images[idx] ? '#ffe066' : 'transparent',
            }}
          >
            {images[idx] && (
              <img
                src={images[idx]}
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
