import React from 'react';
import LandingBox from '../component/common/Landing/LandingBox';

const Landing = () => {

  return (
    <div
      style={{
        display: "flex", 
        height: "100vh",          
        backgroundColor: "white"
      }}
    >
      <LandingBox/>
    </div>
  );
};

export default Landing;
