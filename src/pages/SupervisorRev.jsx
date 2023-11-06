import { Button, Divider } from 'antd';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {PlusOutlined} from '@ant-design/icons'

function SupervisorRev(params) {
    const [approvedLeaveData, setApprovedLeaveData] = useState([]);
    const [selectedLeaveType, setSelectedLeaveType] = useState('');
    const [selectedAppliedDays, setSelectedAppliedDays] = useState('');
    const leaveTypes = ["Adoption", "Annual Leave", "Partenity", "Personal Days", "Sick Off", "Sick Leave", "Study Leave", "Time Off In Lieu"];

    return (
        <div className="card">
            <div className="card-body">
            < h4 className='px-3 pt-3 text-primary'>Supervisor Review List</h4>
                <Divider/>
                <div className="table-responsive">
                    <table className="table table-hover table-bordered dt-responsive nowrap">
                        <thead>
                            <tr>
                                <th className='small text-primary text-center bg-secondary' scope="col">Appraisal Code</th>
                                <th className='small text-primary text-center bg-secondary' scope="col">Staff Name</th>
                                <th className='small text-primary text-center bg-secondary' scope="col">Supervisor</th>
                                <th className='small text-primary text-center bg-secondary' scope="col">Appraisal Period</th>
                                <th className='small text-primary text-center bg-secondary' scope="col">Status</th>
                                <th className='small text-primary text-center bg-secondary' scope="col">Open To</th>
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
        </div>
    );
}

export default SupervisorRev;