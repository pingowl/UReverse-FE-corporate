import React from 'react';
import SummaryBox from '../../component/administrator/Dashboard/SummaryBox';
import ChartBox from '../../component/administrator/Dashboard/ChartBox';

const Dashboard = () => {
  return (
    <div
      style={{
        padding: 24,
        boxSizing: 'border-box',
      }}
    >
      <SummaryBox />
      <ChartBox />
    </div>
  );
};

export default Dashboard;