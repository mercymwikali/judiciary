import React, { useState } from 'react';
import { Tabs, Card, Avatar, Descriptions, Skeleton, Tooltip, message, Button, Upload, DatePicker, Select } from 'antd';
import { MailOutlined, UploadOutlined } from '@ant-design/icons';
import logo from '../assets/Images/logo.png';

const { TabPane } = Tabs;

const UserProfile = () => {
  const [userData, setUserData] = useState({
    User_Signature: 'url_to_user_image',
    First_Name: 'John',
    Middle_Name: 'Doe',
    Last_Name: 'Smith',
    E_Mail: 'john.doe@example.com',
    No: '10568',
    Record_Type: 'Employee',
    Department_Name: 'HR',
    // Add other dummy data fields as needed
  });

  const [loading, setLoading] = useState(false); // Set to false since we're not fetching data

  const handleUpload = (info) => {
    if (info.file.status === 'done') {
      message.success(`${info.file.name} file uploaded successfully`);
      // You can update the user's profile picture URL in the state or send it to the server
      setUserData((prevUserData) => ({
        ...prevUserData,
        User_Signature: info.file.response.url,
      }));
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  };

  const uploadProps = {
    action: 'url_to_upload_endpoint', // Replace with your actual upload endpoint
    showUploadList: false,
    onChange: handleUpload,
    beforeUpload: (file) => {
      const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
      if (!isJpgOrPng) {
        message.error('You can only upload JPG/PNG file!');
      }
      return isJpgOrPng;
    },
  };

  return (
    <div>
      <Card>
        <div className="text-center">
          <img width={230} src={logo} className='ps-3 py-2' alt='logo' />
        </div>
        <Tabs defaultActiveKey="1">
          <TabPane tab="Profile Information" key="1">
            <Skeleton loading={loading} active>
              <>
                <Avatar size={100} src={userData.User_Signature} />
                <h2>{userData.First_Name} {userData.Middle_Name} {userData.Last_Name}</h2>
                <Descriptions className='py-4' title='General Information' >
                  <Descriptions.Item
                    label={
                      <Tooltip title="Employee Number">
                        <span>Employee No</span>
                      </Tooltip>
                    }
                    icon={<MailOutlined />}
                  >
                    {userData.No}
                  </Descriptions.Item>
                  <Descriptions.Item label="Title" icon={<MailOutlined style={{ fontSize: 24, color: '#2f463d' }} />}>
                    Mr
                  </Descriptions.Item>
                  <Descriptions.Item label="First Name" icon={<MailOutlined style={{ fontSize: 24, color: '#2f463d' }} />}>
                    John
                  </Descriptions.Item>
                  <Descriptions.Item label="Surname" icon={<MailOutlined style={{ fontSize: 24, color: '#2f463d' }} />}>
                    Doe
                  </Descriptions.Item>
                  <Descriptions.Item label="Other Name" icon={<MailOutlined style={{ fontSize: 24, color: '#2f463d' }} />}>
                    Smith
                  </Descriptions.Item>
                  <Descriptions.Item label="Job Title" icon={<MailOutlined style={{ fontSize: 24, color: '#2f463d' }} />}>
                    HR Manager
                  </Descriptions.Item>
                  <Descriptions.Item label="Current Position ID" icon={<MailOutlined style={{ fontSize: 24, color: '#2f463d' }} />}>
                    101
                  </Descriptions.Item>
                  <Descriptions.Item label="Designation" icon={<MailOutlined style={{ fontSize: 24, color: '#2f463d' }} />}>
                    Director, Audit & Risk Management
                  </Descriptions.Item>
                  <Descriptions.Item label="Current Duty Station" icon={<MailOutlined style={{ fontSize: 24, color: '#2f463d' }} />}>
                    027002
                  </Descriptions.Item>
                  <Descriptions.Item label="Current Job Grade" icon={<MailOutlined style={{ fontSize: 24, color: '#2f463d' }} />}>
                    JSG
                  </Descriptions.Item>
                  <Descriptions.Item label="Current Terms of Service" icon={<MailOutlined style={{ fontSize: 24, color: '#2f463d' }} />}>
                    1-Year-contract
                  </Descriptions.Item>
                  <Descriptions.Item label="Address" icon={<MailOutlined style={{ fontSize: 24, color: '#2f463d' }} />}>
                    027002
                  </Descriptions.Item>
                  <Descriptions.Item label="Postal Code" icon={<MailOutlined style={{ fontSize: 24, color: '#2f463d' }} />}>
                    027002
                  </Descriptions.Item>
                  <Descriptions.Item label="City" icon={<MailOutlined style={{ fontSize: 24, color: '#2f463d' }} />}>
                    027002
                  </Descriptions.Item>
                  <Descriptions.Item label="Country/Region" icon={<MailOutlined style={{ fontSize: 24, color: '#2f463d' }} />}>
                    027002
                  </Descriptions.Item>
                  <Descriptions.Item label="Phone No" icon={<MailOutlined style={{ fontSize: 24, color: '#2f463d' }} />}>
                    027002
                  </Descriptions.Item>
                  <Descriptions.Item label="County of Origin" icon={<MailOutlined style={{ fontSize: 24, color: '#2f463d' }} />}>
                    027002
                  </Descriptions.Item>
                  <Descriptions.Item label="County of Residence" icon={<MailOutlined style={{ fontSize: 24, color: '#2f463d' }} />}>
                    027002
                  </Descriptions.Item>
                  <Descriptions.Item label="Gender" icon={<MailOutlined style={{ fontSize: 24, color: '#2f463d' }} />}>
                    027002
                  </Descriptions.Item>
                  <Descriptions.Item label="Marital Status" icon={<MailOutlined style={{ fontSize: 24, color: '#2f463d' }} />}>
                    027002
                  </Descriptions.Item>
                  <Descriptions.Item label="Religion" icon={<MailOutlined style={{ fontSize: 24, color: '#2f463d' }} />}>
                    027002
                  </Descriptions.Item>
                  <Descriptions.Item label="Ethnicity" icon={<MailOutlined style={{ fontSize: 24, color: '#2f463d' }} />}>
                    027002
                  </Descriptions.Item>
                  <Descriptions.Item label="Directorate/Department" icon={<MailOutlined style={{ fontSize: 24, color: '#2f463d' }} />}>
                    027002
                  </Descriptions.Item>
                  <Descriptions.Item label="Default Responsibilty" icon={<MailOutlined style={{ fontSize: 24, color: '#2f463d' }} />}>
                    027002
                  </Descriptions.Item>
                </Descriptions>
                <Descriptions title='Communication Details'>
                  <Descriptions.Item label="Mobile Phone No" icon={<MailOutlined style={{ fontSize: 24, color: '#2f463d' }} />}>
                    1990-01-01
                  </Descriptions.Item>
                  <Descriptions.Item label="Address" icon={<MailOutlined style={{ fontSize: 24, color: '#2f463d' }} />}>
                    32
                  </Descriptions.Item>
                  <Descriptions.Item label="Address 2" icon={<MailOutlined style={{ fontSize: 24, color: '#2f463d' }} />}>
                    john.doe@gmail.com
                  </Descriptions.Item>
                  <Descriptions.Item label="Organizational Email" icon={<MailOutlined style={{ fontSize: 24, color: '#2f463d' }} />}>
                    123 Main Street, Cityville
                  </Descriptions.Item>
                  <Descriptions.Item label="Private Email" icon={<MailOutlined style={{ fontSize: 24, color: '#2f463d' }} />}>
                    123-45-6789
                  </Descriptions.Item>
                  <Descriptions.Item label="Signature" icon={<MailOutlined style={{ fontSize: 24, color: '#2f463d' }} />}>
                    url_to_signature_image
                  </Descriptions.Item>
                  <Descriptions.Item label="Upload  Picture" icon={<MailOutlined style={{ fontSize: 24, color: '#2f463d' }} />}>
                    <Upload {...uploadProps}>
                      <Button icon={<UploadOutlined />} size='medium' className=' pb-2'>Upload Professional Picture</Button>
                    </Upload>                  </Descriptions.Item>

                </Descriptions>
              </>
            </Skeleton>
          </TabPane>
          <TabPane tab="Administration Details" key="2">
            <Skeleton loading={loading} active>
              <>
                <Avatar size={100} src={userData.User_Signature} />
                <h2>{userData.First_Name} {userData.Middle_Name} {userData.Last_Name}</h2>
                <Descriptions className='py-4' title='Administration'>
                  <Descriptions.Item label="Date of Birth" icon={<MailOutlined style={{ fontSize: 24, color: '#2f463d' }} />}>
                    2020-01-01
                  </Descriptions.Item>
                  <Descriptions.Item label="Age" icon={<MailOutlined style={{ fontSize: 24, color: '#2f463d' }} />}>
                    2020-01-01
                  </Descriptions.Item>
                  <Descriptions.Item label="Employment Date" icon={<MailOutlined style={{ fontSize: 24, color: '#2f463d' }} />}>
                    2020-01-01
                  </Descriptions.Item>
                  <Descriptions.Item label="Last Promotion Date" icon={<MailOutlined style={{ fontSize: 24, color: '#2f463d' }} />}>
                    Active
                  </Descriptions.Item>
                  <Descriptions.Item label="Pension Scheme Join Date" icon={<MailOutlined style={{ fontSize: 24, color: '#2f463d' }} />}>
                    N/A
                  </Descriptions.Item>
                  <Descriptions.Item label="Medical Scheme Join Date" icon={<MailOutlined style={{ fontSize: 24, color: '#2f463d' }} />}>
                    N/A
                  </Descriptions.Item>
                  <Descriptions.Item label="Retirement Date" icon={<MailOutlined style={{ fontSize: 24, color: '#2f463d' }} />}>
                    EC123
                  </Descriptions.Item>
                  <Descriptions.Item label="Full/Part Time" icon={<MailOutlined style={{ fontSize: 24, color: '#2f463d' }} />}>
                    HR
                  </Descriptions.Item>
                  <Descriptions.Item label="Contract End Date" icon={<MailOutlined style={{ fontSize: 24, color: '#2f463d' }} />}>
                    D123
                  </Descriptions.Item>
                  <Descriptions.Item label="Notice Period" icon={<MailOutlined style={{ fontSize: 24, color: '#2f463d' }} />}>
                    D123
                  </Descriptions.Item>
                  <Descriptions.Item label="Send Alert To" icon={<MailOutlined style={{ fontSize: 24, color: '#2f463d' }} />}>
                    D123
                  </Descriptions.Item>
                  <Descriptions.Item label="Status" icon={<MailOutlined style={{ fontSize: 24, color: '#2f463d' }} />}>
                    D123
                  </Descriptions.Item>
                  <Descriptions.Item label="Inactive Date" icon={<MailOutlined style={{ fontSize: 24, color: '#2f463d' }} />}>
                    D123
                  </Descriptions.Item>
                  <Descriptions.Item label="Cause of Inactivity" icon={<MailOutlined style={{ fontSize: 24, color: '#2f463d' }} />}>
                    D123
                  </Descriptions.Item>
                  <Descriptions.Item label="Employment Contract Code" icon={<MailOutlined style={{ fontSize: 24, color: '#2f463d' }} />}>
                    D123
                  </Descriptions.Item>
                  <Descriptions.Item label="Statistics Group Code" icon={<MailOutlined style={{ fontSize: 24, color: '#2f463d' }} />}>
                    D123
                  </Descriptions.Item>
                  <Descriptions.Item label="Resource Code" icon={<MailOutlined style={{ fontSize: 24, color: '#2f463d' }} />}>
                    D123
                  </Descriptions.Item>
                  <Descriptions.Item label="Union Code" icon={<MailOutlined style={{ fontSize: 24, color: '#2f463d' }} />}>
                    D123
                  </Descriptions.Item>
                  <Descriptions.Item label="Union Membership Code" icon={<MailOutlined style={{ fontSize: 24, color: '#2f463d' }} />}>
                    D123
                  </Descriptions.Item>
                </Descriptions>
                <Descriptions className='pb-4' title='Organization Units'>
                  <Descriptions.Item label="Directorate" icon={<MailOutlined style={{ fontSize: 24, color: '#2f463d' }} />}>
                    D123
                  </Descriptions.Item>
                  <Descriptions.Item label="Department Code" icon={<MailOutlined style={{ fontSize: 24, color: '#2f463d' }} />}>
                    D123
                  </Descriptions.Item>
                  <Descriptions.Item label="Court Station" icon={<MailOutlined style={{ fontSize: 24, color: '#2f463d' }} />}>
                    D123
                  </Descriptions.Item>
                  <Descriptions.Item label="Employee Job Type" icon={<MailOutlined style={{ fontSize: 24, color: '#2f463d' }} />}>
                    D123
                  </Descriptions.Item>
                </Descriptions>
                <Descriptions title='Separation Details'>
                  <Descriptions.Item label="Reason for Exit" icon={<MailOutlined style={{ fontSize: 24, color: '#2f463d' }} />}>
                    D123
                  </Descriptions.Item>
                  <Descriptions.Item label="Exit Date" icon={<MailOutlined style={{ fontSize: 24, color: '#2f463d' }} />}>
                    <DatePicker className='col-auto' />
                  </Descriptions.Item>
                  <Descriptions.Item label="Date of Leaving" icon={<MailOutlined style={{ fontSize: 24, color: '#2f463d' }} />}>
                    <DatePicker className='col-auto' />
                  </Descriptions.Item>
                  <Descriptions.Item label="Exit Interview Conducted" icon={<MailOutlined style={{ fontSize: 24, color: '#2f463d' }} />}>
                    <Select className='col-6'>
                      <options defaultActiveKey="1">Yes</options>
                      <options >No</options>
                    </Select>
                  </Descriptions.Item>
                  <Descriptions.Item label="Exit Interview Date" icon={<MailOutlined style={{ fontSize: 24, color: '#2f463d' }} />}>
                    D123
                  </Descriptions.Item>
                  <Descriptions.Item label="Exit Interview Done By" icon={<MailOutlined style={{ fontSize: 24, color: '#2f463d' }} />}>
                    D123
                  </Descriptions.Item>
                  {/* <Descriptions.Item label="Exit Interview Conducted" icon={<MailOutlined style={{ fontSize: 24, color: '#2f463d' }} />}>
                    D123
                  </Descriptions.Item> */}
                </Descriptions>
              </>
            </Skeleton>
          </TabPane>
          <TabPane tab="Payment and Bank Details" key="3">
            <Skeleton loading={loading} active>
              <>
                <Avatar size={100} src={userData.User_Signature} />
                <h2>{userData.First_Name} {userData.Middle_Name} {userData.Last_Name}</h2>
                <Descriptions className='py-4' title='Payroll Details'>
                  <Descriptions.Item label="Currency Code" icon={<MailOutlined style={{ fontSize: 24, color: '#2f463d' }} />}>
                    1234567890
                  </Descriptions.Item>
                  <Descriptions.Item label="Pay Mode" icon={<MailOutlined style={{ fontSize: 24, color: '#2f463d' }} />}>
                    9876543210
                  </Descriptions.Item>
                  <Descriptions.Item label="K.R.A P.I.N" icon={<MailOutlined style={{ fontSize: 24, color: '#2f463d' }} />}>
                    USD
                  </Descriptions.Item>
                  <Descriptions.Item label="N.H.I.F No" icon={<MailOutlined style={{ fontSize: 24, color: '#2f463d' }} />}>
                    9876543210
                  </Descriptions.Item>
                  <Descriptions.Item label="N.S.S.F No" icon={<MailOutlined style={{ fontSize: 24, color: '#2f463d' }} />}>
                    1234567890
                  </Descriptions.Item>
                  <Descriptions.Item label="ID Number" icon={<MailOutlined style={{ fontSize: 24, color: '#2f463d' }} />}>
                    1234567890
                  </Descriptions.Item>
                  <Descriptions.Item label="Employee Category" icon={<MailOutlined style={{ fontSize: 24, color: '#2f463d' }} />}>
                    1234567890
                  </Descriptions.Item>
                  <Descriptions.Item label="Medical Claim Limit" icon={<MailOutlined style={{ fontSize: 24, color: '#2f463d' }} />}>
                    1234567890
                  </Descriptions.Item>
                </Descriptions>
                <Descriptions title='Primary Bank Details'>
                  <Descriptions.Item label="Bank Account No" icon={<MailOutlined style={{ fontSize: 24, color: '#2f463d' }} />}>
                    1234567890
                  </Descriptions.Item>
                  <Descriptions.Item label="Bank Name" icon={<MailOutlined style={{ fontSize: 24, color: '#2f463d' }} />}>
                    1234567890
                  </Descriptions.Item>
                  <Descriptions.Item label="Bank Branch" icon={<MailOutlined style={{ fontSize: 24, color: '#2f463d' }} />}>
                    1234567890
                  </Descriptions.Item>
                  <Descriptions.Item label="Bank Branch Name" icon={<MailOutlined style={{ fontSize: 24, color: '#2f463d' }} />}>
                    1234567890
                  </Descriptions.Item>
                </Descriptions>
                <Descriptions className='py-3' title='Secondary Bank Details'>
                  <Descriptions.Item label="Bank Account No" icon={<MailOutlined style={{ fontSize: 24, color: '#2f463d' }} />}>
                    1234567890
                  </Descriptions.Item>
                  <Descriptions.Item label="Bank Name" icon={<MailOutlined style={{ fontSize: 24, color: '#2f463d' }} />}>
                    1234567890
                  </Descriptions.Item>
                  <Descriptions.Item label="Bank Branch" icon={<MailOutlined style={{ fontSize: 24, color: '#2f463d' }} />}>
                    1234567890
                  </Descriptions.Item>
                  <Descriptions.Item label="Bank Branch Name" icon={<MailOutlined style={{ fontSize: 24, color: '#2f463d' }} />}>
                    1234567890
                  </Descriptions.Item>
                </Descriptions>
                <Descriptions className='py-3' title='Job Details'>
                  <Descriptions.Item label="Salary Scale" icon={<MailOutlined style={{ fontSize: 24, color: '#2f463d' }} />}>
                    EUR
                  </Descriptions.Item>
                  <Descriptions.Item label="Salary Pointer" icon={<MailOutlined style={{ fontSize: 24, color: '#2f463d' }} />}>
                    EUR
                  </Descriptions.Item>
                  <Descriptions.Item label="Employee Category" icon={<MailOutlined style={{ fontSize: 24, color: '#2f463d' }} />}>
                    EUR
                  </Descriptions.Item>
                </Descriptions>
              </>
            </Skeleton>
          </TabPane>
          <TabPane tab="Leave Details" key="4">
            <Skeleton loading={loading} active>
              <>
                <Avatar size={100} src={userData.User_Signature} />
                <h2>{userData.First_Name} {userData.Middle_Name} {userData.Last_Name}</h2>
                <Descriptions className='py-4' title='Leave Details'>
                  <Descriptions.Item label="Off Days" icon={<MailOutlined style={{ fontSize: 24, color: '#2f463d' }} />}>
                    1234567890
                  </Descriptions.Item>
                  <Descriptions.Item label="Leave Days B/F" icon={<MailOutlined style={{ fontSize: 24, color: '#2f463d' }} />}>
                    9876543210
                  </Descriptions.Item>
                  <Descriptions.Item label="Allocated Leave Days" icon={<MailOutlined style={{ fontSize: 24, color: '#2f463d' }} />}>
                    USD
                  </Descriptions.Item>
                  <Descriptions.Item label="Total (Leave Days)" icon={<MailOutlined style={{ fontSize: 24, color: '#2f463d' }} />}>
                    9876543210
                  </Descriptions.Item>
                  <Descriptions.Item label="Total Leave Taken" icon={<MailOutlined style={{ fontSize: 24, color: '#2f463d' }} />}>
                    1234567890
                  </Descriptions.Item>
                  <Descriptions.Item label="Leave Outstanding Balance" icon={<MailOutlined style={{ fontSize: 24, color: '#2f463d' }} />}>
                    1234567890
                  </Descriptions.Item>
                  <Descriptions.Item label="Leave Balance" icon={<MailOutlined style={{ fontSize: 24, color: '#2f463d' }} />}>
                    1234567890
                  </Descriptions.Item>
                  <Descriptions.Item label="Accrued Leave Days" icon={<MailOutlined style={{ fontSize: 24, color: '#2f463d' }} />}>
                    1234567890
                  </Descriptions.Item>
                  <Descriptions.Item label="Cash Per Leave Day" icon={<MailOutlined style={{ fontSize: 24, color: '#2f463d' }} />}>
                    1234567890
                  </Descriptions.Item>
                  <Descriptions.Item label="Cash-Leave Earned" icon={<MailOutlined style={{ fontSize: 24, color: '#2f463d' }} />}>
                    1234567890
                  </Descriptions.Item>
                  <Descriptions.Item label="Leave Status" icon={<MailOutlined style={{ fontSize: 24, color: '#2f463d' }} />}>
                    <Select className='col-6'>
                      <options>On Leave</options>
                      <options>Resumed</options>
                    </Select>
                  </Descriptions.Item>
                  <Descriptions.Item label="Leave Type" icon={<MailOutlined style={{ fontSize: 24, color: '#2f463d' }} />}>
                    1234567890
                  </Descriptions.Item>
                  <Descriptions.Item label="Leave Period" icon={<MailOutlined style={{ fontSize: 24, color: '#2f463d' }} />}>
                    1234567890
                  </Descriptions.Item>
                </Descriptions>
              </>
            </Skeleton>
          </TabPane>
        </Tabs>
      </Card>
    </div>
  );
};

export default UserProfile;
