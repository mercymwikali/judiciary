import React, { useState } from 'react';
import logo from '../assets/Images/logo.png';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Input, Checkbox } from 'antd';
import { UserOutlined, EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons';
import { RiLockPasswordLine } from 'react-icons/ri';
import { IoEyeOffOutline } from 'react-icons/io5';
import { AiOutlineEyeInvisible } from 'react-icons/ai';
import { useMsal } from '@azure/msal-react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleTogglePassword = () => {
        setShowPassword((prevShowPassword) => !prevShowPassword);
    };

    const handleLogin = async () => {
        try {
            // Authentication request
            const authResponse = await axios.post(
                'https://portal.greencom.co.ke:8082/Judiciary/b35a7f97-47ac-4b38-8491-ecd39ed08e13/oauth2/v2.0/authorize',
                {
                    grant_type: 'password',
                    client_id: '29485525-39e3-4865-a1b2-0163ba7d94ae',
                    client_secret: process.env.REACT_APP_AZURE_AD_CLIENT_SECRET,
                    username: username,
                    password: password,
                    scope: 'https://api.portal.greencom.co.ke:8082/.default',
                }
            );

            // Token request
            const tokenResponse = await axios.post(
                'https://portal.greencom.co.ke:8082/Judiciary/b35a7f97-47ac-4b38-8491-ecd39ed08e13/oauth2/v2.0/token',
                {
                    grant_type: 'authorization_code',
                    client_id: '29485525-39e3-4865-a1b2-0163ba7d94ae',
                    client_secret: process.env.REACT_APP_AZURE_AD_CLIENT_SECRET,
                    code: authResponse.data.code,
                    redirect_uri: 'http://localhost:3000/',
                }
            );

            // Using access token for API requests
            const accessToken = tokenResponse.data.access_token;

            // Making API request with access token
            const userResponse = await axios.get(
                'https://portal.greencom.co.ke:8082/Jumuika/ODataV2/Company(\'Judiciary\')/User',
                {
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                    },
                }
            );

            console.log(userResponse.data);

            // Redirect to homepage after successful authentication
            navigate('/');

        } catch (error) {
            // Handle authentication error
            console.error('Authentication Error:', error);
            toast.error('Authentication failed. Please check your credentials.');
        }
    };

    return (
        <div className=' login-page   d-flex justify-content-center  align-items-center'  >
            <div className=" d-block d-md-flex py-3 text-black">
                <div className="d-none d-md-block col-md-6 d-flex align-items-center gradient-custom-2 rounded-3 " style={{ backgroundColor: "#2F463E" }}>
                    <div className="text-center w-100 p-5">
                        <img width={500} src={logo} className='ps-4 my-5 py-5' alt='logo' />
                    </div>
                </div>
                <div className="card rounded-3  ">
                    <div className="card-body p-md-5 mx-md-4">

                        <div className="text-center">
                            <img src={logo} style={{ width: '200px' }} alt="logo" className='ps-3' />
                            <p className="Login" style={{ color: '#2F463E', fontSize: 31, fontFamily: 'Larsseit', fontWeight: '700', wordWrap: 'break-word' }}>Login to Your Account</p>
                            <p className="LogIntoYourAccount" style={{ color: '#333333', fontSize: 16, fontFamily: 'Larsseit', fontWeight: '500', wordWrap: 'break-word' }}>Enter your username & password to login</p>
                        </div>

                        <form className=''>
                            <div className="d-block form-outline mb-2">
                                <label className="form-label" htmlFor="username">Email<span className='text-danger px-1'>*</span></label>
                                <Input
                                    placeholder="Enter your Email"
                                    prefix={<UserOutlined className="site-form-item-icon" style={{
                                    }} />}
                                    size='large'
                                    value={username}
                                    type='email'
                                    onChange={(e) => setUsername(e.target.value)}

                                />
                            </div>
                            <div className="d-block form-outline mb-2">
                                <label className="form-label" htmlFor="username">Password<span className='text-danger px-1'>*</span></label>

                                <Input
                                    type={showPassword ? 'text' : 'password'}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    size='large'
                                    placeholder="Enter your password"
                                    prefix={<RiLockPasswordLine className="site-form-item-icon" style={{
                                    }} />}
                                    addonAfter={
                                        showPassword ? (
                                            <AiOutlineEyeInvisible onClick={handleTogglePassword} />
                                        ) : (
                                            <IoEyeOffOutline onClick={handleTogglePassword} />
                                        )
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

                            </div>
                            <div className="text-center d-grid  col-8 mx-auto">
                                <button
                                    className="btn btn-primary btn-block gradient-custom-2 mb-3"
                                    type="button"
                                    onClick={handleLogin}
                                >
                                    Log in
                                </button>
                                <ToastContainer />
                                <Link className="text-muted" to="/forgot-password">
                                    Forgot password?
                                </Link>
                            </div>

                        </form>

                    </div>
                </div>
            </div>
        </div>
    )

}
export default Login;
