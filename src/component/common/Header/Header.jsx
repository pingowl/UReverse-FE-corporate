import React, { useState, useEffect} from 'react';
import styles from './Header.module.css';
import UserDropdown from './UserDropdown';
import { fetchUserName } from '../../../api/fetchUserName';

function Header({ role }) {
  const [userName, setUserName] = useState('');

  useEffect(() => {
    const getUserName = async () => {
      const result = await fetchUserName();
      if (result.success) setUserName(result.name);
      else setUserName(''); 
    };
    getUserName();
  }, []);

  return (
    <header className={styles.header}>
      <UserDropdown userName={userName} role={role} />
    </header>
  );
}

export default Header;
