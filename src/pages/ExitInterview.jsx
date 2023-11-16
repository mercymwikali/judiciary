import { Button, Card, Checkbox, DatePicker, Input, message, Upload } from 'antd';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PlusOutlined, InboxOutlined } from '@ant-design/icons'
import logo from '../assets/Images/logo.png';
import { toast } from "react-toastify";
import SignatureCanvas from 'react-signature-canvas'

function ExitInterview() {
    const [Year, setYear] = useState([]);
    const [loading, setLoading] = useState(false);
    const [selectedAppliedDays, setSelectedAppliedDays] = useState('');
    const [selectedReliever, setSelectedReliever] = useState('');
    const [isCardOpen, setIsCardOpen] = useState(false);

    const showCard = () => {
        setIsCardOpen(true);
    };

    const handleOk = () => {
        setTimeout(() => {
            setLoading(false);
            setIsCardOpen(false);
        }, 3000);
    };

    const handleCancel = () => {
        setIsCardOpen(false);
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
    }
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
                    toast.success('Successful Submission!'); // Show the success Card
                } else {
                    // Handle error (e.g., show an error message)
                    console.error('Failed to submit application');
                    toast.error('Submission Failed'); // Show the cancel Card
                }
            })
            .catch((error) => {
                console.error('Error submitting application:', error);
                toast.error('Submission Failed'); // Show the cancel Card
            });
    };


    return (
        <Card open={isCardOpen} onOk={handleOk} onCancel={handleCancel} style={{
        }}
            width='100%'
            class="Card-dialog Card-fullscreen-sm-down Card-dialog-scrollable"
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
                <h4 className="Card-title text-primary pt-1" ><u>Staff Exit Document</u></h4>
            </div>
            <hr></hr>
            <div className="row g-3 ">
                <div className="col-12 col-md-6">
                    <p className=' fw-bold text-primary ls-wider text-decoration-underline'>First Name:</p>
                    <Input type='email' size='large' />
                </div>
                <div className="col-12 col-md-6">
                    <p className=' fw-bold text-primary ls-wider text-decoration-underline'>Last Name:</p>
                    <Input type='email' size='large' />
                </div>

            </div>
            <div className="row g-3 pt-3">
                <div className="col-12 col-md-6">
                    <p className=' fw-bold text-primary ls-wider text-decoration-underline'>Email Address:</p>
                    <Input type='email' size='large' />
                </div>
                <div className="col-12 col-md-6">
                    <p className='fw-bold text-primary ls-wider text-decoration-underline'>Phone Number:</p>
                    <Input type='email' size='large' />
                </div>

            </div>
            <div className="row g-3 pt-3 ">
                <div className="col-12 col-md-6">
                    <p className='fw-bold text-primary ls-wider text-decoration-underline'>Department:</p>
                    <Input type='email' size='large' />
                </div>
                <div className="col-12 col-md-6">
                    <p className='fw-bold text-primary ls-wider text-decoration-underline'>Job Title:</p>
                    <Input type='email' size='large' />
                </div>
            </div>
            <div className="row g-3  pt-3">
                <div className="col-12 col-md-6">
                    <p className='fw-bold text-primary ls-wider text-decoration-underline'>Exit Date:</p>
                    <DatePicker type='email' size='large' className='col-12' />
                </div>
            </div>
            <div className="row g-3 pt-3 ">
                <div className="col-12 col-md-6">
                    <p className='fw-bold text-primary ls-wider text-decoration-underline'>Empoyee termination is:</p>
                    <div className="d-flex flex-column">
                        <Checkbox>Voluntary</Checkbox>
                        <Checkbox>Involuntary</Checkbox>
                    </div>
                </div>
                <div className="col-12 col-md-6">
                    <p className='fw-bold text-primary ls-wider text-decoration-underline'>Empoyee is:</p>
                    <div className="d-flex flex-column">
                        <Checkbox>Eligible for Rehire</Checkbox>
                        <Checkbox>Not Eligible for Rehire</Checkbox>
                    </div>
                </div>
            </div>
            <div className="col-12 pt-2">
                <p className='text-primary pt-3 ls-wider text-decoration-underline'>Reason for Termination:</p>
                <div className=" my-3">
                    <div className="input-group">
                        <TextArea className='col-12' rows={4} placeholder='Type here...'>
                            <br></br>
                        </TextArea>
                    </div>

                </div>
            </div>
            <div className="col-12 pt-2">
                <p className='text-primary pt-3 ls-wider text-decoration-underline'>Any Suggestions:</p>
                <div className=" my-3">
                    <div className="input-group">
                        <TextArea className='col-12' rows={4} placeholder='Type here...'>
                            <br></br>
                        </TextArea>
                    </div>

                </div>
            </div>
            <div className="col-12 pt-2">
                <p className='text-primary pt-3 ls-wider text-decoration-underline'>Any Supporting Documents:</p>
                <div className=" my-3">
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

                </div>
            </div>
            <div className="row g-3 pt-2">
                <div className="col-12 col-md-6 pt-2">
                    <p className='text-primary pt-3 ls-wider text-decoration-underline'>Employee's Signature:</p>
                    <div style={{ border: '1px solid #386656', background: "#DCDCDC" }}>
                        <SignatureCanvas penColor='green'
                            canvasProps={{ width: 300, height: 100, }} className='border border-primary ' />,
                    </div>
                </div>
                <div className="col-12 col-md-6 pt-2">
                    <p className='text-primary pt-3 ls-wider text-decoration-underline'>Date:</p>
                    <DatePicker type='email' size='large' className='col-12' />
                </div>
            </div>
            <div className="row g-3 pt-2">
                <div className="col-12 col-md-6 justify-content-center align-items-center">
                    <p className='text-primary pt-3 ls-wider text-decoration-underline'>Manager's Signature:</p>
                    <div style={{ border: '1px solid #386656', background: "#DCDCDC" }}>
                        <SignatureCanvas penColor='green'
                            canvasProps={{ width: 300, height: 100, }} className='border border-primary ' />,
                    </div>
                </div>
                
            </div>


            <div className=" d-grid col-12 col-md-6 mx-auto my-3"> {/* Center-align the button */}
                <button
                    type="button"
                    className="btn btn-secondary bt-sm-sm bt-md-sm my-3"
                    onClick={submitApplication}
                >
                    Submit Document
                </button>
            </div>

        </Card>
    );
};


export default ExitInterview
    ;