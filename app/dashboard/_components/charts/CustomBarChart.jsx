"use client"

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const CustomBarChart = ({ barData }) => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart
        data={barData}
      >
        <CartesianGrid stroke="none" />
        <XAxis tick={{ fontSize: 10, fill: "#777" }} stroke="none"/>
        <YAxis tick={{ fontSize: 10, fill: "#777" }} stroke="none" />

        <Tooltip />
        <Legend />
        <Bar dataKey="pv" stackId="a" fill="#8884d8" />
        <Bar dataKey="uv" stackId="a" radius={[10, 10, 0, 0]} fill="#82ca9d" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default CustomBarChart;