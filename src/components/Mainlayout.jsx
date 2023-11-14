import React, { useState } from 'react'; // Import useState
import { Layout, Menu, Badge, Avatar, Image, Space, Drawer } from 'antd'
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
import { HiOutlineClipboardList } from 'react-icons/hi';
import { BiCalendar, BiMessageError } from 'react-icons/bi';
import { TbTriangleSquareCircle, TbCreditCard } from 'react-icons/tb';
import { FaUserFriends } from 'react-icons/fa';
import Sigonout from './Signout';


const Mainlayout = () => {
    const [collapsed, setCollapsed] = useState(false);
    const [openMenu, setOpenMenu] = useState(false);
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
    }

    return (
        <Space direction='vertical'
            style={{ width: '100%' }}
        >
            <Layout>
                <Header className='headerstyle'>
                    <Link to='/' ><img width={180} src={logo} className='ps-3' alt='logo' /></Link>
                    <div style={{ backgroundColor: 'darkorange', height: '60px', paddingLeft: 12, paddingTop: 12 }} className='menuIcon'>
                        <MenuFoldOutlined style={{ color: '#fff', fontSize: 30 }} onClick={() => {
                            setOpenMenu(true);
                        }}></MenuFoldOutlined>
                    </div>
                    <div className="d-flex gap-4 pe-4"
                        style={{ justifyContent: 'space-evenly', alignItems: 'center', paddingRight: 12, cursor: 'pointer' }}>
                        <div className="d-flex gap-4">
                            <Badge count={10} dot>
                                <MailOutlined style={{ fontSize: 22, color: "#fff" }} />
                            </Badge>
                            <Badge count={20}>
                                <BellFilled style={{ fontSize: 22, color: "#fff" }} />
                            </Badge>
                        </div>

                        <Badge>
                            <Avatar
                                style={{
                                    fontSize: 22, color: "#fff"
                                }}
                                icon={<UserOutlined />}
                            />
                            <Sigonout />
                        </Badge>
                    </div>

                </Header>
                <Layout hasSider>
                    <Sider className='sideStyle'
                        collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}
                        breakpoint="lg"
                    >
                        <MenuComponent />
                    </Sider>
                    <Drawer open={openMenu}  // Use visible instead of open
                        onClose={() => {
                            setOpenMenu(false);
                        }}
                        placement='left'
                        width={200}
                        closable={false}>
                            <MenuComponent />
                    </Drawer>
                    <Content className='contentStyle'
                        style={{
                            marginLeft: collapsed ? 80 : 200,
                            transition: 'all 0.2s',
                            padding: 24,
                        }}>
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
                                    label: 'Pay Change Advance',
                                },
                            ]
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
                                    key: "/time-off",
                                    label: 'Time off Lieu',
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
                            key: '/Onboarding',
                            icon: <FaUserFriends style={{ fontSize: 20 }} />,
                            label: 'Staff Onboarding',
                            children: [
                                {
                                    key: "/staffInduction",
                                    label: 'Staff Induction',
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
                        {
                            key: '/login',
                            icon: <LogoutOutlined />,
                            label: 'Sign Out',
                            danger: true,
                            path: '/login'
                        },
                    ]}
                />
        </div>
    )
}

export default Mainlayout;