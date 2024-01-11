import React, { useState } from 'react'
import './Dashboard.css'
import { HiUserGroup } from "react-icons/hi";
import { MdArrowOutward } from "react-icons/md";
import { GiReceiveMoney } from "react-icons/gi";
import { FiArrowDownLeft } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";
import { GiProgression } from "react-icons/gi";
import { BsPersonFillCheck } from "react-icons/bs";
import Progress from '../../../assets/images/bar.png'



export const Dashboard = () => {

  const data = [
    {
      icon: <HiUserGroup className='grp_icon' />,
      title: 'Total User',
      amount: '$120,784.02',
      percentage: '12.3%',
      change: '+1,453.89 today',
    },
    {
      icon: <GiProgression className='grp_icon' />,
      title: 'Total Revenue',
      amount: '$120,784.02',
      percentage: '12.3%',
      change: '+1,453.89 today',
    },
  ];

  const data1 = [
    {
      icon: <BsPersonFillCheck className='grp_icon' />,
      title: 'Subscribed Customer',
      amount: '$120,784.02',
      percentage: '12.3%',
      change: '+1,453.89 today',
      color: 'red',
      arrowIcon: <FiArrowDownLeft style={{ color: 'red' }} />,
    },
    {
      icon: <GiReceiveMoney className='grp_icon' />,
      title: 'Average revenue per user (ARPU)',
      amount: '$120,784.02',
      percentage: '12.3%',
      change: '+1,453.89 today',
      arrowIcon: <MdArrowOutward />,
    },
  ];

  const data2 = [
    {
      title: 'Monthly Recurring Revenue (MRR)',
      buttonLabel: 'Month',
      amount: '$16,400.12',
      percentage: '12.3%',
      profits: {
        label: 'Profit',
        dotStyle: { background: '' },
      },
      losses: {
        label: 'Loss',
        dotStyle: { background: 'grey' },
      },
      ticks: ['20K', '15K', '10K', '5K', '0'],
      months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    },
  ];

  return (
    <section>
      <div className="container-fluid dashboard_bg">
        <div className="container pt-5">
          <div className="row">
            <div className="col-xxl-6 col-xl-6 col-lg-6">
              <div className="row">
                {data.map((item, index) => (
                  <div className="col-sm-6" key={index}>
                    <div className='dash_box1'>
                      <div className='ps-4 pt-3'>
                        <div className='d-flex gap-2'>
                          <div className='dash_circle'>{item.icon}</div>
                          <div className='total_d_style mt-1'>{item.title}</div>
                        </div>
                        <div className='text_d_style mt-2'>{item.amount}</div>
                        <div className='text1_d_style d-flex gap-2 mt-2'>
                          <MdArrowOutward />
                          {item.percentage}
                          <span className='color_d'>{item.change}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="row mt-3">
                {data1.map((item, index) => (
                  <div className="col-sm-6" key={index}>
                    <div className='dash_box1'>
                      <div className='ps-4 pt-3'>
                        <div className='d-flex gap-2'>
                          <div className='dash_circle'>{item.icon}</div>
                          <div className='total_d_style mt-1'>{item.title}</div>
                        </div>
                        <div className='text_d_style mt-2'>{item.amount}</div>
                        <div className='text1_d_style d-flex gap-2 mt-2'>
                          {item.arrowIcon}
                          {item.percentage}
                          <span className='color_d'>{item.change}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-6">
              {data2.map((item, index) => (
                <div className='dash_box2' key={index}>
                  <div className='ps-4 pt-4'>
                    <div className='row justify-content-between'>
                      <div className='col-sm-7 col-12 monthly_d_style'>{item.title}</div>
                      <button className='col-sm-4 col-12 month_btn_d me-4 d-flex gap-2'>
                        {item.buttonLabel}<IoIosArrowDown />
                      </button>
                    </div>
                    <div className='row mt-3'>
                      <div className='col-sm-6'>
                        <div className='d-flex gap-2'>
                          <div className='d2_style'>{item.amount}</div>
                          <div className='d_circle_style mt-2'>
                            <MdArrowOutward />{item.percentage}
                          </div>
                        </div>
                      </div>
                      <div className='col-sm-6'>
                        <div className='d-flex gap-5'>
                          <div className='d-flex gap-2'>
                            <div className='dot_d_style mt-3' style={item.profits.dotStyle} />
                            <div className='p_d_style mt-2'>{item.profits.label}</div>
                          </div>
                          <div className='d-flex gap-2'>
                            <div className='dot_d_style mt-3' style={item.losses.dotStyle} />
                            <div className='p_d_style mt-2'>{item.losses.label}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row mt-4">
                      <div className="col-1 d-flex flex-column gap-4 p-0">
                        {item.ticks.map((tick, idx) => (
                          <div className='k_style' key={idx}>{tick}</div>
                        ))}
                      </div>
                      <div className="col-10 p-0">
                        <div className='img_div'>
                          <img src={Progress} alt="" style={{ width: "100%" }} />
                        </div>
                      </div>
                    </div>
                    <div className='d-flex month mt-2'>
                      {item.months.map((month, idx) => (
                        <div className='k_style' key={idx}>{month}</div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}