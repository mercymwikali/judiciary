import { Button, Card, DatePicker, Modal, Upload, message, Input } from 'antd';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { PlusOutlined, InboxOutlined } from '@ant-design/icons'
import logo from '../assets/Images/logo.png';
import hosp_Svg from '../assets/Images/hosp_Svg.svg';

import { toast } from "react-toastify";

function MedicalForm() {
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
                    < h4 className='pt-1 text-primary'>Medical Claims List</h4>
                </div>
                <hr></hr>
                <div className="d-grid my-3 col-md-8 col-lg-6 d-md-block">
                    <button type="button" className="btn  btn-primary " onClick={showModal} data-bs-toggle="button" autocomplete="off" aria-pressed="true"><PlusOutlined style={{ color: '#fff', paddingRight: "2px" }} />New Medical Claim Request</button>
                </div>
                <div className="table-responsive">
                    <table className="table table-hover table-bordered dt-responsive nowrap">
                        <thead>
                            <tr>
                                <th className='small text-primary text-center bg-secondary' scope="col">Claim No</th>
                                <th className='small text-primary text-center bg-secondary' scope="col">Membership No</th>
                                <th className='small text-primary text-center bg-secondary' scope="col">Claim Date</th>
                                <th className='small text-primary text-center bg-secondary' scope="col">Patient Name</th>

                                <th className='small text-primary text-center bg-secondary' scope="col">Employee No</th>
                                <th className='small text-primary text-center bg-secondary' scope="col">Employee Name</th>
                                <th className='small text-primary text-center bg-secondary' scope="col">Date Reported</th>
                                <th className='small text-primary text-center bg-secondary' scope="col">Patient Name</th>
                                <th className='small text-primary text-center bg-secondary' scope="col">Claim Type</th>
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


    const { Dragger } = Upload;

    const props = {
        name: 'file',
        multiple: true,
        action: '',
        onChange(info) {
            const { status } = info.file;
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
                <div className="d-flex justify-content-center align-items-center ">
                    <img width={270} src={logo} className='img-fluid ' alt='logo' />
                    <img src={hosp_Svg} width={80} className='img-fluid ' alt='logo' />


                </div>
                <h4 className="modal-title text-primary pt-2" ><u>New Medical Claim Form</u></h4>

            </div>
            <hr></hr>
            <div className="row g-4">
                <div className="col-12 col-md-4">
                    <p className='fw-normal text-primary  ls-wider text-decoration-underline'>Staff No  :</p>
                    <Input
                        className="form-input"
                        aria-label="Default select example"
                        // value={description}
                        // onChange={(e) => setDescription(e.target.value)}
                        size='large'
                    />
                </div>
                <div className="col-12 col-md-4">
                    <p className='fw-normal text-primary ls-wider text-decoration-underline'>Staff Name :</p>
                    <Input
                        className="form-input"
                        aria-label="Default select example"
                        // value={description}
                        // onChange={(e) => setDescription(e.target.value)}
                        size='large'
                    />
                </div>
                <div className="col-12 col-md-4">
                    <p className='fw-normal text-primary ls-wider text-decoration-underline'>Membership No:</p>
                    <Input
                        className="form-input"
                        aria-label="Default select example"
                        // value={description}
                        // onChange={(e) => setDescription(e.target.value)}
                        size='large'
                    />
                </div>
                <div className="col-12 col-md-4">
                    <p className='fw-normal text-primary ls-wider text-decoration-underline'>Claim No :</p>
                    <Input
                        className="form-input"
                        aria-label="Default select example"
                        // value={description}
                        // onChange={(e) => setDescription(e.target.value)}
                        size='large'
                    />
                </div>
                <div className="col-12 col-md-4">
                    <p className='fw-normal text-primary ls-wider text-decoration-underline'>Claim Type :</p>
                    <select
                        className="form-select"
                        aria-label="Default select example"
                        value={Year}
                        onChange={(e) => setYear(e.target.value)}
                    >
                        <option value="" >
                            Inpatient
                        </option>
                        <option value="" >
                            Outpatient
                        </option>

                    </select>
                </div>
                <div className="col-12 col-md-4">
                    <p className='fw-normal text-primary ls-wider text-decoration-underline'>Claim Date :</p>
                    <Input
                        className="form-input"
                        aria-label="Default select example"
                        // value={description}
                        // onChange={(e) => setDescription(e.target.value)}
                        size='large'
                    />
                </div>
                <div className="col-12 col-md-4">
                    <p className='fw-normal text-primary ls-wider text-decoration-underline'>Patient Name :</p>
                    <Input
                        className="form-input"
                        aria-label="Default select example"
                        // value={description}
                        // onChange={(e) => setDescription(e.target.value)}
                        size='large'
                    />
                </div>
                <div className="col-12 col-md-4">
                    <p className='fw-normal text-primary ls-wider text-decoration-underline'>Hospital/Medical Center:</p>
                    <Input
                        className="form-input"
                        aria-label="Default select example"
                        // value={description}
                        // onChange={(e) => setDescription(e.target.value)}
                        size='large'
                    />
                </div>
                <div className="col-12 col-md-4">
                    <p className='fw-normal text-primary ls-wider text-decoration-underline'>Document Reference No:</p>
                    <Input
                        className="form-input"
                        aria-label="Default select example"
                        // value={description}
                        // onChange={(e) => setDescription(e.target.value)}
                        size='large'
                    />
                </div>
                <div className="col-12 col-md-4">
                    <p className='fw-normal text-primary ls-wider text-decoration-underline'>Visit Date(Hospital):</p>
                    <Input
                        className="form-input"
                        aria-label="Default select example"
                        // value={description}
                        // onChange={(e) => setDescription(e.target.value)}
                        size='large'
                    />
                </div>
                <div className="col-12 col-md-4">
                    <p className='fw-normal text-primary ls-wider text-decoration-underline'>Amount Charged :</p>
                    <Input
                        className="form-input"
                        aria-label="Default select example"
                        // value={description}
                        // onChange={(e) => setDescription(e.target.value)}
                        size='large'
                    />
                </div>
                <div className="col-12 col-md-4">
                    <p className='fw-normal text-primary ls-wider text-decoration-underline'>Amount Claimed :</p>
                    <Input
                        className="form-input"
                        aria-label="Default select example"
                        // value={description}
                        // onChange={(e) => setDescription(e.target.value)}
                        size='large'
                    />
                </div>
                <div className="col-12 col-md-4">
                    <p className='fw-normal text-primary ls-wider text-decoration-underline'>Reason for Variance in Amount Claimed:</p>
                    <Input
                        className="form-input"
                        aria-label="Default select example"
                        // value={description}
                        // onChange={(e) => setDescription(e.target.value)}
                        size='large'
                    />
                </div>
            </div>


            <hr></hr>
            {/* <div className="col-12 px-3 pb-4 " style={{ backgroundColor: '#d5d3d3', cursor: 'pointer' }}>

                <p className='h5 fw-bold text-primary ls-wider text-decoration-underline pt-3'>Maintenance Description</p>
                <div className="input-group">
                    <TextArea className='col-12' rows={4} placeholder='Describe the issue ...'>
                        <br></br>
                    </TextArea>
                </div>
            </div> */}
            <p className='h5 fw-bold text-primary ls-wider text-decoration-underline'>Attachments</p>
            <div className="input-group">
                <Dragger {...props} className='col-12'>
                    <p className="ant-upload-drag-icon">
                        <InboxOutlined />
                        <p className="ant-upload-text">Click or drag file to this area to upload</p>
                        <p className="ant-upload-hint">
                            Support for a single or bulk upload.
                        </p>
                    </p>
                </Dragger>
            </div>
            <div className="col-12 px-3 pb-4 mt-3 " style={{ backgroundColor: '#d5d3d3', cursor: 'pointer' }}>

                <p className='h5 fw-bold text-primary ls-wider text-decoration-underline'>Description</p>
                <div className="input-group">
                    <TextArea className='col-12' rows={4}>
                        <br></br>
                    </TextArea>
                </div>
            </div>

            <div className=" d-grid col-12 col-md-4 mx-auto my-3"> {/* Center-align the button */}
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

export default MedicalForm;