import React from 'react';
import { BarChart, CartesianGrid, XAxis, YAxis, Bar, Legend, Tooltip } from 'recharts';

export const DailyActivity = (props) => {
  return (
    <BarChart width={730} height={250} data={props.sessions}>
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
