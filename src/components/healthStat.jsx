import React from 'react';
import PropTypes from 'prop-types';

import '../styles/healthStat.css';

/**
 * Function that displays 1 icon and two statistics
 *
 * @prop {object} props - object containing 2 values and 1 icon
 *
 * @return  {React.ReactElement} A React component.
 */

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

HealthStat.propTypes = {
  icon: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};
