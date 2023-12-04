import React, { useState, useEffect } from 'react';
import { Button, Card, DatePicker, Modal, AutoComplete, Upload, message, Input, Skeleton } from 'antd';
import { Link } from 'react-router-dom';
import { PlusOutlined, InboxOutlined, SearchOutlined } from '@ant-design/icons';
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
        // Fetch data from the API
        const fakeLeaveData = fetch('https://portal.greencom.co.ke:5054/Jumuika/ODataV4/Company(\'Judiciary\')/EmployeeList')
            .then(response => response.json())
            .then(data => {
                // Update the state with the fetched data
                setApprovedLeaveData(data.value);
                setLoadingData(false);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                // Handle the error, e.g., display an error message
            });


        // Simulate fetching data from an API (comment this out when integrating with a real API)
        setTimeout(() => {
            setApprovedLeaveData(fakeLeaveData);
            setLoadingData(false);
        }, 3000); // Simulate a 1-second delay
    }, []);

    const showModal = () => {
        setIsModalOpen(true);
    };

    return (
        <Card>
            <div className="card-body">
                <div className="text-center">
                    <img width={200} src={logo} className="ps-3 py-2" alt="logo" />
                    <h4 className="pt-1 text-primary">Leave Application List</h4>
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
                        New Leave Application
                    </button>
                </div>
                <div className="table-responsive">
                    <table className="table table-hover table-bordered dt-responsive nowrap">
                        <thead>
                            <tr>
                                <th className="small text-primary text-center bg-secondary" scope="col">
                                    Application No
                                </th>
                                <th className="small text-primary text-center bg-secondary" scope="col">
                                    Staff No
                                </th>
                                <th className="small text-primary text-center bg-secondary" scope="col">
                                    Name
                                </th>
                                <th className="small text-primary text-center bg-secondary" scope="col">
                                    Leave Type
                                </th>
                                <th className="small text-primary text-center bg-secondary" scope="col">
                                    Applied Days
                                </th>
                                <th className="small text-primary text-center bg-secondary" scope="col">
                                    Start Date
                                </th>
                                <th className="small text-primary text-center bg-secondary" scope="col">
                                    Return Date
                                </th>
                                <th className="small text-primary text-center bg-secondary" scope="col">
                                    End Date
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
                                approvedLeaveData.map((employee, index) => (
                                    <tr key={index}>
                                        {/* Adjust the table cells based on the structure of the API response */}
                                        <td> {/* Action button or action related to the row */}</td>
                                        <td>{index + 1}</td>
                                        <td>{employee.leaveType}</td>
                                        <td>{employee.appliedDays}</td>
                                        <td>{employee.date}</td>
                                        <td>{employee.startDate}</td>
                                        <td>{employee.endDate}</td>
                                        <td>{employee.returnDate}</td>
                                        <td>{employee.reliever}</td>
                                        <td>{employee.status}</td>
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


    const { Option } = AutoComplete;

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
    const leaveTypes = [
        'Leave of Absence',
        'Adoption',
        'Annual Leave',
        'Annual Hardship Leave',
        'Compassionate',
        'Examination',
        'Home Leave',
        'Maternity',
        'Off Day',
        'Paternity',
        'Sabbatical',
        'Sick Off/Convalescence',
        'Special Sports',
        'Study',
        'Terminal',
        'Test'

    ];

    const Annual_Leave_Type = [
        'Annual Leave',
        'Emergency Leave',
        'Compassionate Leave'
    ]

    const costCenters = [
        'HIV and AIDS Tribunal',
        'Industrial Property Tribunal',
        'National Environment Tribunal',
        'Political Parties Disputes Tribunal',
        'Public Private Partnership Petition Committee',
        'Rent Restriction Tribunal',
        'Sports Disputes Tribunal',
        'Standards Tribunal',
        'Transport Licensing Appeals Board',
        'Water Appeals Board',
        'Milimani Commercial Magistrate Court',
        'Milimani Childrens Court',
        'Milimani Magistrate Court',
        'Nairobi City Court',
        'Makadara Magistrate Court',
        'Kibera Magistrate Court',
        'Milimani Anticorruption Court',
        'JKIA Magistrate Court',
        'Kibera Kadhi Court',
        'Nairobi Kadhi Court',
        'Lamu Magistrate Court',
        'Mpeketoni Magistrate Court',
        'Taveta Magistrate Court',
        'Voi Magistrate Court',
        'Wundanyi Magistrate Court',
        'Garissa Magistrate Court',
        'Wajir Magistrate Court',
        'Mandera Magistrate Court',
        'Directorate of HR Management & Development',
        'Directorate of Administration & Security Services',
        'ICT Directorate',
        'Planning and Organization Performance Directorate',
        'Supply Chain Management Directorate',
        'Public Affairs and Communication Directorate',
        'Audit and Risk Management Directorate',
        'Finance and Accounts Directorate',
    ];
    const onSearch = (value) => {
        console.log('Searching for:', value);
        // You can perform additional actions based on the search value
    };

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
            top: 0,
        }}
            width='75%'
            class="modal-dialog modal-fullscreen-sm-down modal-dialog-scrollable"
            footer={[
                <Button key="back" onClick={handleCancel} size='medium'>
                    Exit
                </Button>,
                <Button key="text" type="primary" className='btn-primary' loading={loading} onClick={handleOk} size='medium'>
                    Save Changes
                </Button>,
            ]}>
            <div className="text-center">
                <img width={300} src={logo} className='ps-4 ' alt='logo' />
                <h4 className="modal-title text-primary py-2" ><u>Leave Application Document</u></h4>
            </div>
            <hr></hr>
            <div className="row">
                <div className="col-12 col-md-6">
                    <div className="">
                        <p className='h6  text-primary ls-wider text-decoration-underline'>Leave Type:</p>
                        <AutoComplete
                            className="form-input"
                            placeholder="Search Leave Type"
                            onSelect={(value) => onSearch(value)}
                            optionLabelProp="value"
                            style={{ width: '100%' }}
                            size='medium'
                        >
                            {leaveTypes.map((leavetype, index) => (
                                <Option key={index} value={leavetype}>
                                    {leavetype}
                                </Option>
                            ))}
                        </AutoComplete>
                    </div>
                    <div className="">
                        <p className='h6 text-primary pt-3 ls-wider text-decoration-underline '>Annual Leave Type :</p>
                        <AutoComplete
                            className="form-input"
                            placeholder="Search Annual Leave Type"
                            onSelect={(value) => onSearch(value)}
                            optionLabelProp="value"
                            style={{ width: '100%' }}
                            size='medium'
                        >
                            {Annual_Leave_Type.map((Annual_Leave_type, index) => (
                                <Option key={index} value={Annual_Leave_type}>
                                    {Annual_Leave_type}
                                </Option>
                            ))}
                        </AutoComplete>
                    </div>
                    <div className="">
                        <p className='h6  text-primary pt-3 ls-wider text-decoration-underline '> Days Applied:</p>
                        <Input
                            className="form-input"
                            onChange={(e) => setYear(e.target.value)}
                            size='medium'
                        >
                        </Input>
                    </div>
                    <div className="">
                        <p className='h6  text-primary pt-3 ls-wider text-decoration-underline '>Start Date:</p>
                        <DatePicker className='col-12' size='medium' />
                    </div>
                    <div className="">
                        <p className='h6  text-primary pt-3 ls-wider text-decoration-underline '>Return Date:</p>
                        <DatePicker className='col-12' size='medium' />
                    </div>
                    <div className="">
                        <p className='h6  text-primary pt-3 ls-wider text-decoration-underline '>Staff No:</p>
                        <Input
                            className="form-input"
                            onChange={(e) => setYear(e.target.value)}
                            size='medium'
                        >
                        </Input>
                    </div>
                    <div className="">
                        <p className='h6 text-primary pt-3 ls-wider text-decoration-underline'>Cost Center Name :</p>
                        <AutoComplete
                            className="form-input"
                            placeholder="Search cost center"
                            onSelect={(value) => onSearch(value)}
                            optionLabelProp="value"
                            style={{ width: '100%' }}
                            size='medium'
                        >
                            {costCenters.map((costcenter, index) => (
                                <Option key={index} value={costcenter}>
                                    {costcenter}
                                </Option>
                            ))}
                        </AutoComplete>
                    </div>
                </div>
                <div className="col-12 col-md-6">
                    <div className="">
                        <p className='h6  text-primary  ls-wider text-decoration-underline '>Job Description:</p>
                        <Input
                            className="form-input"
                            onChange={(e) => setYear(e.target.value)}
                            size='medium'
                        >
                        </Input>
                    </div>
                    <div className="">
                        <p className='h6  text-primary pt-3 ls-wider text-decoration-underline '> Supervisor Name:</p>
                        <Input
                            className="form-input"
                            onChange={(e) => setYear(e.target.value)}
                        >
                        </Input>
                    </div>
                    <div className="">
                        <p className='h6  text-primary pt-3 ls-wider text-decoration-underline '>Supervisor Email:</p>
                        <Input
                            className="form-input"
                            onChange={(e) => setYear(e.target.value)}
                            size='medium'
                        >
                        </Input>
                    </div>
                    <div className="">
                        <p className='h6  text-primary pt-3 ls-wider text-decoration-underline '>Reliever Name:</p>
                        <Input
                            className="form-input"
                            onChange={(e) => setYear(e.target.value)}
                            size='medium'
                        >
                        </Input>
                    </div>
                    <div className="">
                        <p className='h6  text-primary pt-3 ls-wider text-decoration-underline '>Cell Phone Number:</p>
                        <Input
                            className="form-input"
                            onChange={(e) => setYear(e.target.value)}
                            size='medium'
                        >
                        </Input>
                    </div>
                    <div className="">
                        <p className='h6  text-primary pt-3 ls-wider text-decoration-underline '>Email Address:</p>
                        <Input
                            className="form-input"
                            onChange={(e) => setYear(e.target.value)}
                            size='medium'
                        >
                        </Input>
                    </div>
                    {/* <div className="">
                        <p className='h6  text-primary pt-3 ls-wider text-decoration-underline '>Details of Examination:</p>
                        <DatePicker className='col-12' />
                    </div> */}
                    <div className="">
                        <p className='h6  text-primary pt-3 ls-wider text-decoration-underline '>Date of Exam:</p>
                        <DatePicker className='col-12' size='medium' />
                    </div>


                </div>
            </div>
            <hr></hr>
            <div className="col-12">
                <p className='h6  text-primary ls-wider  text-decoration-underline'>Leave Data</p>
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
            <hr className='mt-4'></hr>
            <div className="row">
                <p className='h5  text-primary ls-wider text-decoration-underline'>Hand-Over Report</p>
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
                    <p className='h5  text-primary ls-wider text-decoration-underline'>Remarks</p>
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