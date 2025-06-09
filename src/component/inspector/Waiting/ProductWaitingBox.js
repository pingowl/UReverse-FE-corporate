import React, { useState } from 'react';
import ProductWaitingItem from './ProductWaitingItem';
import Pagination from '../../common/Pagination/Pagination';
import styles from './ProductWaiting.module.css';

// 예시 데이터
const dummyProducts = [
  {
    id: 1,
    image: 'https://cdn.hellodd.com/news/photo/201909/69577_craw1.jpg',
    name: '상품 ㄱㄱ',
    price: 10000,
    date: '2025-06-01',
  },
  {
    id: 2,
    image: 'https://flexible.img.hani.co.kr/flexible/normal/970/710/imgdb/original/2022/0107/20220107501703.jpg',
    name: '상품 ㄴㄴ',
    price: 12000,
    date: '2025-06-02',
  },
  {
    id: 3,
    image: '',
    name: '상품 ㄷㄷ',
    price: 13000,
    date: '2025-06-03',
  },
  {
    id: 4,
    image: '',
    name: '상품 ㄹㄹ',
    price: 15000,
    date: '2025-06-04',
  },
  {
    id: 5,
    image: '',
    name: '상품 ㅁㅁ',
    price: 16000,
    date: '2025-06-05',
  },
  {
    id: 6,
    image: '',
    name: '상품 ㅂㅂ',
    price: 17000,
    date: '2025-06-06',
  },
  {
    id: 7,
    image: '',
    name: '상품 ㅅㅅ',
    price: 11000,
    date: '2025-06-06',
  },
  
];

const ProductWaitingBox = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const indexOfLast = currentPage * itemsPerPage;
  const indexOfFirst = indexOfLast - itemsPerPage;
  const currentItems = dummyProducts.slice(indexOfFirst, indexOfLast);

  const totalPages = Math.ceil(dummyProducts.length / itemsPerPage);

  return (
    <div className={styles.productBox}>
      <div className={styles.header}>
        <div className={styles.leftHeader}>
          <div className={styles.tag} />
          <h2 className={styles.titleTop}>검수 대기 목록</h2>
        </div>
      </div>

      <div className={styles.grid}>
        {currentItems.map((product) => (
          <ProductWaitingItem key={product.id} {...product} />
        ))}
      </div>

       <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default ProductWaitingBox;
