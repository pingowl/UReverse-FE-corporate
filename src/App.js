import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from './pages/administrator/Login';
import Layout from './component/common/Layout';
import Dashboard from './pages/administrator/Dashboard';
import Product from './pages/administrator/Product';
import ProductDetail from './pages/administrator/ProductDetail';
import Pickup from './pages/administrator/Pickup';
import PickupDetail from './pages/administrator/PickupDetail';
import User from './pages/administrator/User';

import Waiting from './pages/inspector/Waiting';
import Finished from './pages/inspector/Finished';
import InspectorWaitingDetail from './pages/inspector/WaitingProductDetail';
import InspectorFinishedDetail from './pages/inspector/FinishedProductDetail';

function App() {
  return (
    <Router>
      <Routes>
        {/* 로그인 페이지는 레이아웃 없이 */}
        <Route path="/admin/login" element={<Login />} />
        <Route path="/inspector/login" element={<Login />} />

        {/* administrator */}
        <Route path="/admin" element={<Layout role="admin" />}>
          <Route index element={<Dashboard />} />
          <Route path="product" element={<Product />} />
          <Route path="products/:id" element={<ProductDetail />} />
          <Route path="pickup" element={<Pickup />} />
          <Route path="pickup/:id" element={<PickupDetail />} />
          <Route path="user" element={<User />} />
        </Route>

        {/* Inspector */}
        <Route path="/inspector" element={<Layout role="inspector" />}>
          <Route path="waiting" element={<Waiting />} />
          <Route path="waiting/:id" element={<InspectorWaitingDetail />} />
          <Route path="finished" element={<Finished />} />
          <Route path="finished/:id" element={<InspectorFinishedDetail />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
