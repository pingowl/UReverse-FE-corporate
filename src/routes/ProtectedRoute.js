// components/ProtectedRoute.jsx
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ProtectedRoute = ({ children, requiredRole }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('accessToken');
    const role = localStorage.getItem('role');

    if (!token || (requiredRole && role !== requiredRole)) {
      alert('로그인이 필요합니다.');
      if(requiredRole === 'ROLE_ADMIN'){
        navigate('/admin/login');
      }else if(requiredRole === 'ROLE_INSPECTOR'){
        navigate('/inspector/login');
      }
    }
  }, [navigate, requiredRole]);

  return children;
};

export default ProtectedRoute;
