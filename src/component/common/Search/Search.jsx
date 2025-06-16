import React from 'react';
import { FiSearch } from 'react-icons/fi';
import styles from './Search.module.css';

const Search = ({ keyword, onKeywordChange }) => {
  const handleChange = (e) => {
    onKeywordChange(e.target.value);
  };

  return (
    <div className={styles.searchWrapper}>
      <FiSearch
        className={styles.searchIcon}
        style={{ cursor: 'pointer' }}
        // 클릭 시에도 input 값을 부모에 전달
        onClick={() => onKeywordChange(keyword)}
      />
      <input
        type="text"
        placeholder="검색어를 입력하세요"
        className={styles.input}
        value={keyword}
        onChange={handleChange}
      />
    </div>
  );
};

export default Search;
