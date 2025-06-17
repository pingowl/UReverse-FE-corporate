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
      if (role === 'admin') navigate('/admin/login');
      else if (role === 'inspector') navigate('/inspector/login');
    }
  }, [role, navigate]);

  return (
    <RoleContext.Provider value={role}>
      <div style={{ display: 'flex', height: '100vh', overflow: 'hidden' }}>
        <Sidebar role={role} />
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
          <Header role={role} key={localStorage.getItem('accessToken')} />
          <div style={{ flex: 1, overflowY: 'auto' }}>
            <main style={{ padding: '8px' }}>
              <Outlet />
            </main>
          </div>
        </div>
      </div>
    </RoleContext.Provider>
  );
};

export default Layout;
