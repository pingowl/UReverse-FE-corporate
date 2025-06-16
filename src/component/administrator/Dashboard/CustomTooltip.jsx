import React from 'react';

const CustomTooltip = ({ active, payload, label, customName }) => {
  if (active && payload && payload.length) {
    const total = payload.reduce((sum, entry) => sum + entry.value, 0);
    const current = payload[0];
    const percent = total ? ((current.value / total) * 100).toFixed(1) : 0;

    return (
      <div style={{
        backgroundColor: 'rgba(50, 50, 50, 0.8)',
        color: 'white',
        padding: '8px 12px',
        borderRadius: 8,
        fontSize: 14,
        boxShadow: '0 2px 8px rgba(0,0,0,0.3)'
      }}>
        <div><strong>{customName || current.name}</strong></div>
        <div>{current.value}건 ({percent}%)</div>
      </div>
    );
  }
  return null;
};

export default CustomTooltip;
