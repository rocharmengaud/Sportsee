import React from 'react';
import { ResponsiveContainer, RadialBarChart, RadialBar } from 'recharts';

import '../styles/radialStats.css';

export const RadialStats = (props) => {
  console.log(props);
  // const data = [{ score: props.score, fill: '#E60000' }];
  const data = [
    {
      name: '18-24',
      uv: 0.12,
      pv: 2400,
      fill: '#E60000',
    },
  ];
  return (
    <div className="radialchart">
      <h3 className="radialchart__title">Score</h3>
      <div className="radialchart__bloc-score">
        <p className="radialchart__bloc-score__score">{props.score * 100}% </p>
        <span className="radialchart__bloc-score__text">de votre objectif</span>
      </div>
      <ResponsiveContainer width={258} height={263} margin={{ top: 0, right: 0, bottom: 0, left: 0 }}>
        <RadialBarChart
          cx="50%"
          cy="50%"
          innerRadius="90%"
          outerRadius="80%"
          barSize={10}
          data={data}
          style={{ background: 'transparent' }}
          startAngle={90}
          endAngle={90 + props.score * 360}
        >
          <RadialBar minAngle={0} background clockWise dataKey="uv" cornerRadius={40} />
        </RadialBarChart>
      </ResponsiveContainer>
    </div>
  );
};
