import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import ProtectedRoute from './routes/ProtectedRoute';

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
          <Route index element={
            <ProtectedRoute requiredRole="ROLE_ADMIN">
              <Dashboard />
            </ProtectedRoute>} />
          <Route path="product" element={
            <ProtectedRoute requiredRole="ROLE_ADMIN">
              <Product />
            </ProtectedRoute>} />
          <Route path="products/:id" element={
            <ProtectedRoute requiredRole="ROLE_ADMIN">
              <ProductDetail />
            </ProtectedRoute>} />
          <Route path="pickup" element={
            <ProtectedRoute requiredRole="ROLE_ADMIN">
              <Pickup />
            </ProtectedRoute>} />
          <Route path="pickup/:id" element={
            <ProtectedRoute requiredRole="ROLE_ADMIN">
              <PickupDetail />
            </ProtectedRoute>} />
          <Route path="user" element={
            <ProtectedRoute requiredRole="ROLE_ADMIN">
              <User />
            </ProtectedRoute>} />
        </Route>

        {/* Inspector */}
        <Route path="/inspector" element={<Layout role="inspector" />}>
          <Route path="waiting" element={
            <ProtectedRoute requiredRole="ROLE_INSPECTOR">
              <Waiting />
            </ProtectedRoute>} />
          <Route path="waiting/:id" element={
            <ProtectedRoute requiredRole="ROLE_INSPECTOR">
              <InspectorWaitingDetail />
            </ProtectedRoute>} />
          <Route path="finished" element={
            <ProtectedRoute requiredRole="ROLE_INSPECTOR">
              <Finished />
            </ProtectedRoute>} />
          <Route path="finished/:id" element={
            <ProtectedRoute requiredRole="ROLE_INSPECTOR">
              <InspectorFinishedDetail />
            </ProtectedRoute>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
