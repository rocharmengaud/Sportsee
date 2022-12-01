import React from 'react';
import PropTypes from 'prop-types';
import { ResponsiveContainer, LineChart, XAxis, YAxis, Line, Tooltip } from 'recharts';

const CustomTooltip = ({ payload, active }) => {
  if (active) {
    return (
      <div className="tooltip">
        <p>{`${payload[0].value} min`}</p>
      </div>
    );
  }
  return null;
};

export const LineStats = (props) => {
  console.log(props);
  const days = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];

  const data = props.sessions.map((session, index) => ({
    day: days[index],
    sessionLength: session.sessionLength,
  }));

  return (
    <ResponsiveContainer width={258} height={263} margin={{ top: 0, right: 0, bottom: 0, left: 0 }}>
      <LineChart data={data} style={{ background: 'red', borderRadius: '10px' }} margin={{ top: 0, right: 0, bottom: 10, left: 0 }}>
        <text x={120} y={30} fill="black" textAnchor="middle" dominantBaseline="central">
          <tspan fontSize="16" fontWeight={800}>
            Durée moyenne des sessions
          </tspan>
        </text>
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
        <Tooltip
          wrapperStyle={{
            background: '#FFF',
            color: '#000',
            width: '55px',
            height: '20px',
            outline: 'none',
          }}
          labelStyle={{ display: 'none', border: 'none' }}
          content={<CustomTooltip />}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

LineStats.propTypes = {
  sessions: PropTypes.arrayOf(
    PropTypes.shape({
      day: PropTypes.number.isRequired,
      sessionLength: PropTypes.number.isRequired,
    })
  ),
};
