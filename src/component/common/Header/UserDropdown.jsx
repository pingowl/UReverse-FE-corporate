import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import styles from './Header.module.css';

const UserDropdown = ({ userName, role }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  const handleLogout = async () => {
  try {
    // 서버에 refreshToken 삭제 요청
    await axios.post('/api/v1/auth/logout', null, { withCredentials: true });
  } catch (e) {
    console.warn('Logout API failed', e);
    // 실패하더라도 로컬 정보는 지움
  }

  localStorage.removeItem('accessToken');
  localStorage.removeItem('role');

  if (role === 'admin') {
    window.location.href = '/admin/login';
  } else if (role === 'inspector') {
    window.location.href = '/inspector/login';
  } else {
    window.location.href = '/login';
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
