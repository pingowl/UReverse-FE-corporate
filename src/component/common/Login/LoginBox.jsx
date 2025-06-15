import React, { useState, useEffect } from 'react';
import styles from './Login.module.css';
import { FaUser, FaLock } from 'react-icons/fa';
import LoginInput from './LoginInput';
import { useNavigate } from 'react-router-dom';
import { login } from '../../../api/auth';

import PangyoHY from "../../../assets/images/login/PangyoHY.webp";
import ApgujeongHY from "../../../assets/images/login/ApgujeongHY.webp";

const images = [PangyoHY, ApgujeongHY];

function LoginBox({ isInspector }) {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const [error, setError] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const navigate = useNavigate();

  // 이미지 슬라이드 효과
  useEffect(() => {
    const displayDuration = 10000; // 10초 유지
    const fadeDuration = 1000; // 1초 페이드

    const timer = setTimeout(() => {
      setFade(false); // 페이드 아웃 시작

      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
        setFade(true); // 페이드 인 시작
      }, fadeDuration);
    }, displayDuration);

    return () => clearTimeout(timer);
  }, [currentIndex]);

  // 로그인 처리
  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    const res = await login(id, pw);
    if (res.success) {
      const { accessToken, role } = res.response;
      localStorage.setItem('accessToken', accessToken);
      localStorage.setItem('role', role);

      if (role === 'ROLE_INSPECTOR') {
        navigate('/inspector/waiting');
      } else if (role === 'ROLE_ADMIN') {
        navigate('/admin');
      } else {
        setError('권한이 없습니다.');
      }
    } else {
      setError('로그인 실패: ' + (res.error || ''));
    }
  };

  return (
    <div className={styles.loginWrapper}>
      <div className={styles.loginimg}>
        <img
          src={images[currentIndex]}
          alt="login slide"
          className={`${styles.slideImage} ${fade ? styles.fadeIn : styles.fadeOut}`}
        />
      </div>

      <div className={styles.loginFormDiv}>
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
              className={`${styles.loginButton} ${isInspector ? styles.inspectorButton : ''}`}
            >
              로그인
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginBox;
