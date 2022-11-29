import React from 'react';
// import PropTypes from 'prop-types';

import '../styles/healthStat.css';

export const HealthStat = (props) => {
  console.log(props);
  return (
    <div className="healthstats">
      <div className="stats-icon">{props.icon}</div>
      <div className="stats-info">
        <div className="stats-value">{props.value}</div>
        <div className="stats-label">{props.label}</div>
      </div>
    </div>
  );
};

// HealthStat.propTypes = {};
