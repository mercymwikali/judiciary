import { Button, Card, DatePicker, Modal, Upload, message, Input } from 'antd';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { PlusOutlined, InboxOutlined } from '@ant-design/icons'
import logo from '../assets/Images/logo.png';
import { toast } from "react-toastify";

function LeaveReimbursement(params) {
    const [approvedLeaveData, setApprovedLeaveData] = useState([]);
    const [selectedLeaveType, setSelectedLeaveType] = useState('');
    const [selectedAppliedDays, setSelectedAppliedDays] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const leaveTypes = ["Adoption", "Annual Leave", "Partenity", "Personal Days", "Sick Off", "Sick Leave", "Study Leave", "Time Off In Lieu"];

    return (
        <Card>
            <div className="card-body">
                <div className="text-center">
                    <img width={200} src={logo} className='ps-3 py-2' alt='logo' />
                    < h4 className='pt-1 text-primary'>Leave Reimbursement List</h4>
                </div>
                <hr></hr>
                <div className="d-grid my-3 col-md-8 col-lg-6 d-md-block">
                    <button type="button" className="btn  btn-primary " onClick={showModal} data-bs-toggle="button" autocomplete="off" aria-pressed="true"><PlusOutlined style={{ color: '#fff', paddingRight: "2px" }} />New Leave Request</button>
                </div>
                <div className="table-responsive">
                    <table className="table table-hover table-bordered dt-responsive nowrap">
                        <thead>
                            <tr>
                                <th className='small text-primary text-center bg-secondary' scope="col">Action</th>
                                <th className='small text-primary text-center bg-secondary' scope="col">No</th>
                                <th className='small text-primary text-center bg-secondary' scope="col">Leave Type</th>
                                <th className='small text-primary text-center bg-secondary' scope="col">Leave No</th>
                                <th className='small text-primary text-center bg-secondary' scope="col">Applied Days</th>
                                <th className='small text-primary text-center bg-secondary' scope="col">Date</th>
                                <th className='small text-primary text-center bg-secondary' scope="col">Approved Days</th>
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
            <LeaveRequestModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />

        </Card>
    );
}

function LeaveRequestModal({ setIsModalOpen, isModalOpen }) {
    const [Year, setYear] = useState([]);
    const [loading, setLoading] = useState(false);
    const [selectedAppliedDays, setSelectedAppliedDays] = useState('');
    const [selectedReliever, setSelectedReliever] = useState('');

    const handleOk = () => {
        setTimeout(() => {
            setLoading(false);
            setIsModalOpen(false);
        }, 3000);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };
    const { Dragger } = Upload;
    const { TextArea } = Input;

    const props = {
        name: 'file',
        multiple: true,
        action: '',
        onChange(info) {
            const { status } = info.file;
            if (status !== 'uploading') {
                console.log(info.file, info.fileList);
            }
            if (status === 'done') {
                message.success(`${info.file.name} file uploaded successfully.`);
            } else if (status === 'error') {
                message.error(`${info.file.name} file upload failed.`);
            }
        },
        onDrop(e) {
            console.log('Dropped files', e.dataTransfer.files);
        },
    };
    const currentYear = new Date().getFullYear();
    const years = Array.from({ length: 10 }, (_, index) => currentYear + index);

    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];

    const submitApplication = () => {
        // Create an object with the form data
        const formData = {
            appliedDays: selectedAppliedDays,
            reliever: selectedReliever,
            // Add other form fields here
        };

        // Send a POST request to your API endpoint to save the data
        fetch('/api/submit-application', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
            .then((response) => {
                if (response.ok) {
                    // Handle success (e.g., show a success message)
                    console.log('Application submitted successfully');
                    toast.success('Successful Submission!'); // Show the success modal
                } else {
                    // Handle error (e.g., show an error message)
                    console.error('Failed to submit application');
                    toast.error('Submission Failed'); // Show the cancel modal
                }
            })
            .catch((error) => {
                console.error('Error submitting application:', error);
                toast.error('Submission Failed'); // Show the cancel modal
            });
    };


    return (
        <Modal open={isModalOpen} onOk={handleOk} onCancel={handleCancel} style={{
            top: 20,
        }}
            width='75%'
            class="modal-dialog modal-fullscreen-sm-down modal-dialog-scrollable"
            footer={[
                <Button key="back" onClick={handleCancel} size='large'>
                    Exit
                </Button>,
                <Button key="text" type="primary" className='btn-primary' loading={loading} onClick={handleOk} size='large'>
                Save Changes
            </Button>,
            ]}>
            <div className="text-center">
                <img width={300} src={logo} className='ps-4 py-3' alt='logo' />
                <h4 className="modal-title text-primary py-2" ><u>Leave Reimbursement Application</u></h4>
            </div>
            <hr></hr>
            <div className="row">
                <div className="col-12 col-md-6">
                    <div className="">
                        <p className='h6 fw-bold text-primary ls-wider text-decoration-underline py-1'>Leave No  :</p>
                        <select
                            className="form-select"
                            aria-label="Default select example"
                            value={Year}
                            onChange={(e) => setYear(e.target.value)}
                        >
                            <option value="" disabled>
                                - - Select Leave Document No - -
                            </option>
                            {years.map((year, index) => (
                                <option key={index} value={year}>
                                    {year}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="pt-12">
                        <p className='h6 fw-bold text-primary pt-3 ls-wider text-decoration-underline py-1'>Select Applied Days :</p>
                        <select
                            className="form-select"
                            aria-label="Default select example"
                            value={Year}
                            onChange={(e) => setYear(e.target.value)}
                        >
                            <option value="" disabled>
                                - - Select Applied Days - -
                            </option>
                            {years.map((year, index) => (
                                <option key={index} value={year}>
                                    {year}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="pt-2">
                        <p className='h6 fw-bold text-primary pt-3 ls-wider text-decoration-underline py-1'> Select Days to Reimburse :</p>
                        <select
                            className="form-select"
                            aria-label="Default select example"
                            value={Year}
                            onChange={(e) => setYear(e.target.value)}
                        >
                            <option value="" disabled>
                                - -  Select Days to Reimburse - -
                            </option>
                            {years.map((year, index) => (
                                <option key={index} value={year}>
                                    {year}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className="col-12 col-md-6">
                    <p className='h6 fw-bold text-primary ls-wider  text-decoration-underline'>Leave Data</p>
                    <table className="table table-hover   dt-responsive nowrap">
                        <thead>
                            <tr>
                                <th scope="col">No.</th>
                                <th scope="col">Leave Type</th>
                                <th scope="col">Count</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Annual Leave Entitlement</td>
                                <td>0</td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Leave carried forward from previous Year</td>
                                <td>0</td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>Reimbursed Days</td>
                                <td>0</td>
                            </tr>
                            <tr>
                                <th scope="row">4</th>
                                <td>Leave Taken</td>
                                <td>0</td>
                            </tr>
                            <tr>
                                <th scope="row">5</th>
                                <td>Earned Days</td>
                                <td>0</td>
                            </tr>
                            <tr>
                                <th scope="row">6</th>
                                <td>Leave Balance</td>
                                <td>0</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <hr></hr>
            <div className="row py-2 mx-1 " style={{ backgroundColor: '#d5d3d3' }}>
                <p className='h5 fw-bold text-danger ls-wider text-decoration-underline'>Leave Dates</p>
                <div className="col-12 col-md-4 pt-2 pb-3 ">
                    <DatePicker size='large'
                        placeholder='Select Start Date' className='col-12' />
                </div>
                <div className="col-12 col-md-4 pt-2 pb-3 ">
                    <DatePicker size='large' placeholder='Select End Date' className='col-12' />
                </div>
                <div className="col-12 col-md-4 pt-2 pb-3 ">
                    <DatePicker size='large' placeholder='Select Return Date' className='col-12' />
                </div>
            </div>
            <hr className='mt-4'></hr>
            <div className="row">
                <p className='h5 fw-bold text-primary ls-wider text-decoration-underline'>Hand-Over Report</p>
                <div class="input-group">
                    <Dragger {...props} className='col-12'>
                        <p className="ant-upload-drag-icon">
                            <InboxOutlined />
                            <p className="ant-upload-text">Click or drag file to this area to upload</p>
                            <p className="ant-upload-hint">
                                Support for a single or bulk upload.                          </p>
                        </p>
                    </Dragger>

                </div>
                <div className=" mt-3">
                    <p className='h5 fw-bold text-primary ls-wider text-decoration-underline'>Remarks</p>
                    <div className="input-group">
                        <TextArea className='col-12' rows={4}>
                            <br></br>
                        </TextArea>
                    </div>

                </div>
            </div>
            <div className=" d-grid col-12 col-md-4 mx-auto my-3"> {/* Center-align the button */}
                <button
                    type="button"
                    className="btn btn-secondary my-3"
                    onClick={submitApplication}
                >
                    Submit Request
                </button>
            </div>

        </Modal>
    );
};

export default LeaveReimbursement;