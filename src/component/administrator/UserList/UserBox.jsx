import React, { useEffect, useState } from 'react';
import Search from '../../common/Search/Search';
import UserItem from './UserItem';
import Pagination from '../../common/Pagination/Pagination';
import styles from './User.module.css';
import { fetchUser } from '../../../api/administrator/fetchUser';
import SectionHeader from '../../common/Header/SectionHeader';
import useDebounce from '../../../hooks/useDebounce';

const UserBox = () => {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const itemsPerPage = 10;
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  useEffect(() => {
  const getUsers = async () => {
    const { success, data, error } = await fetchUser({
      email: debouncedSearchTerm, // ✅ debounce된 값 사용
      offset: itemsPerPage,
      pageNum: currentPage,
    });

    if (success) {
      setUsers(data.items);
      setTotalPages(data.totalPages);
    } else {
      console.error(error);
    }
  };

  getUsers();
}, [currentPage, debouncedSearchTerm]);

  const handleSearch = (term) => {
    setCurrentPage(1);
    setSearchTerm(term);
  };

  return (
    <div className={styles.userBox}>
      <SectionHeader title="판매자 목록">
        <Search keyword={searchTerm} onKeywordChange={handleSearch} />
      </SectionHeader>

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
          {users.map((user, index) => (
            <UserItem key={user.id} user={user} index={(currentPage - 1) * itemsPerPage + index} />
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