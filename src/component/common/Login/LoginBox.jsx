import React, { useState } from 'react';
import styles from './Login.module.css';
import { FaUser, FaLock } from 'react-icons/fa';
import LoginInput from './LoginInput';
import axios from '../../../axiosInstance';
import { useNavigate } from 'react-router-dom';

function LoginBox({ isInspector }) {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // 로그인 버튼 클릭 시
  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const res = await axios.post(
        '/auth/login',
        {
          email: id,
          password: pw,
        },
        { withCredentials: true } // refreshToken 쿠키 수신 위해 필요
      );
      if (res.data.success) {
        const { accessToken, role } = res.data.response;
        // accessToken을 localStorage/sessionStorage에 저장
        localStorage.setItem('accessToken', accessToken);
        localStorage.setItem('role', role);

        // role에 따라 이동
        if (role === 'ROLE_INSPECTOR') {
          navigate('/inspector/waiting');
        } else if (role === 'ROLE_ADMIN') {
          navigate('/admin');
        } else {
          setError('권한이 없습니다.');
        }
      } else {
        setError('로그인 실패: ' + (res.data.error || ''));
      }
    } catch (err) {
      setError('로그인 실패: 아이디 또는 비밀번호를 확인하세요.');
    }
  };

  return (
    <form
      className={`${styles.loginDiv} ${isInspector ? styles.inspectorBox : ''}`}
      onSubmit={handleLogin}
    >
      <div className={styles.loginContent}>
        <div className={styles.logo}>
          <img
            src="/logo.png"
            alt="logo"
            style={{ height: '70px', marginRight: '1px' }}
          />
          <span className={styles.logoText}>U:Reverse</span>
        </div>
        <LoginInput
          type="text"
          content="아이디"
          icon={FaUser}
          name="id"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
        <LoginInput
          type="password"
          content="비밀번호"
          icon={FaLock}
          name="pw"
          value={pw}
          onChange={(e) => setPw(e.target.value)}
        />

        {error && <div className={styles.errorMsg}>{error}</div>}

        <button
          type="submit"
          className={`${styles.loginButton} ${
            isInspector ? styles.inspectorButton : ''
          }`}
        >
          로그인
        </button>
      </div>
    </form>
  );
}

export default LoginBox;
