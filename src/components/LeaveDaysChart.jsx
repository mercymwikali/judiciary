import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const LeaveDaysChart = () => {
  // Sample data for leave days
  const leaveData = [
    { leaveType: 'Annual Leave', appliedDays: 5, status: 'Approved' },
    { leaveType: 'Study Leave', appliedDays: 3, status: 'Pending' },
    { leaveType: 'Sick Leave', appliedDays: 2, status: 'Approved' },
    { leaveType: 'Maternity Leave', appliedDays: 90, status: 'Pending' },
    { leaveType: 'Paternity Leave', appliedDays: 7, status: 'Approved' },
    { leaveType: 'Vacation Leave', appliedDays: 10, status: 'Pending' },
    { leaveType: 'Unpaid Leave', appliedDays: 15, status: 'Approved' },
    // Add more leave data as needed
    { leaveType: 'Compensatory Leave', appliedDays: 8, status: 'Approved' },
    { leaveType: 'Special Leave', appliedDays: 4, status: 'Pending' },
    { leaveType: 'Public Holiday', appliedDays: 1, status: 'Approved' },
    // Add more leave data as needed
  ];

  // Color codes for different leave statuses
  const colors = {
    'Approved': '#82ca9d',
    'Pending': '#ffc658',
    // Add more statuses and colors as needed
  };

  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart data={leaveData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="leaveType" />
        <YAxis />
        <Tooltip />
        <Legend />
        {Object.keys(colors).map((status, index) => (
          <Bar
            key={status}
            dataKey={`appliedDays`}
            name={status}
            fill={colors[status]}
            stackId="status"
          />
        ))}
      </BarChart>
    </ResponsiveContainer>
  );
};

export default LeaveDaysChart;
