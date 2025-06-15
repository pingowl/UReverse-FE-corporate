import React from 'react';
import { useParams } from 'react-router-dom';
import PickupDetailBox from '../../component/administrator/ProductDetail/PickupDetailBox';


const PickupDetail = () => {
  const {id} =useParams(); 
  return (
    <div
      style={{
        padding: 24,
        boxSizing: 'border-box',
      }}
    >
        <PickupDetailBox productId={id} />
    </div>
  );
};

export default PickupDetail;