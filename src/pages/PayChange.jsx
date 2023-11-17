import { Card, Skeleton, Checkbox, Button, Space, Modal } from 'antd';
import React, { useState, useEffect } from 'react';
import { DeleteOutlined, ExclamationCircleOutlined } from '@ant-design/icons';
import logo from '../assets/Images/logo.png';

const { confirm } = Modal;

function PayChange() {
    const [approvedPayChangeData, setApprovedPayChangeData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate API call or data fetching for approved pay change requests
        setTimeout(() => {
            setApprovedPayChangeData([
                { requestType: 'Salary Increase', payrollPeriod: '2023-11', amount: 500, comments: 'Approved for performance reasons' },
                { requestType: 'Bonus Payment', payrollPeriod: '2023-12', amount: 1000, comments: 'Year-end bonus granted' },
                // Add more fake data here
                { requestType: 'Travel Allowance', payrollPeriod: '2023-12', amount: 300, comments: 'Approved for business travel' },
                { requestType: 'Overtime Pay', payrollPeriod: '2024-01', amount: 200, comments: 'Approved for extra hours worked' },
                { requestType: 'Commission', payrollPeriod: '2024-02', amount: 700, comments: 'Approved for successful sales' },
                { requestType: 'Performance Bonus', payrollPeriod: '2024-02', amount: 1200, comments: 'Outstanding performance bonus' },
                { requestType: 'Promotion Bonus', payrollPeriod: '2024-03', amount: 1500, comments: 'Bonus for promotion' },
                { requestType: 'Holiday Allowance', payrollPeriod: '2024-03', amount: 250, comments: 'Approved for holiday season' },
                { requestType: 'Education Assistance', payrollPeriod: '2024-04', amount: 600, comments: 'Approved for educational purposes' },
                { requestType: 'Health Insurance Benefit', payrollPeriod: '2024-04', amount: 350, comments: 'Approved health insurance benefit' },
            ]);
            setLoading(false);
        }, 2000); // Simulating a 2-second delay for data fetching
    }, []);

    const handleDelete = (index) => {
        confirm({
            title: 'Are you sure you want to delete this item?',
            icon: <ExclamationCircleOutlined />,
            okText: 'Yes',
            okType: 'danger',
            cancelText: 'No',
            onOk() {
                const updatedData = [...approvedPayChangeData];
                updatedData.splice(index, 1);
                setApprovedPayChangeData(updatedData);
            },
            onCancel() {
                console.log('Cancel');
            },
        });
    };

    return (
        <Card>
            <div className="card-body">
                <div className="text-center">
                    <img width={200} src={logo} className='ps-3 py-3' alt='logo' />
                    <h4 className="text-primary">Approved Pay Change Requests</h4>
                </div>
                <hr></hr>
                <div className="table-responsive">
                    {loading ? (
                        // Skeleton Loading Screen
                        <Skeleton active paragraph={{ rows: 5 }} />
                    ) : (
                        <table className="table table-hover table-bordered dt-responsive nowrap">
                            <thead>
                                <tr>
                                    <th className='small text-primary text-center bg-secondary' scope="col">Action</th>
                                    <th className='small text-primary text-center bg-secondary' scope="col">No</th>
                                    <th className='small text-primary text-center bg-secondary' scope="col">Request Type</th>
                                    <th className='small text-primary text-center bg-secondary' scope="col">Payroll Period</th>
                                    <th className='small text-primary text-center bg-secondary' scope="col">Amount</th>
                                    <th className='small text-primary text-center bg-secondary' scope="col">Comments</th>
                                    <th className='small text-primary text-center bg-secondary' scope="col">Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {approvedPayChangeData.length > 0 ? (
                                    approvedPayChangeData.map((payChange, index) => (
                                        <tr key={index}>
                                            <td><Checkbox /></td>
                                            <td>{index + 1}</td>
                                            <td>{payChange.requestType}</td>
                                            <td>{payChange.payrollPeriod}</td>
                                            <td>{payChange.amount}</td>
                                            <td>{payChange.comments}</td>
                                            <td>
                                                    <Button
                                                        type="danger"
                                                        style={{ backgroundColor: '#d0323a' }}
                                                        icon={<DeleteOutlined style={{ color: '#fff' }} />}
                                                        onClick={() => handleDelete(index)}
                                                    />
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="8" className='text-danger'>No Records Found</td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    )}
                </div>
            </div>
        </Card>
    );
}

export default PayChange;
