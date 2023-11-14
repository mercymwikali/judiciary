import { Button, Card, DatePicker, Modal, Upload, message, Input } from 'antd';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { PlusOutlined, InboxOutlined } from '@ant-design/icons'
import logo from '../assets/Images/logo.png';
import { toast } from "react-toastify";

function Service() {
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
                    < h4 className='pt-1 text-primary'>Service/Maintenance Request List</h4>
                </div>
                <hr></hr>
                <div className="d-grid my-3 col-md-8 col-lg-6 d-md-block">
                    <button type="button" className="btn  btn-primary " onClick={showModal} data-bs-toggle="button" autocomplete="off" aria-pressed="true"><PlusOutlined style={{ color: '#fff', paddingRight: "2px" }} />Create New Document</button>
                </div>
                <div className="table-responsive">
                    <table className="table table-hover table-bordered dt-responsive nowrap">
                        <thead>
                            <tr>
                                <th className='small text-primary text-center bg-secondary' scope="col">Action</th>
                                <th className='small text-primary text-center bg-secondary' scope="col">No</th>
                                <th className='small text-primary text-center bg-secondary' scope="col">Type of Maintenance</th>
                                <th className='small text-primary text-center bg-secondary' scope="col">Driver</th>
                                <th className='small text-primary text-center bg-secondary' scope="col">Vehicle</th>
                                <th className='small text-primary text-center bg-secondary' scope="col">Maintenace Description</th>
                                <th className='small text-primary text-center bg-secondary' scope="col">Total Cost</th>
                                <th className='small text-primary text-center bg-secondary' scope="col">Vendor(Dealer)</th>
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
            <ServiceModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
        </Card>
    );
};

function ServiceModal({ setIsModalOpen, isModalOpen }) {
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

    const { TextArea } = Input;


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
                <Button key="back" onClick={handleCancel}>
                    Exit
                </Button>,
                <Button key="submit" type="primary" loading={loading} onClick={handleOk}>
                    Submit Application
                </Button>,
            ]}>
            <div className="text-center">
                <img width={300} src={logo} className='ps-4 ' alt='logo' />
                <h4 className="modal-title text-primary pt-2" ><u>New Maintenance Request</u></h4>
            </div>
            <hr></hr>
            <div className="row g-4">
                <div className="col-12 col-md-3">
                    <p className='fw-normal text-primary  ls-wider text-decoration-underline'>Donor  :</p>
                    <select
                        className="form-select"
                        aria-label="Default select example"
                        value={Year}
                        onChange={(e) => setYear(e.target.value)}
                    >
                        <option value="" disabled>
                            - - Select Donor - -
                        </option>
                        {years.map((year, index) => (
                            <option key={index} value={year}>
                                {year}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="col-12 col-md-3">
                    <p className='fw-normal text-primary ls-wider text-decoration-underline'>Date Required :</p>
                    <select
                        className="form-select"
                        aria-label="Default select example"
                        value={Year}
                        onChange={(e) => setYear(e.target.value)}
                    >
                        <option value="" disabled>
                            - - Select Supervisor - -
                        </option>
                        {months.map((month, index) => (
                            <option key={index} value={month}>
                                {month}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="col-12 col-md-3">
                    <p className='fw-normal text-primary ls-wider text-decoration-underline'>Project :</p>
                    <select
                        className="form-select"
                        aria-label="Default select example"
                        value={Year}
                        onChange={(e) => setYear(e.target.value)}
                    >
                        <option value="" disabled>
                            - - Select Project - -
                        </option>
                        {months.map((month, index) => (
                            <option key={index} value={month}>
                                {month}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="col-12 col-md-3">
                    <p className='fw-normal text-primary ls-wider text-decoration-underline'>Driver :</p>
                    <select
                        className="form-select"
                        aria-label="Default select example"
                        value={Year}
                        onChange={(e) => setYear(e.target.value)}
                    >
                        <option value="" disabled>
                            - - Select Requisition Type - -
                        </option>
                        {months.map((month, index) => (
                            <option key={index} value={month}>
                                {month}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
            <div className="row g-4 mt-3">
                <div className="col-12 col-md-3">
                    <p className='fw-normal text-primary ls-wider text-decoration-underline'>Vehicle :</p>
                    <select
                        className="form-select"
                        aria-label="Default select example"
                        value={Year}
                        onChange={(e) => setYear(e.target.value)}
                    >
                        <option value="" disabled>
                            - - Select Vehicle - -
                        </option>
                        {months.map((month, index) => (
                            <option key={index} value={month}>
                                {month}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="col-12 col-md-3">
                    <p className='fw-normal text-primary ls-wider text-decoration-underline'>Vendor(Dealer):</p>
                    <select
                        className="form-select"
                        aria-label="Default select example"
                        value={Year}
                        onChange={(e) => setYear(e.target.value)}
                    >
                        <option value="" disabled>
                            - - Select Vendor - -
                        </option>
                        {months.map((month, index) => (
                            <option key={index} value={month}>
                                {month}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="col-12 col-md-3">
                    <p className='fw-normal text-primary  ls-wider text-decoration-underline'>Type of Maintenance:</p>
                    <select
                        className="form-select"
                        aria-label="Default select example"
                        value={Year}
                        onChange={(e) => setYear(e.target.value)}
                    >
                        <option value="" disabled>
                            - - Select Responsibility Center - -
                        </option>
                        {years.map((year, index) => (
                            <option key={index} value={year}>
                                {year}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="col-12 col-md-3">
                    <p className='fw-normal  text-primary ls-wider text-decoration-underline'>Responsibilty Center :</p>
                    <select
                        className="form-select"
                        aria-label="Default select example"
                        value={Year}
                        onChange={(e) => setYear(e.target.value)}
                    >
                        <option value="" disabled>
                            - - Select Activity/Beneficiary Name  - -
                        </option>
                        {months.map((month, index) => (
                            <option key={index} value={month}>
                                {month}
                            </option>
                        ))}
                    </select>
                </div >
            </div>
            <div className="row g-4 mt-3">
                
                
                <div className="col-12 col-md-3">
                    <p className='fw-normal text-primary ls-wider text-decoration-underline'>Odometer Reading :</p>
                    <Input></Input>
                </div>
                <div className="col-12 col-md-3">
                    <p className='fw-normal text-primary ls-wider text-decoration-underline'>Last Service Date :</p>
                    <Input></Input>
                </div>
            </div>


            <hr></hr>
            <div className="col-12 px-3 pb-4 " style={{ backgroundColor: '#d5d3d3', cursor: 'pointer' }}>

                <p className='h5 fw-bold text-primary ls-wider text-decoration-underline'>Maintenance Description</p>
                <div className="input-group">
                    <TextArea className='col-12' rows={4} placeholder='Describe the issue ...'>
                        <br></br>
                    </TextArea>
                </div>
            </div>
            <div className="col-12 px-3 pb-4 mt-3" style={{ backgroundColor: '#d5d3d3', cursor: 'pointer' }}>

                <p className='h5 fw-bold text-primary ls-wider text-decoration-underline'>Remarks</p>
                <div className="input-group">
                    <TextArea className='col-12' rows={4}>
                        <br></br>
                    </TextArea>
                </div>
            </div>
            <h5 className='pt-4 text-secondary'>Other Costs</h5>
            <hr></hr>
            <div className="row g-4 mt-3">
                <div className="col-12 col-md-4">
                    <p className='fw-normal text-primary ls-wider text-decoration-underline'>Coolant:</p>
                    <Input placeholder='0.0'></Input>
                </div>
                <div className="col-12 col-md-4">
                    <p className='fw-normal text-primary ls-wider text-decoration-underline'>Battery Water:</p>
                    <Input placeholder='0.0'></Input>
                </div>
                <div className="col-12 col-md-4">
                    <p className='fw-normal text-primary ls-wider text-decoration-underline'>Wheel Alignment:</p>
                    <Input placeholder='0.0'></Input>
                </div>
                
            </div>

            <div className=" d-grid col-12 col-md-6 mx-auto my-3"> {/* Center-align the button */}
                <button
                    type="button"
                    className="btn btn-secondary bt-sm-sm bt-md-sm my-3"
                    onClick={submitApplication}
                >
                    Create Request Document
                </button>
            </div>

        </Modal >
    );
};

export default Service;