import { Button, Divider } from 'antd';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {PlusOutlined} from '@ant-design/icons'

function TravelAdvanceLiq(params) {
    const [approvedLeaveData, setApprovedLeaveData] = useState([]);
    const [selectedLeaveType, setSelectedLeaveType] = useState('');
    const [selectedAppliedDays, setSelectedAppliedDays] = useState('');
    const leaveTypes = ["Adoption", "Annual Leave", "Partenity", "Personal Days", "Sick Off", "Sick Leave", "Study Leave", "Time Off In Lieu"];

    return (
        <div className="card">
            <div className="card-body">
            < h4 className='pt-3 text-primary'>Travel Advance Liquidation List</h4>
                <Divider/>
                <Link type='button' to='/new doc' className='text-decoration-none mb-2 btn btn-primary'><PlusOutlined style={{color:'#fff', hover:'#000'}}/> New Liquidation Request</Link>
                <div className="table-responsive">
                    <table className="table table-hover table-bordered dt-responsive nowrap">
                        <thead>
                            <tr>
                                <th className='small text-primary text-center bg-secondary' scope="col">Action</th>
                                <th className='small text-primary text-center bg-secondary' scope="col">No</th>
                                <th className='small text-primary text-center bg-secondary' scope="col">Liquidation Date</th>
                                <th className='small text-primary text-center bg-secondary' scope="col">Travel Advance Doc No</th>
                                <th className='small text-primary text-center bg-secondary' scope="col">Donor</th>
                                <th className='small text-primary text-center bg-secondary' scope="col">Project</th>
                                <th className='small text-primary text-center bg-secondary' scope="col">Amount</th>
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
        </div>
    );
}

export default TravelAdvanceLiq;