import React from 'react';
import Header from './component/common/Header/Header';
import Sidebar from './component/common/Sidebar';

function App() {
  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <div style={{ flex: 1 }}>
        <Header />
        <main style={{ padding: '20px' }}>
          <h2>본문 콘텐츠</h2>
        </main>
      </div>
    </div>
  );
}

export default App;