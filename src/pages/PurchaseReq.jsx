import { Button, Card } from 'antd';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { PlusOutlined } from '@ant-design/icons'
import logo from '../assets/Images/logo.png';

function PurchaseReq(params) {
    const [approvedLeaveData, setApprovedLeaveData] = useState([]);
    const [selectedLeaveType, setSelectedLeaveType] = useState('');
    const [selectedAppliedDays, setSelectedAppliedDays] = useState('');
    const leaveTypes = ["Adoption", "Annual Leave", "Partenity", "Personal Days", "Sick Off", "Sick Leave", "Study Leave", "Time Off In Lieu"];

    return (
        <Card>
            <div className="card-body">
                <div className="text-center">
                <img width={200} src={logo} className='ps-3 py-1' alt='logo' />
                    < h4 className='px-3 pt-3 text-primary'>Supervisor Review List</h4>
                </div>
                <hr></hr>
                <Link type='button' to='/new doc' className='text-decoration-none my-3 btn btn-primary'><PlusOutlined style={{ color: '#fff', hover: '#000' }} /> New Purchase Requisition</Link>
                <div className="table-responsive">
                    <table className="table table-hover table-bordered dt-responsive nowrap">
                        <thead>
                            <tr>
                                <th className='small text-primary text-center bg-secondary' scope="col">Action</th>
                                <th className='small text-primary text-center bg-secondary' scope="col">No</th>
                                <th className='small text-primary text-center bg-secondary' scope="col">Order Date</th>
                                <th className='small text-primary text-center bg-secondary' scope="col">Req Type</th>
                                <th className='small text-primary text-center bg-secondary' scope="col">Posting Description</th>
                                <th className='small text-primary text-center bg-secondary' scope="col">RFQ No</th>
                                <th className='small text-primary text-center bg-secondary' scope="col">LPO No</th>
                                <th className='small text-primary text-center bg-secondary' scope="col">PRF</th>
                                <th className='small text-primary text-center bg-secondary' scope="col"> PRF Status</th>
                                <th className='small text-primary text-center bg-secondary' scope="col"> Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {approvedLeaveData.length > 0 ? (
                                approvedLeaveData.map((leave, index) => (
                                    <tr key={index}>
                                        <td> {/* Action button or action related to the row */}</td>
                                        <td>{index + 1}</td>
                                        <td>{leave.leaveType}</td>
                                        {/* Other leave data fields */}
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="9" className='text-danger'>No Records Found</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </Card>
    );
}

export default PurchaseReq;