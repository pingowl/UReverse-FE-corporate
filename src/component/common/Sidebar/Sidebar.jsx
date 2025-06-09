import React from 'react';
import { useLocation } from 'react-router-dom';
import styles from './Sidebar.module.css';
import adminMenuItems from './menu/adminMenu';
import inspectorMenuItems from './menu/inspectorMenu';

const Sidebar = ({ role = 'admin' }) => {
  const location = useLocation();
  const menuItems = role === 'admin' ? adminMenuItems : inspectorMenuItems;

  const isActive = (label) => {
    const path = location.pathname;
    switch (label) {
      case '대시보드':
        return path === '/admin' || path === '/inspector';
      case '상품 관리':
        return path.includes('/product');
      case '수거 관리':
        return path.includes('/pickup');
      case '사용자 관리':
        return path.includes('/user');
      case '검수 대기':
        return path.includes('/waiting');
      case '검수 완료':
        return path.includes('/finished');
      default:
        return false;
    }
  };

  return (
    <aside
      className={styles.sidebar}
    >
      <a href={role === 'admin' ? '/admin' : '/inspector/waiting'} className={styles.logo}>
        <img src="/logo.png" alt="logo" style={{ height: '64px', marginRight: '12px' }} />
        <span className={styles.logoText}>U:Reverse</span>
      </a>

      <nav>
        <ul className={styles.menuList}>
          {menuItems.map((item, index) => (
            <li
              key={index}
              className={`${styles.menuItem} ${isActive(item.label) ? styles.active : ''} ${
                role === 'inspector' && isActive(item.label) ? styles.inspectorActive : ''
              }`}
            >
              <a
                href={item.path}
                className={`${styles.menuLink} ${role === 'inspector' ? styles.inspectorMenuLink : ''}`}
              >
                <img src={item.icon} alt={item.label} className={styles.menuIcon} />
                <span className={styles.menuLabel}>{item.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
