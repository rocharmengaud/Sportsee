import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';

export const DailyActivity = (props) => {
  const activityData = props;
  console.log(activityData);
  return (
    <LineChart width={400} height={400} data={activityData}>
      <Line type="monotone" dataKey="calories" stroke="#8884d8" />
      <CartesianGrid stroke="#ccc" />
      <XAxis dataKey="kilogram" />
      <YAxis />
    </LineChart>
  );
};
