import React from 'react';
import { BarChart, CartesianGrid, XAxis, YAxis, Bar, Legend, Tooltip } from 'recharts';

export const DailyActivity = (props) => {
  const activityData = props;
  console.log(activityData);
  return (
    <BarChart width={730} height={250} data={activityData}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="day" />
      <YAxis dataKey="calories" />
      <Tooltip />
      <Legend />
      <Bar dataKey="kilogram" fill="#8884d8" />
      <Bar dataKey="calories" fill="#82ca9d" />
    </BarChart>
  );
};
