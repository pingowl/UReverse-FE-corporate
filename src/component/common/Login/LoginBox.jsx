import React, { useState, useEffect } from 'react';
import styles from './Login.module.css';
import { FaUser, FaLock } from 'react-icons/fa';
import LoginInput from './LoginInput';
import PangyoHY from "../../../assets/images/login/PangyoHY.webp";
import ApgujeongHY from "../../../assets/images/login/ApgujeongHY.webp";

const images = [PangyoHY, ApgujeongHY];

function LoginBox({isInspector}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true); // true: 보여짐, false: 사라짐

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // 페이드 아웃 시작
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        setFade(true); // 페이드 인 시작
      }, 1000); // 1초 후 이미지 변경
    }, 6000); // 6초마다 슬라이드 (1초 페이드 아웃 + 5초 유지)

    return () => clearInterval(interval);
  }, []);

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
        <div className={`${styles.loginDiv} ${isInspector ? styles.inspectorBox : ''}`}>
          <div className={styles.loginContent}>
            <div className={styles.logo}>
              <span className={styles.logoText}>U:Reverse</span>
            </div>
            <LoginInput type="text" content="아이디" icon={FaUser} />
            <LoginInput type="password" content="비밀번호" icon={FaLock} />
            <button className={`${styles.loginButton} ${isInspector ? styles.inspectorButton : ''}`}>
              로그인
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginBox;

