import React from 'react';
import ProductWaitingBox from '../../component/inspector/Waiting/ProductWaitingBox';

const Waiting = () => {
  return (
    <div
      style={{
        padding: 24,
        boxSizing: 'border-box',
      }}
    >
      <ProductWaitingBox/>
    </div>
  );
};

export default Waiting;