import React from 'react';
import { useParams } from 'react-router-dom';
import ProductDetailBox from '../../component/administrator/ProductDetail/ProductDetailBox';

const ProductDetail = () => {
  const { id } = useParams();
  return (
    <div
      style={{
        padding: 24,
        boxSizing: 'border-box',
      }}
    >
        <ProductDetailBox productId={id}/>
    </div>
  );
};

export default ProductDetail;