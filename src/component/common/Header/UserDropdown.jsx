import React, { useState, useEffect, useRef } from 'react';
import styles from './Header.module.css';

const UserDropdown = ({ userName, role }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  const handleLogout = () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('role');

    if (role === 'admin') {
      window.location.href = '/admin/login';
    } else if (role === 'inspector') {
      window.location.href = '/inspector/login';
    } else {
      window.location.href = '/login'; // fallback
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className={styles.userSection} ref={dropdownRef}>
      <button
        onClick={toggleDropdown}
        className={`${styles.userButton} ${role === 'inspector' ? styles.inspectorHover : ''}`}
      >
        {userName} {role === 'inspector' ? '검수자님' : '관리자님'}
      </button>

      {isOpen && (
        <div className={styles.dropdown}>
          <button
            onClick={handleLogout}
            className={`${styles.dropdownItem} ${role === 'inspector' ? styles.inspectorHover : ''}`}
          >
            로그아웃
          </button>
        </div>
      )}
    </div>
  );
};

export default UserDropdown;
