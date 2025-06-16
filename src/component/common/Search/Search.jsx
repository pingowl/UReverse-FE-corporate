import React from 'react';
import { FiSearch } from 'react-icons/fi';
import { useLocation } from 'react-router-dom'; // ✅ 추가
import styles from './Search.module.css';

const Search = ({ keyword, onKeywordChange }) => {
  const location = useLocation();
  const isInspector = location.pathname.startsWith('/inspector'); // ✅

  const handleChange = (e) => {
    onKeywordChange(e.target.value);
  };

  return (
    <div
      className={`${styles.searchWrapper} ${
        isInspector ? styles.inspectorSearch : ''
      }`}
    >
      <FiSearch
        className={styles.searchIcon}
        style={{ cursor: 'pointer' }}
        onClick={() => onKeywordChange(keyword)}
      />
      <input
        type="text"
        placeholder="검색어를 입력하세요"
        className={`${styles.input} ${isInspector ? styles.inputInspector : ''}`} // ✅ 입력창도 변경
        value={keyword}
        onChange={handleChange}
      />
    </div>
  );
};

export default Search;
