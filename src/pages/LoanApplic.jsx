import React, { useState, useEffect } from 'react';
import { Button, Card, DatePicker, Modal, Upload, message, Input, Skeleton } from 'antd';
import { PlusOutlined, InboxOutlined } from '@ant-design/icons';
import logo from '../assets/Images/logo.png';
import { toast } from 'react-toastify';

function LoanApplic() {
    const [approvedLoanData, setApprovedLoanData] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [loadingData, setLoadingData] = useState(true);
    const [description, setDescription] = useState('');
    const [employeeNo, setEmployeeNo] = useState('');
    const [amountRequested, setAmountRequested] = useState('');
    const [loading, setLoading] = useState(false);
    const [applicationDate, setApplicationDate] = useState(null);
    const [selectedLoanType, setSelectedLoanType] = useState('');
    useEffect(() => {
        const generateDummyData = () => {
          const dummyData = [];
          for (let i = 0; i < 10; i++) {
            dummyData.push({
              Loan_Types: `Loan Type ${i + 1}`,
              Description: `Description ${i + 1}`,
              date: `Date ${i + 1}`,
              startDate: `Start Date ${i + 1}`,
              endDate: `End Date ${i + 1}`,
              returnDate: `Return Date ${i + 1}`,
              reliever: `Reliever ${i + 1}`,
              status: `Status ${i + 1}`,
            });
          }
          return dummyData;
        };
      
        // Simulate fetching data
        const simulatedData = generateDummyData();
      
        setApprovedLoanData(simulatedData);
        setLoadingData(false);
      }, []);
      

    const showModal = () => {
        setIsModalOpen(true);
    };

    const loanTypes = ['Car Loan', 'KCB Loan'];

    return (
        <Card>
            <div className="card-body">
                <div className="text-center">
                    <img width={200} src={logo} className="ps-3 py-2" alt="logo" />
                    <h4 className="pt-1 text-primary">Loan Applications</h4>
                </div>
                <hr />
                <div className="d-grid my-3 d-md-block">
                    <button
                        type="button"
                        className="btn btn-primary"
                        onClick={showModal}
                        data-bs-toggle="button"
                        autoComplete="off"
                        aria-pressed="true"
                    >
                        <PlusOutlined style={{ color: '#fff', paddingRight: '2px' }} />
                        New Loan Application
                    </button>
                </div>
                <div className="table-responsive">
                    <table className="table table-hover table-bordered dt-responsive nowrap">
                        <thead>
                            <tr>
                                <th className="small text-primary text-center bg-secondary" scope="col">
                                    Loan No
                                </th>
                                <th className="small text-primary text-center bg-secondary" scope="col">
                                    Loan Product Type
                                </th>
                                <th className="small text-primary text-center bg-secondary" scope="col">
                                    Description
                                </th>
                                <th className="small text-primary text-center bg-secondary" scope="col">
                                    Application Date
                                </th>
                                <th className="small text-primary text-center bg-secondary" scope="col">
                                    Requested Amount
                                </th>
                                <th className="small text-primary text-center bg-secondary" scope="col">
                                    Approved Amount
                                </th>
                                <th className="small text-primary text-center bg-secondary" scope="col">
                                    Issued Date
                                </th>
                                <th className="small text-primary text-center bg-secondary" scope="col">
                                    Repayment Period
                                </th>
                                <th className="small text-primary text-center bg-secondary" scope="col">
                                    Interest Rate
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
                            ) : approvedLoanData.length > 0 ? (
                                approvedLoanData.map((employee, index) => (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{employee.Loan_Types}</td>
                                        <td>{employee.Description}</td>
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
            <LoanApplicationModal
                isModalOpen={isModalOpen}
                setIsModalOpen={setIsModalOpen}
                loanTypes={loanTypes}
                selectedLoanType={selectedLoanType}
                setApplicationDate={setApplicationDate}
                applicationDate={applicationDate}
            />
        </Card>
    );
}

function LoanApplicationModal({
    setIsModalOpen,
    isModalOpen,
    loanTypes,
    Description
}) {
    const [description, setDescription] = useState('');
    const [employeeNo, setEmployeeNo] = useState('');
    const [amountRequested, setAmountRequested] = useState('');
    const [loading, setLoading] = useState(false);
    const [applicationDate, setApplicationDate] = useState(null);
    const [selectedLoanType, setSelectedLoanType] = useState('');

    const handleOk = () => {
        setLoading(true);
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

    const Loan_Types = ["Car Loan", "KCB Loan"];

    const submitApplication = () => {
        const formData = {
            loanType: selectedLoanType,
            description: description,
            employeeNo: employeeNo,
            applicationDate: applicationDate,
            amountRequested: amountRequested,
        };

        fetch('/api/submit-loan-application', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
            .then((response) => {
                if (response.ok) {
                    console.log('Loan Application submitted successfully');
                    toast.success('Successful Submission!');
                } else {
                    console.error('Failed to submit Loan application');
                    toast.error('Submission Failed');
                }
            })
            .catch((error) => {
                console.error('Error submitting application:', error);
                toast.error('Submission Failed');
            });
    };

    return (
        <Modal
            open={isModalOpen}
            onOk={handleOk}
            onCancel={handleCancel}
            style={{
                top: 20
            }}
            className="modal-dialog modal-fullscreen-sm-down modal-dialog-scrollable"
            footer={[
                <Button key="back" onClick={handleCancel} size="large">
                    Exit
                </Button>,
                <Button
                    key="text"
                    type="primary"
                    className="btn-primary"
                    loading={loading}
                    onClick={handleOk}
                    size="large"
                >
                    Save Changes
                </Button>,
            ]}
            width={"100%"}
        >

            <div className="text-center">
                <img width={200} src={logo} className='ps-4 ' alt='logo' />
                <h4 className="modal-title text-primary " ><u>New Loan Application Document</u></h4>
            </div>
            <hr></hr>
            <div className="row g-3">
            <div className="col-12 col-md-6">
                    <div className="">
                        <p className='h6 fw-bold text-primary ls-wider text-decoration-underline py-1'>Loan Type  :</p>
                        <select
                            className="form-select"
                            aria-label="Default select example"
                            value={selectedLoanType}
                            onChange={(e) => setSelectedLoanType(e.target.value)}
                        >
                            <option value="" disabled>
                                - - Select Loan Type - -
                            </option>
                            {loanTypes.map((loantype, index) => (
                                <option key={index} value={loantype}>
                                    {loantype}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="pt-2">
                        <p className='h6 fw-bold text-primary pt-3 ls-wider text-decoration-underline py-1'>Description :</p>
                        <Input
                            className="form-input"
                            aria-label="Default select example"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            size='large'
                        />
                    </div>
                    <div className="pt-2">
                        <p className='h6 fw-bold text-primary pt-3 ls-wider text-decoration-underline py-1'>Employee Number :</p>
                        <Input
                            className="form-input"
                            aria-label="Default select example"
                            value={employeeNo}
                            onChange={(e) => setEmployeeNo(e.target.value)}
                            size='large'
                        />
                    </div>
                </div>
                <div className="col-12 col-md-6">
                    <p className='h6 fw-bold text-primary ls-wider text-decoration-underline'>Date of Application:</p>
                    <div className="col-12  p-y2  ">
                        <DatePicker size='large' placeholder='Select End Date' className='col-12' />
                    </div>
                    <div className="mt-4">
                        <p className='h6 fw-bold text-primary pt-1 ls-wider text-decoration-underline '>Amount Requested :</p>
                        <Input
                            className="form-input col-12 mt-2"
                            aria-label="Default select example"
                            value={amountRequested}
                            onChange={(e) => setAmountRequested(e.target.value)}
                            size='large'
                        />
                    </div>
                </div>
            </div>
            <hr></hr>

            <div className="row">
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
                <div className=" mt-3">
                    <p className='h5 fw-bold text-primary ls-wider text-decoration-underline'>Remarks</p>
                    <div className="input-group">
                        <TextArea className='col-12' rows={4}>
                            <br></br>
                        </TextArea>
                    </div>
                </div>
            </div>
            <div className="d-grid col-12 col-md-4 mx-auto my-3"> {/* Center-align the button */}
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
}

export default LoanApplic;
