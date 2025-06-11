import React, { useState } from 'react';
import ProductItem from './ProductItem';
import Search from '../../common/Search/Search';
import Pagination from '../../common/Pagination/Pagination';
import styles from './Product.module.css';

// 예시 데이터
const dummyProducts = [
  {
    id: 1,
    image: 'https://cdn.hellodd.com/news/photo/201909/69577_craw1.jpg',
    brand: '브랜드A',
    category: '카테고리A',
    grade: "A",
    date: '2025-06-01',
  },
  {
    id: 2,
    image: 'https://flexible.img.hani.co.kr/flexible/normal/970/710/imgdb/original/2022/0107/20220107501703.jpg',
    brand: '브랜드B',
    category: '카테고리B',
    grade: "B",
    date: '2025-06-02',
  },
  {
    id: 3,
    image: '',
    brand: '브랜드C',
    category: '카테고리C',
    grade: "S",
    date: '2025-06-03',
  },
  {
    id: 4,
    image: '',
    brand: '브랜드D',
    category: '카테고리D',
    grade: "A",
    date: '2025-06-04',
  },
  {
    id: 5,
    image: '',
    brand: '브랜드E',
    category: '카테고리E',
    grade: "A",
    date: '2025-06-05',
  },
  {
    id: 6,
    image: '',
    brand: '브랜드F',
    category: '카테고리F',
    grade: "F",
    date: '2025-06-06',
  },
  {
    id: 7,
    image: '',
    brand: '브랜드G',
    category: '카테고리G',
    grade: "A",
    date: '2025-06-06',
  },
  
];
 
const ProductBox = () => {
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
          <h2 className={styles.titleTop}>상품 목록</h2>
        </div>
        <Search/>
      </div>

      <div className={styles.grid}>
        {currentItems.map((product) => (
          <ProductItem key={product.id} {...product} />
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

export default ProductBox;
