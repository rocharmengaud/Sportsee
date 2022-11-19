import React from 'react';

export default function HealthStats(props) {
  return (
    <div className="stats-container">
      <div className="stats-icon">
        <img className="icon" src={props.imgSrc} alt=""></img>
        <div className="stats-info">
          <div className="stats-value"></div>
          <div className="stats-name"></div>
        </div>
      </div>
    </div>
  );
}
