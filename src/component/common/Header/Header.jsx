import React, { useState } from 'react';
import styles from './Header.module.css';
import Search from './Search';
import UserDropdown from './UserDropdown';

function Header({role}) {
    const [isOpen, setIsOpen] = useState(false);
    const userName= '김지구'; //임의 설정

    return (
        <header className={styles.header}>
            <Search />
            <UserDropdown userName={userName} role={role} />
        </header>
    );
}

export default Header;
