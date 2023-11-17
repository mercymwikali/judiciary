import React, { useState, useEffect } from 'react';
import { Card, Skeleton, Button, Modal, Checkbox } from 'antd';
import { PlusOutlined, DeleteOutlined, ExclamationCircleOutlined } from '@ant-design/icons';
import logo from '../assets/Images/logo.png';
import { toast } from 'react-toastify';

const { confirm } = Modal;

function MyApprovalsList() {
  const [approvalsData, setApprovalsData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loadingData, setLoadingData] = useState(true);

  const showModal = () => {
    setIsModalOpen(true);
  };

  useEffect(() => {
    // Simulate API call or data fetching for approvals data
    setTimeout(() => {
      setApprovalsData([
        { type: 'Staff Training Certification Payment', date: '2023-11-01', status: 'Approved' },
        { type: 'Approved Leave', date: '2023-12-05', status: 'Approved' },
        { type: 'Expenses Requisition', date: '2024-01-15', status: 'Pending' },
        // Add more fake approvals data here
      ]);
      setLoadingData(false);
    }, 3000);
  }, []);

  const showDeleteConfirmation = (index) => {
    Modal.confirm({
      title: 'Are you sure you want to delete this item?',
      icon: <ExclamationCircleOutlined />,
      okText: 'Yes',
      okType: 'danger',
      cancelText: 'No',
      onOk() {
        const updatedData = [...approvalsData];
        updatedData.splice(index, 1);
        setApprovalsData(updatedData);
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
          <img width={200} src={logo} className="ps-3 py-2" alt="logo" />
          <h4 className="pt-1 text-primary">My Approvals List</h4>
        </div>
        <hr />
        <div className="d-grid my-3 col-md-8 col-lg-6 d-md-block">
          <button
            type="button"
            className="btn btn-primary"
            onClick={showModal}
            data-bs-toggle="button"
            autoComplete="off"
            aria-pressed="true"
          >
            <PlusOutlined style={{ color: '#fff', paddingRight: '2px' }} />New Approval Request
          </button>
        </div>
        <div className="table-responsive-lg">
          {loadingData ? (
            <Skeleton active paragraph={{ rows: 5 }} />
          ) : (
            <table className="table table-hover table-bordered dt-responsive nowrap">
              <thead>
                <tr>
                  <th className="small text-primary text-center bg-secondary" scope="col">
                    Action
                  </th>
                  <th className="small text-primary text-center bg-secondary" scope="col">
                    No
                  </th>
                  <th className="small text-primary text-center bg-secondary" scope="col">
                    Type
                  </th>
                  <th className="small text-primary text-center bg-secondary" scope="col">
                    Date
                  </th>
                  <th className="small text-primary text-center bg-secondary" scope="col">
                    Status
                  </th>
                  <th className="small text-primary text-center bg-secondary" scope="col">
                    Delete
                  </th>
                </tr>
              </thead>
              <tbody>
                {approvalsData.length > 0 ? (
                  approvalsData.map((approval, index) => (
                    <tr key={index}>
                      <td>
                        <Checkbox />
                      </td>
                      <td>{index + 1}</td>
                      <td>{approval.type}</td>
                      <td>{approval.date}</td>
                      <td>{approval.status}</td>
                      <td>
                        <Button
                          type="danger"
                          style={{ backgroundColor: '#d0323a' }}
                          icon={<DeleteOutlined style={{ color: '#fff' }} />}
                          onClick={() => showDeleteConfirmation(index)}
                        />
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="5" className="text-danger">
                      No Records Found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          )}
        </div>
      </div>
      {/* You can replace the following modal with your own implementation */}
      <Modal
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        style={{
          top: 20,
        }}
        width="75%"
        class="modal-dialog modal-fullscreen-sm-down modal-dialog-scrollable"
        footer={[
          <Button key="back" onClick={() => setIsModalOpen(false)} size="large">
            Exit
          </Button>,
          <Button
            key="text"
            type="primary"
            className="btn-primary"
            onClick={() => setIsModalOpen(false)}
            size="large"
          >
            Save Changes
          </Button>,
        ]}
      >
        {/* Your modal content goes here */}
      </Modal>
    </Card>
  );
}

export default MyApprovalsList;
