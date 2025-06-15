import React, { useState } from 'react';
import styles from './ProductInfoSection.module.css';
import ImageModal from '../../common/ImageModal/ImageModal';
import ProductImages from '../common/ProductImages';
import ProductDetails from '../common/ProductDetails';
import AiInspectionResult from '../common/AiInspectionResult';
import InspectionCriteria from '../common/InspectionCriteria';

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
      <ProductImages imageUrls={product.imageUrls} />
      <ProductDetails product={product} />
      <AiInspectionResult ai={product.aiInspection} />
      <InspectionCriteria />
    </section>
  );
}
