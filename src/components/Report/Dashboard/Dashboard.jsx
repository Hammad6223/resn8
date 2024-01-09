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

  const datas = [
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

  return (
    <section>
      <div className="container-fluid">
        <div className="row pt-5 ps-2 pe-2">
          <div className="col-md-6">
            <div className="row">
              {data.map((item, index) => (
                <div className="col-md-6" key={index}>
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
            <div className="row mt-5">
              {datas.map((item, index) => (
                <div className="col-md-6" key={index}>
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
          <div className="col-md-6">
            <div className='dash_box2'>
              <div className='ps-4 pt-4'>
                <div className='d-flex justify-content-between'>
                  <div className='monthly_d_style'>
                    Monthly Recurring Revenue (MRR)
                  </div>
                  <button className='month_btn_d me-4 d-flex gap-2'>
                    Month<IoIosArrowDown />
                  </button>
                </div>
                <div className='d-flex justify-content-between me-4 mt-3'>
                  <div className='d-flex gap-3'>
                    <div className='d2_style'>
                      $16,400.12
                    </div>
                    <div className='d_circle_style mt-2'>
                      <MdArrowOutward />
                      12.3%
                    </div>
                  </div>
                  <div className='d-flex gap-4'>
                    <div className='d-flex gap-2'>
                      <div className='dot_d_style mt-3' />
                      <div className='p_d_style mt-2'>
                        Profit
                      </div>
                    </div>
                    <div className='d-flex gap-2'>
                      <div className='dot_d_style mt-3' style={{ background: "grey" }} />
                      <div className='p_d_style mt-2'>
                        Loss
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row mt-4">
                  <div className="col-1 d-flex flex-column gap-4 p-0">
                    <div className='k_style'>
                      20K
                    </div>
                    <div className='k_style'>
                      15K
                    </div>
                    <div className='k_style'>
                      10K
                    </div>
                    <div className='k_style'>
                      5K
                    </div>
                    <div className='k_style'>
                      0
                    </div>
                  </div>
                  <div className="col-10 p-0 ps-4 pt-4">
                    <img src={Progress} alt="" />
                  </div>
                </div>
                <div className='d-flex gap-5 ps-5 mt-2'>
                  <div className='k_style ps-4'>Jan</div>
                  <div className='k_style ps-2'>Feb</div>
                  <div className='k_style ps-2'>Mar</div>
                  <div className='k_style ps-2'>Apr</div>
                  <div className='k_style ps-2'>May</div>
                  <div className='k_style ps-2'>Jun</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}