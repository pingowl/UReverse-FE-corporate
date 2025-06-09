import React from 'react';
import { FiSearch } from 'react-icons/fi';
import styles from './Seach.module.css';

const Search = () => {
  return (
    <div className={styles.searchWrapper}>
      <FiSearch className={styles.searchIcon} />
      <input
        type="text"
        placeholder="검색어를 입력하세요"
        className={styles.input}
      />
    </div>
  );
};

export default Search;
