import React, { useEffect, useState, useCallback } from 'react';
import ProductFinishedItem from './ProductFinishedItem';
import Pagination from '../../common/Pagination/Pagination';
import styles from './ProductFinished.module.css';
import axios from '../../../axiosInstance';
import Search from '../../common/Search/Search';
import SectionHeader from '../../common/Header/SectionHeader';
import useDebounce from '../../../hooks/useDebounce';

const ProductFinishedBox = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [products, setProducts] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [keyword, setKeyword] = useState('');
  const inspected = true;
  const itemsPerPage = 6;

  const debouncedKeyword = useDebounce(keyword, 500); // 0.5초 후 검색

  const fetchProducts = useCallback(async () => {
    try {
      const response = await axios.get('/inspectors/products/search', {
        params: {
          keyword: debouncedKeyword,
          inspected,
          pageNum: currentPage,
          pageSize: itemsPerPage,
        },
      });

      if (response.data.success) {
        const { items, totalPages } = response.data.response;
        setProducts(items);
        setTotalPages(totalPages);
      } else {
        console.error('API 응답 실패:', response.data.error);
        setProducts([]);
      }
    } catch (error) {
      console.error('상품 목록 불러오기 실패:', error);
    }
  }, [debouncedKeyword, inspected, currentPage, itemsPerPage]);

  // keyword나 페이지가 바뀔 때마다 바로 검색
  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  // 검색어 입력 시 바로 반영
  const handleKeywordChange = (value) => {
    setKeyword(value);
    setCurrentPage(1);
  };

  return (
    <div className={styles.productBox}>
      <SectionHeader title="검수 완료 목록">
        <Search keyword={keyword} onKeywordChange={handleKeywordChange} />
      </SectionHeader>

      <div className={styles.grid}>
        {products.map((product) => (
          <ProductFinishedItem
            key={product.productId}
            id={product.productId}
            name={product.brandName}
            image={product.imageUrl}
            price={product.expectedPoint}
            date={product.createdAt}
          />
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

export default ProductFinishedBox;
