// ProductInfoSection.jsx
import React, { useState } from 'react';
import styles from './ProductInfoSection.module.css';

// 하자 항목 정의
const DEFECTS = [
  { key: 'hasStain', label: '얼룩', emoji: '🧼' },
  { key: 'isTorn', label: '찢김', emoji: '🩹' },
  { key: 'hasFading', label: '변색', emoji: '🎨' },
  { key: 'isStretched', label: '늘어남', emoji: '🧵' },
  { key: 'otherDefect', label: '기타 하자', emoji: '🔎' },
];

// 검수 기준 표 데이터
const CRITERIA = [
  {
    grade: 'S',
    desc: '미사용/새상품급',
    detail: '택 있음 또는 세탁/착용 흔적 없음. 오염, 손상 전혀 없음',
    rate: '100%',
    color: '#27ae60',
  },
  {
    grade: 'A',
    desc: '매우 양호',
    detail: '1~2회 착용, 아주 미세한 사용감. 오염/이염/변형 없음',
    rate: '70%',
    color: '#f39c12',
  },
  {
    grade: 'B',
    desc: '보통/사용감 있음',
    detail: '착용감 있음.작은 보풀, 미세한 변형, 옅은 얼룩 가능',
    rate: '50%',
    color: '#2980b9',
  },
  {
    grade: 'C',
    desc: '하자 있음',
    detail: '뚜렷한 사용감. 얼룩, 이염, 실밥, 늘어남 등 존재',
    rate: '30%',
    color: '#d35400',
  },
  {
    grade: 'F (Reject)',
    desc: '판매 불가',
    detail: '찢김, 큰 얼룩, 심한 변색, 수선 필요 등 상품성 없음',
    rate: '0% (반려)',
    color: '#c0392b',
  },
];

export default function ProductInfoSection({ product }) {
  const ai = product.aiInspection;
  const [modalImg, setModalImg] = useState(null);

  return (
    <section>
      {/* 이미지 영역 */}
      <div className={styles['image-list']}>
        {[0, 1, 2].map((idx) => (
          <div
            className={styles['image-thumb']}
            key={idx}
            onClick={() =>
              product.imageUrls[idx] && setModalImg(product.imageUrls[idx])
            }
            style={{
              cursor: product.imageUrls[idx] ? 'pointer' : 'default',
              opacity: product.imageUrls[idx] ? 1 : 0.25,
              background: product.imageUrls[idx] ? '#ffe066' : 'transparent',
            }}
          >
            {product.imageUrls[idx] ? (
              <img
                src={product.imageUrls[idx]}
                alt={`상품이미지${idx + 1}`}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            ) : null}
          </div>
        ))}
      </div>
      {/* 이미지 팝업 */}
      {modalImg && (
        <div
          className={styles['modal-backdrop']}
          onClick={() => setModalImg(null)}
        >
          <div
            className={styles['modal-img-box']}
            onClick={(e) => e.stopPropagation()}
          >
            <img src={modalImg} alt="확대이미지" />
            <button
              className={styles['modal-close']}
              onClick={() => setModalImg(null)}
            >
              ×
            </button>
          </div>
        </div>
      )}

      {/* 상품 정보 카드 */}
      <div className={styles['product-info-card']}>
        <div className={styles['info-row']}>
          <span className={styles['info-label']}>브랜드 :</span>
          <span className={styles['info-value']}>{product.brandName}</span>
        </div>
        <div className={styles['info-row']}>
          <span className={styles['info-label']}>카테고리 :</span>
          <span className={styles['info-value']}>
            {product.categoryMain} - {product.categorySub}
          </span>
        </div>
        <div className={styles['info-row']}>
          <span className={styles['info-label']}>예상포인트 :</span>
          <span className={styles['info-value']}>
            {product.expectedPoint?.toLocaleString()}원
          </span>
        </div>
        <div className={styles['info-row']}>
          <span className={styles['info-label']}>판매자 ID :</span>
          <span className={styles['info-value']}>{product.userId}</span>
        </div>
      </div>

      {/* AI 검수 결과 */}
      <div className={styles['ai-section']}>
        <div className={styles['ai-title']}>
          AI 검수 결과 :&nbsp;
          <span
            className={
              ai?.result === 'PASS' ? styles['ai-pass'] : styles['ai-fail']
            }
          >
            {ai?.result === 'PASS' ? 'PASS' : 'FAIL'}
          </span>
        </div>
        <div className={styles['defect-row']}>
          {DEFECTS.map(({ key, label, emoji }) => (
            <div
              key={key}
              className={`${styles['defect-box']} ${
                ai?.[key] === 'Y' ? styles['defect-bad'] : styles['defect-good']
              }`}
            >
              <span className={styles['defect-emoji']}>{emoji}</span>
              {label} {ai?.[key] === 'Y' ? '있음' : '없음'}
            </div>
          ))}
        </div>
        <ul className={styles['ai-meta']}>
          <li>
            <b>AI 코멘트</b>: {ai?.notes}
          </li>
          <li>
            <b>검수 일시</b>: {ai?.createdAt}
          </li>
        </ul>
      </div>

      {/* 검수 기준 */}
      <div className={styles['criteria-section']}>
        <div className={styles['criteria-title']}>검수 기준</div>
        <table className={styles['criteria-table']}>
          <thead>
            <tr>
              <th>등급</th>
              <th>상태 설명</th>
              <th>외관/손상 기준</th>
              <th>예상 포인트 비율</th>
            </tr>
          </thead>
          <tbody>
            {CRITERIA.map((row) => (
              <tr key={row.grade}>
                <td style={{ color: row.color, fontWeight: 700 }}>
                  {row.grade}
                </td>
                <td>{row.desc}</td>
                <td>{row.detail}</td>
                <td style={{ color: row.color, fontWeight: 700 }}>
                  {row.rate}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
