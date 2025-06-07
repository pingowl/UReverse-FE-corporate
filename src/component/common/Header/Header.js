import React from 'react';
import Search from './Search';

function Header() {
    return (
        <header style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '18px 48px',
            backgroundColor: '#FCFCFC',
            boxShadow: 'rgb(244, 244, 244) 1px 0px 0px inset, rgb(239, 239, 239) 0px -1px 0px inset'
        }}>

            <Search />
            <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                <a href="/notifications"
                    style={{
                        padding: '8px 16px',
                        fontSize: '16px',
                        color: '#fff',
                        backgroundColor: '#1B75BC',
                        border: 'none',
                        borderRadius: '6px',
                        textDecoration: 'none',
                        cursor: 'pointer',
                        transition: 'background-color 0.2s ease-in-out',
                    }}
                    onMouseOver={(e) => e.target.style.backgroundColor = '#5C9ED0'}
                    onMouseOut={(e) => e.target.style.backgroundColor = '#1B75BC'}
                >
                    알림
                </a>

                <a
                    href="/logout"
                    style={{
                        padding: '8px 16px',
                        fontSize: '16px',
                        color: '#fff',
                        backgroundColor: '#1B75BC',
                        border: 'none',
                        borderRadius: '6px',
                        textDecoration: 'none',
                        cursor: 'pointer',
                        transition: 'background-color 0.2s ease-in-out',
                    }}
                    onMouseOver={(e) => e.target.style.backgroundColor = '#5C9ED0'}
                    onMouseOut={(e) => e.target.style.backgroundColor = '#1B75BC'}
                >
                    로그아웃
                </a>
            </div>

        </header>
    );
}

export default Header;
