import React from 'react';
import { DownOutlined, LogoutOutlined } from '@ant-design/icons';
import { Dropdown, Space, Divider, Button, theme } from 'antd';
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
                     <Link to='/login' className='text-decoration-none'>   <Button type="danger" className='d-flex gap-3' ><LogoutOutlined style={{color:'red'}}/><p className='text-danger'>Log Out</p></Button></Link>
                    </Space>
                </div>
            )}
        >
            <Link onClick={(e) => e.preventDefault()}>
                <Space style={{ gap: 3, paddingBlockStart: 3 }}>
                    <p className='px-2 text-white'>Username <DownOutlined  className='ps-1 text-white' /></p>
                

                </Space>
            </Link>
        </Dropdown>
    );
};
export default Sigonout;