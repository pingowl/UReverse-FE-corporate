import React, { useState } from 'react';
import Search from '../../common/Search/Search';
import UserItem from './UserItem';
import Pagination from '../../common/Pagination/Pagination';
import styles from './User.module.css';

// 예시 데이터
const dummyProducts = [
  {
    id: 1,
    name: "유저1",
    email:"user1@naver.com",
    phone: "010-1111-1111",
    point: 1230000,
    sales: 5,
    created_at: '2020-01-01'
  },
  {
    id: 2,
    name: "유저2",
    email:"user2@naver.com",
    phone: "010-2222-2222",
    point: 130000,
    sales: 2,
    created_at: '2020-01-01'
  },
  {
    id: 3,
    name: "유저3",
    email:"user3@naver.com",
    phone: "010-3333-3333",
    point: 10000,
    sales: 1,
    created_at: '2020-01-01'
  },
  {
    id: 4,
    name: "유저4",
    email:"user4@naver.com",
    phone: "010-4444-4444",
    point: 2230000,
    sales: 6,
    created_at: '2020-01-01'
  },
  {
    id: 5,
    name: "유저5",
    email:"user5@naver.com",
    phone: "010-5555-5555",
    point: 200000,
    sales: 2,
    created_at: '2020-01-01'
  },
  {
    id: 6,
    name: "유저6",
    email:"user6@naver.com",
    phone: "010-6666-6666",
    point: 1000000,
    sales: 3,
    created_at: '2020-01-01'
  },
  {
    id: 7,
    name: "유저7",
    email:"user7@naver.com",
    phone: "010-7777-7777",
    point: 130000,
    sales: 1,
    created_at: '2020-01-01'
  },
  
];

const UserBox = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const indexOfLast = currentPage * itemsPerPage;
  const indexOfFirst = indexOfLast - itemsPerPage;
  const currentItems = dummyProducts.slice(indexOfFirst, indexOfLast);

  const totalPages = Math.ceil(dummyProducts.length / itemsPerPage);

  return (
    <div className={styles.userBox}>
      <div className={styles.header}>
        <div className={styles.leftHeader}>
          <div className={styles.tag} />
          <h2 className={styles.titleTop}>사용자 목록</h2>
        </div>
        <Search/>
      </div>

      <table className={styles.table}>
        <thead>
          <tr>
            <th>번호</th>
            <th>이름</th>
            <th>이메일</th>
            <th>전화번호</th>
            <th>포인트</th>
            <th>판매량</th>
            <th>가입일자</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((user, index) => (
            <UserItem key={user.id} user={user} index={indexOfFirst + index} />
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

export default UserBox;
