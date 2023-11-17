import React, { useState, useEffect } from 'react';
import { Card, Skeleton, Table, Button, Space, Modal, Divider } from 'antd';
import { DeleteOutlined, ExclamationCircleOutlined } from '@ant-design/icons';
import logo from '../assets/Images/logo.png';

const { confirm } = Modal;

const ImprestBalance = () => {
    const [imprestData, setImprestData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate API call or data fetching for imprest balance data
        setTimeout(() => {
            setImprestData([
                { type: 'Fuel Request', approvedAmount: 300, disbursedAmount: 250, remarks: 'Approved', status: 'Active' },
                { type: 'Petty Cash', approvedAmount: 500, disbursedAmount: 400, remarks: 'Approved', status: 'Active' },
                { type: 'Travel Request', approvedAmount: 1000, disbursedAmount: 800, remarks: 'Approved', status: 'Active' },
                { type: 'Staff Claims', approvedAmount: 1200, disbursedAmount: 1000, remarks: 'Approved', status: 'Active' },
                // Add more imprest data here
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
                const updatedData = [...imprestData];
                updatedData.splice(index, 1);
                setImprestData(updatedData);
            },
            onCancel() {
                console.log('Cancel');
            },
        });
    };

    const columns = [
        {
            title: 'Imprest Type',
            dataIndex: 'type',
            key: 'type',
        },
        {
            title: 'Approved Amount',
            dataIndex: 'approvedAmount',
            key: 'approvedAmount',
        },
        {
            title: 'Disbursed Amount',
            dataIndex: 'disbursedAmount',
            key: 'disbursedAmount',
        },
        {
            title: 'Remarks',
            dataIndex: 'remarks',
            key: 'remarks',
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
        },
        {
            title: 'Action',
            key: 'action',
            render: (_, record, index) => (
                <Space size="middle">
                    <Button
                        type="danger"
                        style={{ backgroundColor: '#d0323a' }}
                        icon={<DeleteOutlined style={{ color: '#fff' }} />}
                        onClick={() => handleDelete(index)}
                    />
                </Space>
            ),
        },
    ];

    return (
        <Card>
            <div className="card-body">
                <div className="text-center">
                    <img width={200} src={logo} className="ps-3 py-3" alt="logo" />
                    <h4 className="text-primary">Imprest Balance Overview</h4>
                </div>
                <Divider />
                <div className="table-responsive">
                    {loading ? (
                        <Skeleton active paragraph={{ rows: 5 }} />
                    ) : (
                        <>
                            <Table dataSource={imprestData} columns={columns} />
                        </>
                    )}
                </div>
            </div>
        </Card>
    );
};

export default ImprestBalance;
