import React, { useState, useEffect } from "react";
import { Card, Select } from "antd";
import Typography from "antd/es/typography/Typography";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import logo from '../assets/Images/logo.png';

function P9() {
    const [Year, setYear] = useState([]);
    const [selectedAppliedDays, setSelectedAppliedDays] = useState('');
    const [selectedReliever, setSelectedReliever] = useState('');

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
        <Card>
            <div className="card-body">
                <div className="text-center">
                    <img width={200} src={logo} className='ps-3 py-3' alt='logo' />
                    <h4 className="text-primary">P9 Document View</h4>
                </div>
                <hr></hr>
                <div className="row">
                    <div className="col-12 col-md-6">
                        <p className='h6 fw-bold text-primary pt-3 ls-wider text-decoration-underline'>Year :</p>
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
                    <div className="col-12 col-md-6">
                        <p className='h6 fw-bold text-primary pt-3 ls-wider text-decoration-underline'>Month:</p>
                        <select
                            className="form-select"
                            aria-label="Default select example"
                            value={Year}
                            onChange={(e) => setYear(e.target.value)}
                        >
                            <option value="" disabled>
                                - - Select Month - -
                            </option>
                            {months.map((month, index) => (
                                <option key={index} value={month}>
                                    {month}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className=" d-grid col-6 mx-auto"> {/* Center-align the button */}
                    <button
                        type="button"
                        className="btn btn-secondary my-3"
                        onClick={submitApplication}
                    >
                        View P9
                    </button>
                </div>
                <hr></hr>
            </div>
        </Card>
    );
}

export default P9;
