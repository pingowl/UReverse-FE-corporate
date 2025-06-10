import React from 'react';
import styles from './Header.module.css';
import UserDropdown from './UserDropdown';

function Header({role}) {
    const userName= '김지구'; //임의 설정

    return (
        <header className={styles.header}>
            <UserDropdown userName={userName} role={role} />
        </header>
    );
}

export default Header;
