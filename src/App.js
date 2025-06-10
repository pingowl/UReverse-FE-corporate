import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from './pages/administrator/Login';
import Layout from './component/common/Layout';
import Dashboard from './pages/administrator/Dashboard';
import Product from './pages/administrator/Product';
import ProductDetail from './pages/administrator/ProductDetail';
import Pickup from './pages/administrator/Pickup';
import User from './pages/administrator/User';

import Waiting from './pages/inspector/Waiting';
import Finished from './pages/inspector/Finished';

function App() {
  return (  
    <Router>
      <Routes>
         {/* 로그인 페이지는 레이아웃 없이 */}
        <Route path="/login" element={<Login />} />

        {/* administrator */}
        <Route path="/admin" element={<Layout role="admin" />}>
          <Route index element={<Dashboard />} />
          <Route path="product" element={<Product />} />
          <Route path="products/:id" element={<ProductDetail />} />
          <Route path="pickup" element={<Pickup />} />
          <Route path="user" element={<User />} />
        </Route>

        {/* Inspector */}
        <Route path="/inspector" element={<Layout role="inspector" />}>
          <Route path="waiting" element={<Waiting />} />
          <Route path="finished" element={<Finished />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;