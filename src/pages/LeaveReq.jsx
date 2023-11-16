import React, { useState, useEffect } from 'react';
import { Button, Card, DatePicker, Modal, Upload, message, Input, Skeleton } from 'antd';
import { Link } from 'react-router-dom';
import { PlusOutlined, InboxOutlined } from '@ant-design/icons';
import logo from '../assets/Images/logo.png';
import { toast } from 'react-toastify';

function LeaveReq(params) {
    const [approvedLeaveData, setApprovedLeaveData] = useState([]);
    const [selectedLeaveType, setSelectedLeaveType] = useState('');
    const [selectedAppliedDays, setSelectedAppliedDays] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [loadingData, setLoadingData] = useState(true);

    // Simulated fetch request (comment out this part when integrating with a real API)
    useEffect(() => {
        // Simulated leave data
        const fakeLeaveData = [
            { leaveType: 'Annual Leave', appliedDays: 5, date: '2023-11-01', startDate: '2023-11-01', endDate: '2023-11-05', returnDate: '2023-11-06', reliever: 'John Doe', status: 'Approved' },
            { leaveType: 'Study Leave', appliedDays: 3, date: '2023-11-10', startDate: '2023-11-10', endDate: '2023-11-12', returnDate: '2023-11-13', reliever: 'Jane Doe', status: 'Pending' },
            { leaveType: 'Sick Leave', appliedDays: 2, date: '2023-11-15', startDate: '2023-11-15', endDate: '2023-11-16', returnDate: '2023-11-17', reliever: 'Sam Smith', status: 'Approved' },
            { leaveType: 'Maternity Leave', appliedDays: 90, date: '2023-11-20', startDate: '2023-11-20', endDate: '2024-02-17', returnDate: '2024-02-18', reliever: 'Emily Johnson', status: 'Pending' },
            { leaveType: 'Paternity Leave', appliedDays: 7, date: '2023-12-05', startDate: '2023-12-05', endDate: '2023-12-11', returnDate: '2023-12-12', reliever: 'Michael Brown', status: 'Approved' },
            { leaveType: 'Vacation Leave', appliedDays: 10, date: '2023-12-15', startDate: '2023-12-15', endDate: '2023-12-24', returnDate: '2023-12-25', reliever: 'Laura White', status: 'Pending' },
            { leaveType: 'Unpaid Leave', appliedDays: 15, date: '2024-01-02', startDate: '2024-01-02', endDate: '2024-01-16', returnDate: '2024-01-17', reliever: 'Chris Taylor', status: 'Approved' },
            { leaveType: 'Business Trip', appliedDays: 8, date: '2024-02-05', startDate: '2024-02-05', endDate: '2024-02-12', returnDate: '2024-02-13', reliever: 'Daniel Black', status: 'Approved' },
            { leaveType: 'Family Emergency', appliedDays: 3, date: '2024-02-18', startDate: '2024-02-18', endDate: '2024-02-20', returnDate: '2024-02-21', reliever: 'Sophia Red', status: 'Pending' },
            { leaveType: 'Training Leave', appliedDays: 2, date: '2024-03-01', startDate: '2024-03-01', endDate: '2024-03-02', returnDate: '2024-03-03', reliever: 'Matthew Blue', status: 'Approved' },
            { leaveType: 'Compensatory Leave', appliedDays: 1, date: '2024-03-10', startDate: '2024-03-10', endDate: '2024-03-10', returnDate: '2024-03-11', reliever: 'Ella Pink', status: 'Pending' },
            // Add more leave data here
        ];
        

        // Simulate fetching data from an API (comment this out when integrating with a real API)
        setTimeout(() => {
            setApprovedLeaveData(fakeLeaveData);
            setLoadingData(false);
        }, 3000); // Simulate a 1-second delay
    }, []);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const leaveTypes = [
        'Adoption',
        'Annual Leave',
        'Partenity',
        'Personal Days',
        'Sick Off',
        'Sick Leave',
        'Study Leave',
        'Time Off In Lieu',
    ];

    return (
        <Card>
            <div className="card-body">
                <div className="text-center">
                    <img width={200} src={logo} className="ps-3 py-2" alt="logo" />
                    <h4 className="pt-1 text-primary">Leave Request List</h4>
                </div>
                <hr></hr>
                <div className="d-grid my-3  d-md-block">
                    <button
                        type="button"
                        className="btn  btn-primary "
                        onClick={showModal}
                        data-bs-toggle="button"
                        autoComplete="off"
                        aria-pressed="true"
                    >
                        <PlusOutlined style={{ color: '#fff', paddingRight: '2px' }} />
                        New Leave Request
                    </button>
                </div>
                <div className="table-responsive">
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
                                    Leave Type
                                </th>
                                <th className="small text-primary text-center bg-secondary" scope="col">
                                    Applied Days
                                </th>
                                <th className="small text-primary text-center bg-secondary" scope="col">
                                    Date
                                </th>
                                <th className="small text-primary text-center bg-secondary" scope="col">
                                    Start Date
                                </th>
                                <th className="small text-primary text-center bg-secondary" scope="col">
                                    End Date
                                </th>
                                <th className="small text-primary text-center bg-secondary" scope="col">
                                    Return Date
                                </th>
                                <th className="small text-primary text-center bg-secondary" scope="col">
                                    Reliever
                                </th>
                                <th className="small text-primary text-center bg-secondary" scope="col">
                                    Status
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {loadingData ? (
                                <tr>
                                    <td colSpan="10">
                                        <Skeleton active />
                                    </td>
                                </tr>
                            ) : approvedLeaveData.length > 0 ? (
                                approvedLeaveData.map((leave, index) => (
                                    <tr key={index}>
                                        <td> {/* Action button or action related to the row */}</td>
                                        <td>{index + 1}</td>
                                        <td>{leave.leaveType}</td>
                                        <td>{leave.appliedDays}</td>
                                        <td>{leave.date}</td>
                                        <td>{leave.startDate}</td>
                                        <td>{leave.endDate}</td>
                                        <td>{leave.returnDate}</td>
                                        <td>{leave.reliever}</td>
                                        <td>{leave.status}</td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="10" className="text-danger">
                                        No Records Found
                                    </td>
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
        <Modal
            open={isModalOpen}
            onOk={handleOk}
            onCancel={handleCancel}
            style={{
                top: 20,
            }}
            width="75%"
            class="modal-dialog modal-fullscreen-sm-down modal-dialog-scrollable"
            footer={[
                <Button key="back" onClick={handleCancel} size="large">
                    Exit
                </Button>,
                <Button key="text" type="primary" className="btn-primary" loading={loading} onClick={handleOk} size="large">
                    Save Changes
                </Button>,
            ]}
        >
            <div className="text-center">
                <img width={300} src={logo} className='ps-4 ' alt='logo' />
                <h4 className="modal-title text-primary " ><u>New Leave Application Document</u></h4>
            </div>
            <hr></hr>
            <div className="row g-3">
                <div className="col-12 col-md-6">
                    <div className="">
                        <p className='h6 fw-bold text-primary ls-wider text-decoration-underline py-1'>Leave Type  :</p>
                        <select
                            className="form-select"
                            aria-label="Default select example"
                            value={Year}
                            onChange={(e) => setYear(e.target.value)}
                        >
                            <option value="" disabled>
                                - - Select Appraisal Period - -
                            </option>
                            {years.map((year, index) => (
                                <option key={index} value={year}>
                                    {year}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="pt-12">
                        <p className='h6 fw-bold text-primary pt-3 ls-wider text-decoration-underline py-1'>Select Reliever :</p>
                        <select
                            className="form-select"
                            aria-label="Default select example"
                            value={Year}
                            onChange={(e) => setYear(e.target.value)}
                        >
                            <option value="" disabled>
                                - - Select Appraisal Period - -
                            </option>
                            {years.map((year, index) => (
                                <option key={index} value={year}>
                                    {year}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="pt-2">
                        <p className='h6 fw-bold text-primary pt-3 ls-wider text-decoration-underline py-1'>No of Leave Days :</p>
                        <select
                            className="form-select"
                            aria-label="Default select example"
                            value={Year}
                            onChange={(e) => setYear(e.target.value)}
                        >
                            <option value="" disabled>
                                - - Select Appraisal Period - -
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
                    <p className='h6 fw-bold text-primary ls-wider text-decoration-underline'>Supervisor:</p>
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

export default LeaveReq;