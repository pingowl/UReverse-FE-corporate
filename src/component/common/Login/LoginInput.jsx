import React from 'react';
import styles from './Login.module.css';

function LoginInput({ type = "text", content = "", name, value, onChange, icon: Icon }) {
  return (
    <div className={styles.inputWrapper}>
      {Icon && <div className={styles.icon}><Icon /></div>}
      <input
        type={type}
        placeholder={content}
        className={styles.loginInput}
        name={name}
        value={value}
        onChange={onChange}
        autoComplete="off"
      />
    </div>
  );
}

export default LoginInput;
