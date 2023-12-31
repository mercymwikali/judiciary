import React, { useState } from 'react'; // Import useState
import { Layout, Menu, Badge, Avatar, Button, Space, Drawer } from 'antd'
import Sider from 'antd/es/layout/Sider'
import { Content, Footer, Header } from 'antd/es/layout/layout'
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    LogoutOutlined,
    UsergroupAddOutlined,
    BookOutlined,
    UserOutlined,
    AccountBookOutlined,
    AppstoreOutlined,
    CarOutlined,
    BellFilled,
    MailOutlined,
    FullscreenExitOutlined,
    DesktopOutlined,
    ArrowDownOutlined,
    ArrowLeftOutlined
} from '@ant-design/icons';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import logo from '../assets/Images/logo.png';
import smalllogo from '../assets/Images/smalllogo.png';

import { HiOutlineClipboardList } from 'react-icons/hi';
import { BiCalendar, BiMessageError } from 'react-icons/bi';
import { TbTriangleSquareCircle, TbCreditCard } from 'react-icons/tb';
import { FaUserFriends,FaRegMoneyBillAlt,FaHandHoldingMedical } from 'react-icons/fa';
import Sigonout from './Signout';


const Mainlayout = () => {
    const [collapsed, setCollapsed] = useState(false);
    const [openMenu, setOpenMenu] = useState(false);
    const navigate = useNavigate();
    const [openKeys, setOpenKeys] = useState(['/']);
    const rootSubmenuKeys = ['/salary-info', '/leave', '/Appraisals', '/Requisitions', '/assets-management', '/purchase', '/Onboarding', '/Training', '/Fleet-management', '/Staff Exit', '/ICT-Services'];

    const openDrawer = () => {
        setOpenMenu(true);
    };

    const onOpenChange = (keys) => {
        const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
        setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
        if (latestOpenKey && rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
            setOpenKeys(keys);
        } else {
            setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
        }
    }

    return (
        <Space direction='vertical'
            style={{ width: '100%' }}
        >
            <Layout>
                <Header className='headerstyle'>
                    <div className="d-flex justify-content-between align-items-center">
                        <Button
                            type="text"
                            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                            onClick={() => setCollapsed(!collapsed)}
                            style={{
                                fontSize: '22px',
                                width: 64,
                                height: 64,
                                color: '#fff'
                            }}
                            className='menuIcon'
                        />
                        <Link to='/' ><img width={180} src={logo} className='ps-3 smallscreens' alt='logo' 
                        /></Link>
                    </div>
                    <Link to='/' ><img  src={smalllogo} className='ps-3 bigscreens' alt='logo'/></Link>

                    <div className="d-flex gap-3"
                        style={{ justifyContent: 'between', alignItems: 'center', cursor: 'pointer' }}>
                        <div className="d-flex ">
                            <Badge count={20} className='pt-1'>
                                <BellFilled style={{ fontSize: 22, color: "#fff" }} />
                            </Badge>
                        </div>
                        <Sigonout />

                    </div>

                </Header>
                <Layout hasSider >
                    <Sider className={`sideStyle ${collapsed ? 'collapsed' : ''}`}
                        trigger={null}
                        collapsible
                        collapsed={collapsed}
                        breakpoint="lg"
                        theme="light"
                        responsive
                        onBreakpoint={(broken) => {
                            if (broken) {
                                setCollapsed(true);
                            }
                        }}
                        // onMouseEnter={() => setCollapsed(false) } // Open on hover
                        // onMouseLeave={() => setCollapsed(true)}  // Close on mouse leave
                    >
                        <MenuComponent />
                    </Sider>
                    <Drawer
                        open={openMenu}
                        onClose={() => setOpenMenu(false)}
                        placement='left'
                        width={200}
                        closable={false}
                    >
                        <MenuComponent />
                    </Drawer>
                    <Content className='contentStyle' style={{ marginLeft: collapsed ? 80 : 230, transition: 'all 0.2s', padding: 12 }}>
                        <Outlet />
                    </Content>
                </Layout>
            </Layout>
        </Space>

    );
}


function MenuComponent() {
    const [collapsed, setCollapsed] = useState(false);
    const navigate = useNavigate();
    const [openKeys, setOpenKeys] = useState(['/']);
    const rootSubmenuKeys = ['/salary-info', '/leave', '/Appraisals', '/Requisitions', '/assets-management', '/purchase', '/Onboarding', '/Training', '/Fleet-management', '/Staff Exit', '/ICT-Services'];

    const onOpenChange = (keys) => {
        const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
        setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
        if (latestOpenKey && rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
            setOpenKeys(keys);
        } else {
            setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
        }
    };
    
    return (
        <div>

            <Menu
                theme="light"
                mode="inline"
                defaultSelectedKeys={['/']}
                openKeys={openKeys}
                onOpenChange={onOpenChange}
                onClick={({ key }) => {
                    navigate(key);
                    setCollapsed(true);
                }}
                style={{
                    paddingBottom: '70px',
                    overflowY: 'scroll'
                }}
                className='scrollable-menu'
                items={[
                    {
                        key: '/',
                        icon: < AppstoreOutlined style={{ fontSize: 20 }} />,
                        label: 'Dashboard',
                    },
                    {
                        key: '/User-profile',
                        icon: <UsergroupAddOutlined style={{ fontSize: 20 }} />,
                        label: 'My Profile',
                    },
                    {
                        key: '/salary-info',
                        icon: <HiOutlineClipboardList style={{ fontSize: 20 }} />,
                        label: 'Salary Info',
                        children: [
                            {
                                key: "/payslip",
                                label: 'Payslip',
                            },
                            {
                                key: "/p9",
                                label: 'P9',
                            },
                            {
                                key: "/pay-change",
                                label: 'Pay Change Advise',
                            },
                        ]
                    },
                    {
                        key: '/Loan-Application',
                        icon: <FaRegMoneyBillAlt style={{ fontSize: 20 }} />,
                        label: 'Loan Application',
                        // children: [
                        //     {
                        //         key: "/payslip",
                        //         label: 'Payslip',
                        //     },
                        //     {
                        //         key: "/p9",
                        //         label: 'P9',
                        //     },
                        //     {
                        //         key: "/pay-change",
                        //         label: 'Pay Change Advise',
                        //     },
                        // ]
                    },
                    {
                        key: '/leave',
                        icon: <BiMessageError style={{ fontSize: 20 }} />,
                        label: 'Leave',
                        children: [
                            {
                                key: "/leave-requsition",
                                label: 'Leave Requsition',
                            },
                            {
                                key: "/leave-reimbursement",
                                label: 'Leave Reimbursement',
                            },
                            {
                                key: "/MaternityLeave",
                                label: 'Maternity Leave',
                            },
                            {
                                key: "/carry-forward",
                                label: 'Carry Forward',
                            },
                            {
                                key: "/applications-history",
                                label: 'Application History',
                            },
                        ]
                    },
                    {
                        key: '/Appraisals',
                        icon: <BiCalendar style={{ fontSize: 20 }} />,
                        label: 'Appraisals',
                        children: [
                            {
                                key: "/Appraisal-requsition",
                                label: 'Appraisal Requsition',
                            },
                            {
                                key: "/Supervisor-Review",
                                label: 'Supervisor Review List',
                            },

                        ]
                    },
                    {
                        key: '/StaffManagement',
                        icon: <FaUserFriends style={{ fontSize: 20 }} />,
                        label: 'Staff Management',
                        children: [
                            {
                                key: "/staffInduction",
                                label: 'Staff Induction',
                            },
                            {
                                key: "/Staff-Transfer",
                                label: 'Staff Transfer Request',
                            },
                        ]
                    },
                    {
                        key: '/Requisitions',
                        icon: <AccountBookOutlined style={{ fontSize: 20 }} />,
                        label: 'Requisitions',
                        children: [
                            {
                                key: "/Travel-requsition",
                                label: 'Travel Requsition',
                            },
                            {
                                key: "/Travel-Liquidation",
                                label: 'Travel Liquidation',
                            },
                            {
                                key: "/WorkShop-Requisition",
                                label: 'WorkShop Requisition',
                            },
                            {
                                key: "/Pettycash-Requsition",
                                label: 'Pettycash Requsition',
                            },
                            {
                                key: "/Staff-Claim-Requisition",
                                label: 'Staff Claim Requisition',
                            },

                        ]
                    },
                    {
                        key: '/assets-management',
                        icon: <TbTriangleSquareCircle style={{ fontSize: 20 }} />,
                        label: 'Assets Management',
                        children: [
                            {
                                key: "/Assigned-Assets",
                                label: 'Assigned Assets',
                            },
                            {
                                key: "/Asset-Transfer",
                                label: 'Asset Transfer',
                            },

                        ]
                    },
                    // {
                    //     key: '/purchase',
                    //     icon: <TbCreditCard style={{ fontSize: 20 }} />,
                    //     label: 'Purchase & Operations',
                    //     children: [
                    //         {
                    //             key: "/purchase-req",
                    //             label: 'Purchase Requistion',
                    //         },
                    //         {
                    //             key: "/store-req",
                    //             label: 'Store Requisition',
                    //         },
                    //         {
                    //             key: "/Asset-requisition",
                    //             label: 'Asset Requisition',
                    //         },

                    //     ]
                    // },
                    {
                        key: '/Fleet-management',
                        icon: <CarOutlined style={{ fontSize: 20 }} />,
                        label: 'Fleet Management',
                        children: [
                            {
                                key: "/Fuel-Requisition",
                                label: 'Fuel Requisition',
                            },
                            {
                                key: "/Fuel-card-recharge",
                                label: 'Fuel Card Recharge',
                            },
                            {
                                key: "/Service/Maintenance",
                                label: 'Service/Maintenance',
                            }
                        ]
                    },
                    {
                        key: '/ICT-Services',
                        icon: <DesktopOutlined style={{ fontSize: 20 }} />,
                        label: 'ICT Services',
                        children: [
                            {
                                key: "/user-support-req",
                                label: 'User Support Request',
                            },
                            {
                                key: "/ICT-Asset-Req",
                                label: 'ICT Asset Requisition',
                            },
                            {
                                key: "/Assigned-ICT-Req",
                                label: 'Assigned ICT Requests',
                            },
                            {
                                key: "/ICT-services-Maintenance",
                                label: 'ICT Maintenance',
                            }
                        ]
                    },
                    {
                        key: '/Training',
                        icon: <BookOutlined style={{ fontSize: 20 }} />,
                        label: 'Training',
                        children: [
                            {
                                key: "/ExamsPayment",
                                label: 'Pay for Exams',
                            },
                            {
                                key: "/Training-payment",
                                label: 'Pay For Training',
                            },
                            {
                                key: "/CertificationPayment",
                                label: 'Pay for Certification',
                            }
                        ]
                    },
                    {
                        key: '/Medical-service',
                        icon: <FaHandHoldingMedical style={{ fontSize: 20 }} />,
                        label: 'Medical Services',
                        children: [
                            {
                                key: "/Medical-claim-Form",
                                label: 'Medical Claim Form',
                            },
                            {
                                key: "/Insurance-Claim-Form",
                                label: 'Insurance Claim Form',
                            },
                        ]
                    },
                    {
                        key: '/Staff Exit',
                        icon: <FullscreenExitOutlined style={{ fontSize: 20 }} />,
                        label: 'Staff Exit',
                        children: [
                            {
                                key: "/exit-interview",
                                label: 'Exit Interview',
                            },
                            {
                                key: "/Staff-clearance",
                                label: 'Staff Clearance',
                            },
                        ]
                    },
                ]}
            />
        </div>
    )
}

export default Mainlayout;