import React from 'react';
import { DownOutlined, LogoutOutlined, UserOutlined } from '@ant-design/icons';
import { Dropdown, Space, Divider, Button, theme, Avatar, Badge } from 'antd';
import { Link } from 'react-router-dom';
const { useToken } = theme;
const items = [
    {
        key: '/user-profil',
        label: (
            <Link target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
                User Profile
            </Link>
        ),
    },
    {
        key: '/settings',
        label: (
            <Link target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
                Settings
            </Link>
        ),
    },
];
const Sigonout = () => {
    const { token } = useToken();
    const contentStyle = {
        backgroundColor: token.colorBgElevated,
        borderRadius: token.borderRadiusLG,
        boxShadow: token.boxShadowSecondary,
    };
    const menuStyle = {
        boxShadow: 'none',
    };
    return (
        <Dropdown
            menu={{
                items,
            }}
            dropdownRender={(menu) => (
                <div style={contentStyle}>
                    {React.cloneElement(menu, {
                        style: menuStyle,
                    })}
                    <Divider
                        style={{
                            margin: 0,
                        }}
                    />
                    <Space
                        style={{
                            padding: 8,
                        }}
                    >
                        <Link to='/login' className='text-decoration-none'>   <Button type="danger" className='d-flex gap-3' ><LogoutOutlined style={{ color: 'red' }} /><p className='text-danger'>Log Out</p></Button></Link>
                    </Space>
                </div>
            )}
        >
            <Link onClick={(e) => e.preventDefault()}>
                <div className='d-flex' style={{ gap: 3,  }}>
                    <Badge size='medium' className='pt-1'>
                        <Avatar
                            style={{
                                color: "#fff",
                            }}
                            icon={<UserOutlined />}
                        />
                    </Badge>
                    <DownOutlined className='ps-1 text-white' />


                </div>
            </Link>
        </Dropdown>
    );
};
export default Sigonout;