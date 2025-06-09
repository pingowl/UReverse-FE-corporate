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
    name: '상품 A',
    price: 10000,
    date: '2025-06-01',
  },
  {
    id: 2,
    image: 'https://flexible.img.hani.co.kr/flexible/normal/970/710/imgdb/original/2022/0107/20220107501703.jpg',
    name: '상품 B',
    price: 12000,
    date: '2025-06-02',
  },
  {
    id: 3,
    image: '',
    name: '상품 C',
    price: 13000,
    date: '2025-06-03',
  },
  {
    id: 4,
    image: '',
    name: '상품 D',
    price: 15000,
    date: '2025-06-04',
  },
  {
    id: 5,
    image: '',
    name: '상품 E',
    price: 16000,
    date: '2025-06-05',
  },
  {
    id: 6,
    image: '',
    name: '상품 F',
    price: 17000,
    date: '2025-06-06',
  },
  {
    id: 7,
    image: '',
    name: '상품 G',
    price: 11000,
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
