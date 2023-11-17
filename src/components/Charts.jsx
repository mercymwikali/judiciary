import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, AreaChart, Area } from 'recharts';

const Charts = () => {
  // Create fake data
  const imprestData = [
    { month: 'Jan', approvedAmount: 300, disbursedAmount: 250 },
    { month: 'Feb', approvedAmount: 500, disbursedAmount: 400 },
    { month: 'Mar', approvedAmount: 1000, disbursedAmount: 800 },
    { month: 'Apr', approvedAmount: 700, disbursedAmount: 600 },
    { month: 'May', approvedAmount: 1200, disbursedAmount: 1000 },
    { month: 'Jun', approvedAmount: 800, disbursedAmount: 700 },
    { month: 'Jul', approvedAmount: 1500, disbursedAmount: 1300 },
    { month: 'Aug', approvedAmount: 900, disbursedAmount: 800 },
    { month: 'Sep', approvedAmount: 600, disbursedAmount: 500 },
    { month: 'Oct', approvedAmount: 1100, disbursedAmount: 900 },
    { month: 'Nov', approvedAmount: 1000, disbursedAmount: 850 },
    { month: 'Dec', approvedAmount: 1300, disbursedAmount: 1100 },
  ];
  

  return (
    <ResponsiveContainer width="100%" height={400}>
      <AreaChart data={imprestData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Area type="monotone" dataKey="approvedAmount" stackId="1" stroke="#D6B300" fill="#174734" />
        <Area type="monotone" dataKey="disbursedAmount" stackId="1" stroke="#174734" fill="#D6B300" />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default Charts;
