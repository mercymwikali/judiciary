import React from 'react'
import { Avatar, Card, Statistic } from 'antd';
import { UserOutlined, ArrowUpOutlined, UsergroupAddOutlined, CreditCardOutlined } from '@ant-design/icons';
import Notification from '../components/Notification';
import Charts from '../components/Charts';
function Dashboard() {
  return (
    <div className="container-fluid px-1">
      <div className="row g-3">
        <div className="col-md-2">
        <Card className=' text-center gy-3' style={{ backgroundColor: "#ffe5e7" }}>
            <Avatar shape="square" size="large" icon={<UserOutlined style={{ color: '#fff' }} />} style={{ backgroundColor: '#d0323a' }} />
            <p className='h4 text-primary py-2'>125</p>
            <p className='text-primary py-2'>My Approvals</p>
            <Statistic
              value={11.28}
              precision={2}
              valueStyle={{
                color: '#3f8600',
                fontSize: '18px'
              }}
              prefix={<ArrowUpOutlined style={{ fontSize: '2x' }} />}
              suffix="%"
            />
          </Card>
        </div>
        <div className="col-md-2">
        <Card className=' text-center' style={{ backgroundColor: "#e8fff0" }}>
            <Avatar shape="square" size="large" icon={<UsergroupAddOutlined style={{ color: '#fff' }} />} style={{ backgroundColor: '#22A550' }} />
            <p className='h4 text-primary py-2'>25</p>
            <p className='text-primary py-2'>My Leave Days</p>
            <Statistic
              value={11.28}
              precision={2}
              valueStyle={{
                color: '#3f8600',
                fontSize: '18px'
              }}
              prefix={<ArrowUpOutlined style={{ fontSize: '2x' }} />}
              suffix="%"
            />
          </Card>
        </div>
        <div className="col-md-2">
        <Card className=' text-center' style={{ backgroundColor: "#EEEEEE" }}>
            <Avatar shape="square" size="large" icon={<CreditCardOutlined style={{ color: '#fff' }} />} style={{ backgroundColor: '#272425' }} />
            <p className='h4 text-primary '>$1000</p>
            <p className='text-primary py-1'>My Imperest Balance</p>
            <Statistic
              value={11.28}
              precision={2}
              valueStyle={{
                color: '#3f8600',
                fontSize: '18px'
              }}
              prefix={<ArrowUpOutlined style={{ fontSize: '2x' }} />}
              suffix="%"
            />
          </Card>
        </div>
        <div className="col-md-2">
        <Card className=' text-center' style={{ backgroundColor: "#ffe5e7" }}>
            <Avatar shape="square" size="large" icon={<CreditCardOutlined style={{ color: '#fff' }} />} style={{ backgroundColor: '#272425' }} />
            <p className='h4 text-primary'>$1000</p>
            <p className='text-primary py-1'>My Imperest Balance</p>
            <Statistic
              value={11.28}
              precision={2}
              valueStyle={{
                color: '#3f8600',
                fontSize: '18px'
              }}
              prefix={<ArrowUpOutlined style={{ fontSize: '2x' }} />}
              suffix="%"
            />
          </Card>
        </div>
        <div className="col-12 col-md-4">
          <Notification />
        </div>
      </div>
      <div className="row g-3 mt-2">
      </div>
    </div>
  );
}

export default Dashboard