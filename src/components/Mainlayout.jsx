import React from 'react'
import { Layout, Menu, Badge, Avatar, Image, Space } from 'antd'
import Sider from 'antd/es/layout/Sider'
import { Content, Footer, Header } from 'antd/es/layout/layout'
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    LogoutOutlined,
    UsergroupAddOutlined,
    MoneyCollectOutlined,
    UserOutlined,
    AccountBookOutlined,
    AppstoreOutlined,
    HourglassFilled,
    BellFilled,
    MailOutlined
} from '@ant-design/icons';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import logo from '../assets/Images/logo.png';
import { HiOutlineClipboardList } from 'react-icons/hi';
import { BiCalendar, BiMessageError } from 'react-icons/bi';
import { TbTriangleSquareCircle, TbCreditCard } from 'react-icons/tb';
import Sigonout from './Signout';


const Mainlayout = () => {
    const navigate = useNavigate();

    return (
        <Space direction='vertical'
            style={{ width: '100%' }}
            size={[0, 48]}>
            <Layout>
                <Header className='headerstyle'>
                    <Link to='/' ><img width={180} src={logo} className='ps-3' alt='logo' /></Link>
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
                    >
                        <Menu
                            theme="light"
                            mode="inline"
                            defaultSelectedKeys={['/']}
                            onClick={({ key }) => {
                                navigate(key);
                            }}
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
                                {
                                    key: '/purchase',
                                    icon: <TbCreditCard style={{ fontSize: 20 }} />,
                                    label: 'Purchase & Operations',
                                    children: [
                                        {
                                            key: "/purchase-req",
                                            label: 'Purchase Requistion',
                                        },
                                        {
                                            key: "/store-req",
                                            label: 'Store Requisition',
                                        },
                                        {
                                            key: "/Asset-requisition",
                                            label: 'Asset Requisition',
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
                                    key: '/login',
                                    icon: <LogoutOutlined />,
                                    label: 'Sign Out',
                                    danger: true,
                                    path: '/login'
                                },
                            ]}
                        />
                    </Sider>
                    <Content className='contentStyle'
                        style={{
                            marginLeft: 230,
                            padding: 24,
                        }}>
                        <Outlet />
                    </Content>

                </Layout>
            </Layout>
        </Space>

    );
}

export default Mainlayout;