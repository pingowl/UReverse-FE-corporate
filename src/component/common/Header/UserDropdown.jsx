import React, { useState, useEffect, useRef } from 'react';
import styles from './Header.module.css';

const UserDropdown = ({ userName, role }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => setIsOpen((prev) => !prev);

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
          <a
            href="/logout"
            className={`${styles.dropdownItem} ${role === 'inspector' ? styles.inspectorHover : ''}`}
          >
            로그아웃
          </a>
        </div>
      )}
    </div>
  );
};

export default UserDropdown;
