import React, { useState } from 'react';
import Search from '../../common/Search/Search';
import PickupItem from './PickupItem';
import Pagination from '../../common/Pagination/Pagination';
import styles from './Pickup.module.css';

// 예시 데이터
const dummyProducts = [
  {
    id: 1,
    image: 'https://cdn.hellodd.com/news/photo/201909/69577_craw1.jpg',
    brand: '브랜드 A',
    category: '카테고리 A',
    grade: 'S',
    point: 10000,
    date: '2025-06-01',
    state: 'FINISH',
  },
  {
    id: 2,
    image: 'https://flexible.img.hani.co.kr/flexible/normal/970/710/imgdb/original/2022/0107/20220107501703.jpg',
    brand: '브랜드 B',
    category: '카테고리 B',
    grade: 'A',
    point: 13000,
    date: '2025-06-02',
    state: 'DELIVERY_REQUEST',
  },
  {
    id: 3,
    image: '',
    brand: '브랜드 C',
    category: '카테고리 C',
    grade: 'A',
    point: 11000,
    date: '2025-06-03',
    state: 'SECOND_INSPECT',
  },
  {
    id: 4,
    image: '',
    brand: '브랜드 D',
    category: '카테고리 D',
    grade: 'S',
    point: 15000,
    date: '2025-06-01',
    state: 'FIRST_INSPECT',
  },
  {
    id: 5,
    image: '',
    brand: '브랜드 E',
    category: '카테고리 E',
    grade: 'S',
    point: 10000,
    date: '2025-06-01',
    state: 'REGISTER',
  },
  {
    id: 6,
    image: '',
    brand: '브랜드 F',
    category: '카테고리 F',
    grade: 'C',
    point: 1000,
    date: '2025-06-01',
    state: 'FIRST_INSPECT',
  },
  {
    id: 7,
    image: '',
    brand: '브랜드 G',
    category: '카테고리 G',
    grade: 'S',
    point: 20000,
    date: '2025-06-01',
    state: 'REGISTER',
  },
  
];

const PickupBox = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const indexOfLast = currentPage * itemsPerPage;
  const indexOfFirst = indexOfLast - itemsPerPage;
  const currentItems = dummyProducts.slice(indexOfFirst, indexOfLast);

  const totalPages = Math.ceil(dummyProducts.length / itemsPerPage);

  return (
    <div className={styles.pickupBox}>
      <div className={styles.header}>
        <div className={styles.leftHeader}>
          <div className={styles.tag} />
          <h2 className={styles.titleTop}>수거 관리</h2>
        </div>
        <Search/>
      </div>

      <table className={styles.table}>
        <thead>
          <tr>
            <th>상품 이미지</th>
            <th>브랜드</th>
            <th>카테고리</th>
            <th>등급</th>
            <th>포인트</th>
            <th>날짜</th>
            <th>진행 상태</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((product) => (
            <PickupItem key={product.id} product={product} />
          ))}
        </tbody>
      </table>

       <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default PickupBox;
