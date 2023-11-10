import React from 'react';
import logo from '../assets/Images/logo.png';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Input, Tooltip } from 'antd';
import { UserOutlined, InfoCircleOutlined } from '@ant-design/icons'; // Import the UserOutlined icon
import { RiLockPasswordLine } from 'react-icons/ri'
import { Link } from 'react-router-dom';

const Login = () => {
    const notify = () => toast.success("Login Successful!");

    return (
        <div className='container-fluid h-100 py-5' style={{ backgroundColor: '#D6B300' }}>
            <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col-xl-10">
                    <div className="card rounded-3 text-black">
                        <div className="row g-0">
                            <div className="col-lg-6 d-flex align-items-center gradient-custom-2" style={{ backgroundColor: "#2F463E" }}>
                                <div className="text-center w-100 px-3 py-4 p-md-5 mx-md-4">
                                    <img width={350} src={logo} className='ps-4 py-3' alt='logo' />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="card-body p-md-5 mx-md-4">

                                    <div className="text-center">
                                        <img src={logo} style={{ width: '145px' }} alt="logo" />
                                        <p className="Login" style={{ color: '#2F463E', fontSize: 31, fontFamily: 'Larsseit', fontWeight: '700', wordWrap: 'break-word' }}>Login to Your Account</p>
                                        <p className="LogIntoYourAccount" style={{ color: '#333333', fontSize: 16, fontFamily: 'Larsseit', fontWeight: '500', wordWrap: 'break-word' }}>Enter your username & password to login</p>
                                    </div>

                                    <form>
                                        <div className="d-block form-outline mb-2">
                                            <label className="form-label" htmlFor="username">Username<span className='text-danger px-1'>*</span></label>
                                            <Input
                                                placeholder="Enter your username"
                                                prefix={<UserOutlined className="site-form-item-icon" style={{
                                                }} />}
                                                size='large'
                                                suffix={
                                                    <Tooltip title="Extra information">
                                                        <InfoCircleOutlined
                                                            style={{
                                                            }}
                                                        />
                                                    </Tooltip>
                                                }
                                            />
                                        </div>
                                        <div className="d-block form-outline mb-1">
                                            <label className="form-label" htmlFor="username">Password<span className='text-danger px-1'>*</span></label>
                                            <Input
                                                placeholder="Enter your Password"
                                                prefix={<RiLockPasswordLine className="site-form-item-icon" />}
                                                size='large'
                                                suffix={
                                                    <Tooltip title="Extra information">
                                                        <InfoCircleOutlined

                                                        />
                                                    </Tooltip>
                                                }
                                            />
                                        </div>

                                        <div className="text-start  d-flex justify-content-between align-items-center">
                                            <div className="d-flex">
                                                <input type='checkbox' />
                                                <div className="pt-2">
                                                    <p className='pt-1 px-2'>Remember me</p>
                                                </div>
                                            </div>
                                            <div className="div">
                                                <Link style={{ color: '#000' }}>Forgot Password</Link>

                                            </div>
                                        </div>
                                        <div className="text-center d-grid  col-8 mx-auto">
                                            <Link to={'/'} className="btn btn-primary btn-block gradient-custom-2 mb-3" type="button" onClick={notify}>Log in</Link>
                                            <ToastContainer />
                                            <a className="text-muted" href="#!">Forgot password?</a>
                                        </div>

                                    </form>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;
