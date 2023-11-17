import React from 'react';
import { PieChart, Pie, Tooltip, Legend, ResponsiveContainer, Cell } from 'recharts';

const AccruedLeaveChart = () => {
  // Sample data for leave days
  const leaveData = [
    { leaveType: 'Annual Leave', appliedDays: 5, status: 'Approved' },
    { leaveType: 'Study Leave', appliedDays: 3, status: 'Pending' },
    { leaveType: 'Sick Leave', appliedDays: 2, status: 'Approved' },
    { leaveType: 'Maternity Leave', appliedDays: 90, status: 'Pending' },
    { leaveType: 'Paternity Leave', appliedDays: 7, status: 'Approved' },
    { leaveType: 'Vacation Leave', appliedDays: 10, status: 'Pending' },
    { leaveType: 'Unpaid Leave', appliedDays: 15, status: 'Approved' },
  ];

  // Calculate total applied days for each leave type
  const accruedLeaveData = leaveData.reduce((acc, { leaveType, appliedDays }) => {
    acc[leaveType] = (acc[leaveType] || 0) + appliedDays;
    return acc;
  }, {});

  // Convert accrued leave data to an array
  const accruedLeaveArray = Object.entries(accruedLeaveData).map(([leaveType, appliedDays]) => ({
    leaveType,
    appliedDays,
  }));

  // Sort the array by applied days in descending order
  accruedLeaveArray.sort((a, b) => b.appliedDays - a.appliedDays);

  // Color codes for different leave types
  const colors = ['#82ca9d', '#ffc658', /* Add more colors as needed */];

  return (
    <ResponsiveContainer width="100%" height={400}>
      <PieChart>
        <Pie
          dataKey="appliedDays"
          nameKey="leaveType"
          data={accruedLeaveArray}
          cx="50%"
          cy="50%"
          innerRadius={60}
          outerRadius={100}
          fill="#8884d8"
          label
        >
          {accruedLeaveArray.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default AccruedLeaveChart;
