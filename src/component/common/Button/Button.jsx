// components/Common/CommonButton.jsx
import React from 'react';
import styles from './Button.module.css';

const Button = ({ text, color = 'primary', onClick }) => {
  return (
    <button className={`${styles.button} ${styles[color]}`} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
