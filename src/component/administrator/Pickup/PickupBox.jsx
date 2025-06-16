import React, { useState, useEffect } from 'react';
import PickupItem from './PickupItem';
import Pagination from '../../common/Pagination/Pagination';
import styles from './Pickup.module.css';
import { fetchPickupProducts } from '../../../api/administrator/fetchPickupProducts';
import { fetchAllBrands } from '../../../api/common/fetchAllBrands';
import { fetchAllCategories } from '../../../api/common/fetchAllCategories';


const PickupBox = () => {
  const [products, setProducts] = useState([]);
  const [brands, setBrands] = useState([]);
  const [categories, setCategories] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [filters, setFilters] = useState({
    brand: '',
    categoryMain: '',
    grade: '',
    status: '',
  });

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
  

  const handleFilterChange = (key, value) => {
    setFilters((prev) => ({
      ...prev,
      [key]: value,
    }));
    setCurrentPage(1);
  };

  useEffect(() => {
    const loadProducts = async () => {
      setLoading(true);
      setError(null);

      const statusList = filters.status ? [filters.status] : [];

      const params = {
        brand: filters.brand,
        categoryMain: filters.categoryMain,
        categorySub: '',
        grade: filters.grade,
        statusList,
        pageSize,
        pageNum: currentPage,
      };

      const res = await fetchPickupProducts(params);

      if (res.success) {
        setProducts(res.response.items);
        setTotalPages(res.response.totalPages || 1);
      } else {
        setError(res.error || '상품 목록을 불러오는데 실패했습니다.');
      }

      setLoading(false);
    };

    loadProducts();
  }, [filters, currentPage]);

  return (
    <div className={styles.pickupBox}>
      <div className={styles.header}>
        <div className={styles.leftHeader}>
          <div className={styles.tag} />
          <h2 className={styles.titleTop}>수거 관리</h2>
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

          <select
            value={filters.grade}
            onChange={(e) => handleFilterChange('grade', e.target.value)}
          >
            <option value="">등급 전체</option>
            <option value="S">S</option>
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="C">C</option>
            <option value="F">F</option>
          </select>

          <select
            value={filters.status}
            onChange={(e) => handleFilterChange('status', e.target.value)}
          >
            <option value="">상태 전체</option>
            <option value="REGISTER">상품 등록</option>
            <option value="FIRST_INSPECT">1차 검수 완료</option>
            <option value="SECOND_INSPECT">2차 검수 완료</option>
            <option value="DELIVERY_REQUEST">배송 요청 등록</option>
            <option value="DELIVERING">배송 중</option>
            <option value="FINISH">배송 완료</option>
          </select>
        </div>
      </div>

      <table className={styles.table}>
        <thead>
          <tr>
            <th>상품 이미지</th>
            <th>브랜드</th>
            <th>카테고리</th>
            <th>등급</th>
            <th>지급포인트</th>
            <th>날짜</th>
            <th>진행 상태</th>
          </tr>
        </thead>
        <tbody>
          {loading ? (
            <tr>
              <td colSpan="7" style={{ textAlign: 'center' }}>
                로딩 중...
              </td>
            </tr>
          ) : error ? (
            <tr>
              <td colSpan="7" style={{ textAlign: 'center', color: 'red' }}>
                {error}
              </td>
            </tr>
          ) : products.length === 0 ? (
            <tr>
              <td colSpan="7" style={{ textAlign: 'center' }}>
                데이터가 없습니다.
              </td>
            </tr>
          ) : (
            products.map((product) => (
              <PickupItem key={product.id} product={product} />
            ))
          )}
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
