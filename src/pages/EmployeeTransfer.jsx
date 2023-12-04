import { Button, Card, DatePicker, Modal, Upload, message, Table, Input, AutoComplete } from 'antd';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { PlusOutlined, InboxOutlined } from '@ant-design/icons'
import logo from '../assets/Images/logo.png';
import { toast } from "react-toastify";

function EmployeeTransfer(params) {
    const [approvedLeaveData, setApprovedLeaveData] = useState([]);
    const [selectedLeaveType, setSelectedLeaveType] = useState('');
    const [selectedAppliedDays, setSelectedAppliedDays] = useState('');
    const [selectedTransferData, setSelectedTransferData] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };


    const leaveTypes = ["Adoption", "Annual Leave", "Partenity", "Personal Days", "Sick Off", "Sick Leave", "Study Leave", "Time Off In Lieu"];
    const columns = [
        {
            title: 'Staff No',
            dataIndex: 'staffNo',
            key: 'staffNo',
        },
        {
            title: 'Staff Name',
            dataIndex: 'staffName',
            key: 'staffName',
        },
        {
            title: 'Initial Station',
            dataIndex: 'initialStation',
            key: 'initialStation',
        },
        {
            title: 'Transfer Date',
            dataIndex: 'transferDate',
            key: 'transferDate',
        },
        {
            title: 'New Station Name',
            dataIndex: 'newStationName',
            key: 'newStationName',
        }]
    return (
        <Card>
            <div className="card-body">
                <div className="text-center">
                    <img width={200} src={logo} className="ps-3 py-1" alt="logo" />
                    <h4 className="text-primary">Employee Transfer Request List</h4>
                </div>
                <hr></hr>
                <div className="d-grid my-3 col-md-8 col-lg-6 d-md-block">
                    <button
                        type="button"
                        className="btn btn-primary"
                        onClick={showModal}
                        data-bs-toggle="button"
                        autoComplete="off"
                        aria-pressed="true"
                    >
                        <PlusOutlined style={{ color: '#fff', paddingRight: '2px' }} />New Request
                    </button>
                </div>
                <div className="table-responsive">
                    <Table dataSource={selectedTransferData} columns={columns} />
                </div>
            </div>
            <EmployeeTransferLieuModal
                isModalOpen={isModalOpen}
                setIsModalOpen={setIsModalOpen}
                setSelectedTransferData={setSelectedTransferData}
            />
        </Card>
    );
};


function EmployeeTransferLieuModal({ setIsModalOpen, isModalOpen,setSelectedTransferData  }) {
    const [Year, setYear] = useState([]);
    const [loading, setLoading] = useState(false);
    const [selectedAppliedDays, setSelectedAppliedDays] = useState('');
    const [selectedReliever, setSelectedReliever] = useState('');
    const [selectedStation, setSelectedStation] = useState('');

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
    const { RangePicker } = DatePicker;

    const { Option } = AutoComplete;
    const dutyStations = [
        'Kiambu County',
        'Kiambu High Court',
        'Thika Environment and Land Court',
        'Kiambu Magistrate Court',
        'Kikuyu Magistrate Court',
        'Limuru Magistrate Court',
        'Gatundu Magistrate Court',
        'Githunguri Magistrate Court',
        'Thika Magistrate Court',
        'Ruiru Magistrate Court',
        'Thika Kadhi Court',
        'Turkana County',
        'Lodwar High Court',
        'Lodwar Magistrate Court',
        'Kakuma Magistrate Court',
        'Kakuma Kadhi Court',
        'West Pokot County',
        'Kapenguria High Court',
        'Kapenguria Magistrate Court',
        'Samburu County',
        'Maralal Magistrate Court',
        'Trans Nzoia County',
        'Kwale Magistrate Court',
        'Msambweni Magistrate Court',
        'Kitale High Court',
        'Kitale Environment and Land Court',
        'Kitale Magistrate Court',
    ];
    const onSearch = (value) => {
        console.log('Searching for:', value);

        // Validate that the input is at least 3 characters long
        if (value.length < 3) {
            console.log('Please enter at least 3 characters.');
            return;
        }

        // Perform additional actions based on the search value
        // You can update the state or perform other logic here
        setSelectedStation(value);
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
            setSelectedTransferData((prevData) => [
                ...prevData,
                {
                    staffNo: formData.staffNo,
                    staffName: formData.staffName,
                    initialStation: formData.initialStation,
                    transferDate: formData.transferDate,
                    newStationName: formData.newStationName,
                },
            ]);
    };


    return (
        <Modal
            open={isModalOpen}
            onOk={handleOk}
            onCancel={handleCancel}
            style={{
                top: 0,
            }}
            width="55%"
            class="modal-dialog modal-fullscreen-sm-down modal-dialog-scrollable"
            footer={[
                <Button key="back" onClick={handleCancel} size="large">
                    Exit
                </Button>,
                <Button
                    key="submit"
                    type="primary"
                    loading={loading}
                    onClick={() => {
                        handleOk();
                        submitApplication();
                    }}
                    size="large"
                >
                    Submit Form Application
                </Button>,
            ]}
        >
            <div className="text-center">
                <img width={300} src={logo} className='ps-4 ' alt='logo' />
                <h4 className="modal-title text-primary py-1" ><u>Employee Transfer Application</u></h4>
            </div>
            <hr></hr>
            <div className="row">
                <div className="col-12 col-md-6">
                    <div className="">
                        <p className='h6  text-primary  ls-wider  pt-1'>Staff No:</p>
                        <Input
                            className="form-input"
                            onChange={(e) => setYear(e.target.value)}
                            size='medium'
                        >
                        </Input>
                    </div>
                    <div className="">
                        <p className='h6  text-primary  ls-wider  pt-1'>Staff Name:</p>
                        <Input
                            className="form-input"
                            onChange={(e) => setYear(e.target.value)}
                            size='medium'
                        >
                        </Input>
                    </div>
                    <div className="">
                        <p className='h6  text-primary  ls-wider  pt-1'>Initial Station:</p>
                        <AutoComplete
                            className="form-input"
                            placeholder="Search Leave Type"
                            onSelect={(value) => onSearch(value)}
                            optionLabelProp="value"
                            style={{ width: '100%' }}
                            size='medium'
                        >
                            {dutyStations.map((dutyStation, index) => (
                                <Option key={index} value={dutyStation}>
                                    {dutyStation}
                                </Option>
                            ))}
                        </AutoComplete>
                    </div>
                </div>
                <div className='col-12 col-md-6'>
                    <div className="">
                        <p className='h6  text-primary  ls-wider  pt-1'>Transfer Date:</p>
                        <DatePicker className='col-12' />
                    </div>
                    <div className="">
                        <p className='h6 text-primary ls-wider pt-1'>New Station Name:</p>
                        <AutoComplete
                            className="form-input"
                            placeholder="Search Leave Type"
                            onSelect={(value) => onSearch(value)}
                            optionLabelProp="value"
                            style={{ width: '100%' }}
                            size='medium'
                        >
                            {dutyStations.map((dutyStation, index) => (
                                <AutoComplete.Option key={index} value={dutyStation}>
                                    {dutyStation}
                                </AutoComplete.Option>
                            ))}
                        </AutoComplete>
                    </div>
                </div>
                <div className="col-12 mt-3">
                    <p className='h6  text-primary  ls-wider text-decoration-underline '>Attachment:</p>
                    <div class="input-group">
                        <Dragger {...props} className='col-12'>
                            <p className="ant-upload-drag-icon">
                                <InboxOutlined />
                                <p className="ant-upload-text">Click or drag file to this area to upload</p>
                                <p className="ant-upload-hint">
                                    Support for a single or bulk upload.                        </p>
                            </p>
                        </Dragger>
                    </div>
                    <div className=" my-3">
                        <p className='h5  text-primary ls-wider text-decoration-underline '>Remarks</p>
                        <div className="input-group">
                            <TextArea className='col-12' rows={4}>
                                <br></br>
                            </TextArea>
                        </div>

                    </div>
                </div>
            </div>
        </Modal>
    );
};

export default EmployeeTransfer;