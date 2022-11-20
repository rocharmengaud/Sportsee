import React from 'react';

export const HealthStat = (props) => {
  return (
    <div className="stats-container">
      <div className="stats-icon">{props.icon}</div>
      <div className="stats-info">
        <div className="stats-value">{props.value}</div>
        <div className="stats-label">{props.label}</div>
      </div>
    </div>
  );
};
