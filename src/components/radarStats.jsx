import React from 'react';
import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, Radar } from 'recharts';

export const RadarStats = (props) => {
  return (
    <div className="radarchart">
      <ResponsiveContainer width={258} height={263} margin={{ top: 0, right: 0, bottom: 0, left: 0 }}>
        <RadarChart
          style={{ background: 'black', borderRadius: '10px' }}
          margin={{ top: 0, right: 0, bottom: 10, left: 0 }}
          outerRadius={75}
          data={props.data}
        >
          <PolarGrid />
          <PolarAngleAxis
            dataKey="kind"
            orient={30}
            style={{ color: '#fff' }}
            stroke={'#fff'}
            tickLine={false}
            radius={10}
            fontSize={12}
            strokeWidth={1}
          />
          <Radar dataKey="value" stroke="red" fill="red" fillOpacity={0.6} />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};
