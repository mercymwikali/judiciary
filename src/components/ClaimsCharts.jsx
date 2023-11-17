import React from 'react';
import { PieChart, Pie, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Cell } from 'recharts';

const ClaimsCharts = () => {
  // Sample data for disbursed amounts
  const disbursedData = [
    { category: 'Staff Claims', disbursedAmount: 300 },
    { category: 'Petty Cash', disbursedAmount: 500 },
    { category: 'Fuel Request', disbursedAmount: 200 },
    // Add more categories and amounts as needed
  ];

  // Color codes
  const colors = ['#D6B300', '#174734', '#7b1113', /* Add more colors as needed */];

  return (
    <ResponsiveContainer width="100%" height={400}>
      <PieChart>
        <Pie
          dataKey="disbursedAmount"
          nameKey={"category"} // Use 'category' field as the dataKey
          data={disbursedData}
          cx="50%"
          cy="50%"
          innerRadius={60}
          outerRadius={100}
          fill="#8884d8"
          label
        >
          {disbursedData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default ClaimsCharts;
