import React from 'react';
import PropTypes from 'prop-types';
import { ResponsiveContainer, RadialBarChart, RadialBar } from 'recharts';

import '../styles/radialStats.css';

/**
 * Function that displays the the line styled chart from ReChart
 *
 * @prop {Object} props - Object containing a single key:value
 *
 * @return  {React.ReactElement} A React component.
 */

export const RadialStats = (props) => {
  console.log(props);
  const data = [
    {
      score: props.score,
      todayScore: props.todayScore,
      fill: '#E60000',
    },
  ];

  return (
    <div className="radialchart">
      <h3 className="radialchart-title">Score</h3>
      <div className="radialchart-bloc-score">
        <p className="radialchart-score">{props.score * 100}% </p>
        <span className="radialchart-text">de votre objectif</span>
      </div>
      <ResponsiveContainer width={258} height={263} margin={{ top: 0, right: 0, bottom: 0, left: 0 }}>
        <RadialBarChart
          cx="50%"
          cy="50%"
          innerRadius="70%"
          outerRadius="100%"
          barSize={10}
          data={data}
          style={{ background: 'transparent' }}
          startAngle={90}
          endAngle={90 + props.score * 360}
        >
          <RadialBar minAngle={0} background clockWise dataKey="score" cornerRadius={40} />
        </RadialBarChart>
      </ResponsiveContainer>
    </div>
  );
};

RadialStats.propTypes = {
  score: PropTypes.oneOfType([PropTypes.number.isRequired]),
};
