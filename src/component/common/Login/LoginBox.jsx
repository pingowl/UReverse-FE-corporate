import React from 'react';
import styles from './Login.module.css';
import { FaUser, FaLock } from 'react-icons/fa';
import LoginInput from './LoginInput';

function LoginBox({isInspector}) {
    return (
        <div className={`${styles.loginDiv} ${isInspector ? styles.inspectorBox : ''}`}>
            <div className={styles.loginContent}>
                <div className={styles.logo}>
                    <img src="/logo.png" alt="logo" style={{ height: '70px', marginRight: '1px' }} />
                    <span className={styles.logoText}>U:Reverse</span>
                </div>
                <LoginInput type="text" content="아이디" icon={FaUser} />
                <LoginInput type="password" content="비밀번호" icon={FaLock} />

                <button className={`${styles.loginButton} ${isInspector ? styles.inspectorButton : ''}`}>
                    로그인
                </button>
            </div>
           
        </div>
    );
}

export default LoginBox;
