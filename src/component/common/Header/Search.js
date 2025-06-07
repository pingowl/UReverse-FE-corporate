import React from 'react';

const Search = () => {
  return (
    <input
      type="text"
      placeholder="검색어를 입력하세요"
      style={{
        padding: '12px 24px',
        width: '300px',
        border: '1px solid #ccc',
        borderRadius: '10px',
      }}
    />
  );
};

export default Search;
