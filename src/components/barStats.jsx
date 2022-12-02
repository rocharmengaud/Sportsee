import React from 'react';
import PropTypes from 'prop-types';
import { ResponsiveContainer, BarChart, CartesianGrid, XAxis, YAxis, Legend, Bar, Tooltip } from 'recharts';

import '../styles/barStats.css';

/**
 * If the tooltip is active and there is data to display, then display the data.
 * @prop {Boolean} active if the component is active or not (mouse over)
 * @prop {ArrayOfObject} payload Properties of each chart Bar
 */

const CustomTooltip = ({ active, payload }) => {
  // console.log(active, payload);
  if (active && payload) {
    return (
      <div className="tooltip">
        <p className="label">{`${payload[0].value}kg`}</p>
        <p className="label">{`${payload[1].value}Kcal`}</p>
      </div>
    );
  }
  return null;
};

/**
 * Function that displays the the bar styled chart from ReChart
 *
 * @prop {Object} props - object containing sessions data
 *
 * @return  {React.ReactElement} A React component.
 */
export const BarStats = (props) => {
  console.log(props);
  const data = props.sessions.map((session, index) => ({
    id: index + 1,
    kilogram: session.kilogram,
    calories: session.calories,
    // ...session,
  }));

  return (
    <div className="barstats-container">
      <ResponsiveContainer width="100%" height={320}>
        <BarChart
          width={60}
          height={300}
          data={data}
          margin={{
            top: 0,
            right: 0,
            left: 0,
            bottom: 0,
          }}
          barGap={6}
        >
          <text x={100} y={20} fill="black" textAnchor="middle" dominantBaseline="central">
            <tspan fontSize="16" fontWeight={800}>
              Activité quotidienne
            </tspan>
          </text>
          <CartesianGrid strokeDasharray="3" vertical={false} />
          <XAxis dataKey="id" domain={['dataMin + 1', 'dataMax + 1']} tickLine={false} dy={10} tickCount="7" />
          <YAxis orientation="right" interval={'preserveStartEnd'} axisLine={false} allowDecimals={false} dataKey="calories" />
          <Legend
            height={70}
            verticalAlign="top"
            align="right"
            iconType={'circle'}
            wrapperStyle={{ top: 0, right: 20 }}
            formatter={(value, entry, index) => <span className="text-color-class">{value}</span>}
          />
          <Tooltip
            wrapperStyle={{
              color: '#FFF',
              background: 'red',
              outline: 'none',
              width: '60px',
              height: '80px',
            }}
            content={<CustomTooltip />}
          />
          <Bar dataKey="kilogram" fill="#282D30" borderRadius="20" barSize={10} radius={[10, 10, 0, 0]} name="Poids (kg)" />
          <Bar dataKey="calories" fill="#E60000" barSize={10} radius={[10, 10, 0, 0]} name="Calories brûlées (kCal)" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

CustomTooltip.propTypes = {
  active: PropTypes.bool,
  payload: PropTypes.arrayOf(PropTypes.any),
};

// Utilisation des propTypes
BarStats.propTypes = {
  sessions: PropTypes.arrayOf(
    PropTypes.shape({
      day: PropTypes.string.isRequired,
      kilogram: PropTypes.number.isRequired,
      calories: PropTypes.number.isRequired,
    })
  ),
};
