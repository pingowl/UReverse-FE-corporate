import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Landing.module.css';

import image1 from "../../../assets/images/login/loginimage1.png";
import image2 from "../../../assets/images/login/loginimage2.png";
import image3 from "../../../assets/images/login/loginimage3.png";
import image4 from "../../../assets/images/login/loginimage4.png";
import image5 from "../../../assets/images/login/loginimage5.png";

const images = [image1, image2, image3, image4, image5];

function LandingBox({ isInspector }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const displayDuration = 10000;
    const timer = setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, displayDuration);

    return () => clearTimeout(timer);
  }, [currentIndex]);

  const handleAdminLogin = () => {
    navigate('/admin/login');
  };
  const handleInspectorLogin = () => {
    navigate('/inspector/login')
  }

  return (
    <div className={styles.loginWrapper}>
      <div className={styles.loginimg}>
        <div className={styles.slideImageWrapper}>
          {images.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`slide-${idx}`}
              className={`${styles.slideImage} ${currentIndex === idx ? styles.show : ''}`}
            />
          ))}
        </div>
      </div>
      <div className={styles.landingFormDiv}>
        <div className={styles.landingContent}>
          <div className={styles.logo}>
            <span className={styles.logoText}>U:Reverse</span>
          </div>

          <button
            type="button"
            className={styles.landingButton}
            onClick={handleAdminLogin} 
          >
            관리자 로그인
          </button>

          <button
            type="submit"
            className={`${styles.landingButton} ${styles.inspectorButton}`}
            onClick={handleInspectorLogin}
          >
            검수자 로그인
          </button>
        </div>
      </div>
    </div>
  );
}

export default LandingBox;
