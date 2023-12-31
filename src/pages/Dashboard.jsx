import React from 'react'
import { Avatar, Card, Statistic } from 'antd';
import { SendOutlined, ArrowUpOutlined, InfoCircleOutlined, CreditCardOutlined } from '@ant-design/icons';
import Notification from '../components/Notification';
import Charts from '../components/Charts';
import { Link } from 'react-router-dom';
import ImprestBalance from './ImprestBalance';
import ClaimsCharts from '../components/ClaimsCharts';
import LeaveDaysChart from '../components/LeaveDaysChart';
import AccruedLeaveChart from '../components/AccruedLeaveChart';
import MyApprovalsList from './ApprovedLists';
import MyCalendar from '../components/MyCalendar';
import { RiBookOpenFill, RiTaskFill } from 'react-icons/ri';


function Dashboard({ imprestData }) {
  return (
    <div className="container-fluid px-1">
      <div className="row g-3">
        <div className="col-6 col-md-2">
          <Link to={'/My-Approvals'} className='text-decoration-none'>
            <Card className=' text-center text-white gy-3' style={{ backgroundColor: "#174734", border:"2px solid #2f463d" }}>
              <Avatar shape="square" size="large" icon={<RiBookOpenFill style={{ color: '#fff' }} />} style={{ backgroundColor: '#d0323a' }} />
              <p className='h4  py-1'>125</p>
              <p className=' py-1'>My Reports</p>
              <Statistic
                value={11.28}
                precision={2}
                valueStyle={{
                  color: '#fff',
                  fontSize: '18px'
                }}
                prefix={<ArrowUpOutlined style={{ fontSize: '2x' }} />}
                suffix="%"
              />
            </Card>
          </Link>

        </div>
        <div className="col-6 col-md-2">
          <Link to={'/applications-history'} className='text-decoration-none'>
            <Card className=' text-center text-white ' style={{ backgroundColor: "#c6a815", border:"2px solid #2f463d",  }}>
              <Avatar shape="square" size="large" icon={<SendOutlined style={{ color: '#fff' }} />} style={{ backgroundColor: '#22A550' }} />
              <p className='h4  py-1'>25</p>
              <p className=' py-1'>My Requests</p>
              <Statistic
                value={11.28}
                precision={2}
                valueStyle={{
                  color: '#fff',
                  fontSize: '18px'
                }}
                prefix={<ArrowUpOutlined style={{ fontSize: '2x' }} />}
                suffix="%"
              />
            </Card>
          </Link>

        </div>
        <div className="col-6 col-md-2">
          <Link to={'/Imprest-Balance'} className='text-decoration-none'>
            <Card className=' text-center text-white' style={{ backgroundColor: "#7b1113", border:"2px solid #2f463d" }}>
              <Avatar shape="square" size="large" icon={<CreditCardOutlined style={{ color: '#fff' }} />} style={{ backgroundColor: '#2f463d' }} />
              <p className='h4  py-1'>10</p>
              <p className='py-1'> My Leave Info</p>
              <Statistic
                value={11.28}
                precision={2}
                valueStyle={{
                  color: '#fff',
                  fontSize: '18px'
                }}
                prefix={<ArrowUpOutlined style={{ fontSize: '2x' }} />}
                suffix="%"
              />
            </Card>
          </Link>

        </div>
        <div className="col-6 col-md-2">
          <Link to={'/pay-change'} className='text-decoration-none'>
            <Card className=' text-center text-white' style={{ backgroundColor: "#22A550", border:"2px solid #2f463d" }}>
              <Avatar shape="square" size="large" icon={<RiTaskFill style={{ color: '#fff' }} />} style={{ backgroundColor: '#174734' }} />
              <p className='h4  py-1'>20</p>
              <p className=' py-1'>My Tasks List</p>
              <Statistic
                value={11.28}
                precision={2}
                valueStyle={{
                  color: '#fff',
                  fontSize: '18px'
                }}
                prefix={<ArrowUpOutlined style={{ fontSize: '2x' }} />}
                suffix="%"
              />
            </Card>
          </Link>

        </div>
        <div className="col-12 col-md-4">
          <Notification />
        </div>
      </div>
      <div className="row mt-3 g-3">
        <div className="col-12 col-md-8">
          <div className="ps-4" style={{ color: '#82ca9d' }}><h6>My Approved Claims</h6></div>
          <div className="div" style={{ width: '100%', height: '300px' }}>
            <Charts imprestData={imprestData} />
          </div>
        </div>
        <div className="col-12 col-md-4 px-3">
          <div className="ps-4" style={{ color: '#82ca9d' }}><h6>Disbursed Amounts by Category</h6></div>
          <ClaimsCharts />
        </div>
      </div>
      <div className="row mt-3 g-3">
        <div className="col-12 col-md-8">
          <div className="ps-4" style={{ color: '#82ca9d' }}><h6>My Approved Leave Days</h6></div>
          <div className="div" style={{ width: '100%', height: '300px' }}>
            <LeaveDaysChart/>
          </div>
        </div>
        <div className="col-12 col-md-4 px-3">
          <div className="ps-4" style={{ color: '#82ca9d' }}><h6>Leave Days Overview</h6></div>
          <AccruedLeaveChart />
        </div>
      </div>
      <div className="row mt-3 g-3">
        <div className="col-12 col-md-8">
          <div className="ps-4" style={{ color: '#82ca9d' }}><h6>My Approval List</h6></div>
          <div className="div" >
            <MyApprovalsList/>
          </div>
        </div>
        <div className="col-12 col-md-4 px-3">
          <div className="ps-4" style={{ color: '#82ca9d' }}><h6>My Task Calendar</h6></div>
          <MyCalendar />
        </div>
      </div>
    </div>
  );
}

export default Dashboard