import React, { useEffect, useState } from 'react';
import ProductItem from './ProductItem';
import Pagination from '../../common/Pagination/Pagination';
import styles from './Product.module.css';
import { fetchFinishedProducts } from '../../../api/administrator/fetchFinishedProducts';
import { fetchAllBrands } from '../../../api/common/fetchAllBrands';
import { fetchAllCategories } from '../../../api/common/fetchAllCategories';

const ProductBox = () => {
  const [products, setProducts] = useState([]);
  const [brands, setBrands] = useState([]);
  const [categories, setCategories] = useState([]);
  const [filters, setFilters] = useState({
    brand: '',
    categoryMain: '',
    grade: '',
  });
  const [pageNum, setPageNum] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const pageSize = 6;

  useEffect(() => {
    const loadBrands = async () => {
      const res = await fetchAllBrands();
      if (res.success) {
        setBrands(res.brands.map((b) => b.name));
      } else {
        console.error(res.error || '브랜드 정보를 불러오는 데 실패했습니다.');
      }
    };

    loadBrands();
  }, []);

   useEffect(() => {
    const loadCategories = async () => {
      const res = await fetchAllCategories();
      if (res.success) {
        setCategories(res.categories);
      } else {
        console.error(res.error || '카테고리 정보를 불러오는 데 실패했습니다.');
      }
    };
    loadCategories();
  }, []);

  useEffect(() => {
    const loadProducts = async () => {
      const res = await fetchFinishedProducts({
        ...filters,
        pageNum,
        pageSize,
      });

      if (res.success) {
        setProducts(res.response.items);
        setTotalPages(res.response.totalPages);
      } else {
        console.error(res.error || '상품 정보를 불러오는 데 실패했습니다.');
      }
    };

    loadProducts();
  }, [filters, pageNum]);

  const handleFilterChange = (field, value) => {
    setFilters((prev) => ({ ...prev, [field]: value }));
    setPageNum(1); 
  };

  return (
    <div className={styles.productBox}>
      <div className={styles.header}>
        <div className={styles.leftHeader}>
          <div className={styles.tag} />
          <h2 className={styles.titleTop}>상품 목록</h2>
        </div>
        <div className={styles.filters}>
          <select onChange={(e) => handleFilterChange('brand', e.target.value)}>
            <option value="">브랜드 전체</option>
            {brands.map((brand) => (
              <option key={brand} value={brand}>
                {brand}
              </option>
            ))}
          </select>
          <select onChange={(e) => handleFilterChange('categoryMain', e.target.value)}>
            <option value="">카테고리 전체</option>
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
          <select onChange={(e) => handleFilterChange('grade', e.target.value)}>
            <option value="">등급 전체</option>
            <option value="S">S</option>
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="C">C</option>
            <option value="F">F</option>
          </select>
        </div>
      </div>

      <div className={styles.grid}>
        {products.map((product) => (
          <ProductItem key={product.id} {...product} />
        ))}
      </div>

      <Pagination
        currentPage={pageNum}
        totalPages={totalPages}
        onPageChange={setPageNum}
      />
    </div>
  );
};

export default ProductBox;
