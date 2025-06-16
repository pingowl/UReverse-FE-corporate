import React, { useContext } from 'react';
import styles from './Button.module.css';
import { RoleContext } from '../../../utils/RoleContext';

const Button = ({ text, color, type = 'button', ...props }) => {
  const role = useContext(RoleContext);

  // color가 명시되면 그것을 사용, 아니면 role에 따라 기본값
  let themeColor;
  if (color) {
    themeColor = color;
  } else {
    themeColor = role === 'inspector' ? 'yellow' : 'primary';
  }

  return (
    <button
      type={type}
      className={`${styles.button} ${styles[themeColor]}`}
      {...props}
    >
      {text}
    </button>
  );
};

export default Button;
