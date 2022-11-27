import React from 'react';
import { ResponsiveContainer, BarChart, CartesianGrid, XAxis, YAxis, Legend, Bar } from 'recharts';

import '../styles/barStats.css';

export const BarStats = (props) => {
  const data = props.sessions.map((session, index) => ({
    id: index + 1,
    kilogram: session.kilogram,
    calories: session.calories,
    // ...session,
  }));

  return (
    <div className="barstats-container">
      <ResponsiveContainer width={835} height={320}>
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
          <text x={100} y={20} className="barchart-title" fill="black" textAnchor="middle" dominantBaseline="central">
            <tspan fontSize="14">Activité quotidienne</tspan>
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
          <Bar dataKey="kilogram" fill="#282D30" borderRadius="20" barSize={10} radius={[10, 10, 0, 0]} name="Poids (kg)" />
          <Bar dataKey="calories" fill="#E60000" barSize={10} radius={[10, 10, 0, 0]} name="Calories brûlées (kCal)" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

// CustomTooltip.propTypes = {
//   sessions: PropTypes.object,
// }

// Utilisation des propTypes
// DailyActivity.propTypes = {
//   name: PropTypes.string,
// };
