import React, { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import Sidebar from './Sidebar/Sidebar';
import Header from './Header/Header';
import { RoleContext } from '../../utils/RoleContext';

const Layout = ({ role }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('accessToken');
    if (!token) {
      // 권한별 로그인 페이지로 이동
      if (role === 'admin') navigate('/admin/login');
      else if (role === 'inspector') navigate('/inspector/login');
    }
  }, [role, navigate]);

  return (
    <RoleContext.Provider value={role}>
      <div style={{ display: 'flex', height: '100vh' }}>
        <Sidebar role={role} />
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
          <Header role={role} />
          <main style={{ padding: '20px', flex: 1 }}>
            <Outlet />
          </main>
        </div>
      </div>
    </RoleContext.Provider>
  );
};

export default Layout;
