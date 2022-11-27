import React from 'react';
import { ResponsiveContainer, LineChart, XAxis, YAxis, Line } from 'recharts';

export const LineStats = (props) => {
  const days = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];

  const data = props.sessions.map((session, index) => ({
    day: days[index],
    sessionLength: session.sessionLength,
  }));

  return (
    <ResponsiveContainer width={258} height={263} margin={{ top: 0, right: 0, bottom: 0, left: 0 }}>
      <LineChart data={data} style={{ background: 'red', borderRadius: '10px' }} margin={{ top: 0, right: 0, bottom: 10, left: 0 }}>
        <Line
          type="natural"
          dataKey="sessionLength"
          dot={false}
          activeDot={{ stroke: 'red', strokeWidth: 2, r: 3 }}
          unit={'min'}
          stroke={'#FFF'}
          strokeWidth={2}
        />
        <YAxis hide padding={{ top: 70, bottom: 20 }} />
        <XAxis dataKey="day" axisLine={false} tickLine={false} padding={{ right: 20, left: 20 }} stroke={'#fff'} interval={'preserveStartEnd'} />
      </LineChart>
    </ResponsiveContainer>
  );
};
