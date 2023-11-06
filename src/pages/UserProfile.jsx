import React, { useState, useEffect } from 'react';
import { Tabs, Card, Avatar, Descriptions } from 'antd';
import { UserOutlined, MailOutlined, PhoneOutlined } from '@ant-design/icons';

const { TabPane } = Tabs;

const UserProfile = () => {
  const [userData, setUserData] = useState(null);

  // Simulated fetch request (comment out this part when integrating with a real API)
  useEffect(() => {
    // Simulated user data
    const fakeUserData = {
      profileInformation: {
        profilePicture: 'URL_TO_PROFILE_PICTURE',
        name: 'John Doe',
        email: 'johndoe@court.go.ke',
        staffNumber: '12345',
        role: 'Court Registrar',
        department: 'Legal Department',
        courtStation: 'Milimani Court',
      },
      personalDetails: {
        idNumber: '21628843',
        gender: 'Male',
        maritalStatus: 'Married',
        nationality: 'Kenyan',
        county: 'Nairobi',
        dateOfBirth: '1977-08-22',
      },
      workInformation: {
        // Add work-related properties here if applicable
      },
    };

    // Simulate fetching data from an API (comment this out when integrating with a real API)
    setTimeout(() => {
      setUserData(fakeUserData);
    }, 1000); // Simulate a 1-second delay
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <Card>
        <Tabs defaultActiveKey="1">
          <TabPane tab="Profile Information" key="1">
            {userData && (
              <>
                <Avatar size={100} src={userData.profileInformation.profilePicture} />
                <h2>{userData.profileInformation.name}</h2>
                <Descriptions title="User Info">
                  <Descriptions.Item label="Email" icon={<MailOutlined />}>{userData.profileInformation.email}</Descriptions.Item>
                  <Descriptions.Item label="staffNumber" icon={<MailOutlined style={{ fontSize: 24, color:'#2f463d'}} />}>{userData.profileInformation.staffNumber}</Descriptions.Item>
                  <Descriptions.Item label="role" icon={<MailOutlined style={{ fontSize: 24, color:'#2f463d'}} />}>{userData.profileInformation.role}</Descriptions.Item>
                  <Descriptions.Item label="Department" icon={<MailOutlined style={{ fontSize: 24, color:'#2f463d'}} />}>{userData.profileInformation.department}</Descriptions.Item>

                  {/* Add other profile information here */}
                </Descriptions>
              </>
            )}
          </TabPane>
          <TabPane tab="Personal Details" key="2">
            {userData && (
              <>
                <Avatar size={100} src={userData.profileInformation.profilePicture} />
                <h2>{userData.profileInformation.name}</h2>
                <Descriptions title="Personal Details">
                  <Descriptions.Item label="ID Number">{userData.personalDetails.idNumber}</Descriptions.Item>
                  {/* Add other personal details here */}
                </Descriptions>
              </>
            )}
          </TabPane>
          <TabPane tab="Work Information" key="3">
            {userData && (
              <>
                <Avatar size={100} src={userData.profileInformation.profilePicture} />
                <h2>{userData.profileInformation.name}</h2>
                <Descriptions title="Work Information">
                  {/* Add work-related information here */}
                </Descriptions>
              </>
            )}
          </TabPane>
        </Tabs>
      </Card>
    </div>
  );
}

export default UserProfile;
