import React from 'react'

const Sidebar = () => {
    const menuItems = [
        { label: '대시보드', icon: '🏠' },
        { label: '상품 관리', icon: '💼' },
        { label: '수거 관리', icon: '🚚' },
        { label: '사용자 관리', icon: '👥' },
    ];

    return (
        <aside style={{
            width: '340px',
            height: '100vh',
            padding: '24px',
            boxSizing: 'border-box',
            backgroundColor: '#FCFCFC'
        }}>
            <a href="/" style={{
                display: 'flex',
                alignItems: 'center',
                textDecoration: 'none'
            }}>
                <img
                    src={"./logo.png"}
                    alt="logo"
                    style={{ height: '64px', marginRight: '12px' }}
                />
                <span style={{
                    fontFamily: 'KCC-Ganpan, sans-serif',
                    fontSize: '24px',
                    fontWeight: 'bold',
                    color: '#333'
                }}>
                    U:Reverse
                </span>
            </a>

            <nav style={{ marginTop: '48px' }}>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                    {menuItems.map((item, index) => (
                        <li key={index} style={{
                            display: 'flex',
                            alignItems: 'center',
                            padding: '12px',
                            marginBottom: '16px',
                            cursor: 'pointer',
                            fontFamily: 'Pretendard-Regular, sans-serif',
                            fontSize: '16px',
                            fontWeight: 'bold',
                            color: '#333'
                        }}>
                            <span style={{ marginRight: '16px' }}>{item.icon}</span>
                            {item.label}
                        </li>
                    ))}
                </ul>
            </nav>
        </aside>
    );
};

export default Sidebar;
