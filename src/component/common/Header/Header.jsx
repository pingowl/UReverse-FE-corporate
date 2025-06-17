import React, { useState, useEffect } from 'react';
import styles from './Header.module.css';
import UserDropdown from './UserDropdown';
import { fetchUserName } from '../../../api/fetchUserName';

function Header({ role }) {
  const [userName, setUserName] = useState('');

  useEffect(() => {
    const getUserName = async () => {
      const result = await fetchUserName();
      if (result.success) {
        setUserName(result.name);
      } else {
        setUserName(''); // 또는 null
      }
    };
    getUserName();
  }, []);

  return (
    <header className={styles.header}>
      {userName ? (
        <UserDropdown userName={userName} role={role} />
      ) : (
        <span className={styles.loginNotice}>로그인이 필요합니다.</span>
      )}
    </header>
  );
}

export default Header;

