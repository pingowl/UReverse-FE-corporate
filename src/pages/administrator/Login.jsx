import React from 'react';
import { useLocation } from 'react-router-dom'
import LoginBox from '../../component/common/Login/LoginBox';

const Login = () => {
  const location = useLocation();
  const isInspector = location.pathname.includes('/inspector');

  return (
    <div
      style={{
        padding: 24,
        boxSizing: 'border-box',
      }}
    >
      <LoginBox isInspector={isInspector}/>
    </div>
  );
};

export default Login;
