import React, { useState } from 'react'
import './Sidebar.css'
import { Dashboard } from '../components/Report/Dashboard/Dashboard';
import { IoReorderThreeOutline } from "react-icons/io5";
import { FaCrown } from "react-icons/fa";
import { GoBellFill } from "react-icons/go";
import { BiSolidMessageRoundedDots } from "react-icons/bi";
import OvalImage from '../assets/images/Oval.png'
import { LuLayoutDashboard } from "react-icons/lu";
import { IoPersonOutline } from "react-icons/io5";
import { PiNotepad } from "react-icons/pi";
import { PiHandCoins } from "react-icons/pi";
import { RiLockPasswordLine } from "react-icons/ri";
import { LiaSmsSolid } from "react-icons/lia";

export const Sidebar = () => {

  return (
    <section>
      <div className="d-flex">
        <div className="sidebar col-lg-2 navbar-expand-lg">
          <div className="collapse navbar-collapse" id="collapsibleNavbar">
            <div className='ps-4 w-100'>
              <span className='header_content'>Resn8</span>
              <div className='mt-5 d-flex flex-column gap-4'>
                <button className='dash_style d-flex gap-2'>
                  <LuLayoutDashboard />
                  Dashboard
                </button>
                <button className='dash_style d-flex gap-2'>
                  <IoPersonOutline />
                  Find Talent
                </button>
                <button className='dash_style d-flex gap-2'>
                  <IoPersonOutline />
                  Saved Profile
                </button>
                <button className='dash_style d-flex gap-2'>
                  <PiNotepad />
                  Order History
                </button>
                <button className='dash_style d-flex gap-2'>
                  <PiHandCoins />
                  Payment
                </button>
                <button className='dash_style d-flex gap-2'>
                  <RiLockPasswordLine />
                  Settings & Privacy
                </button>
                <button className='dash_style d-flex gap-2'>
                  <IoPersonOutline />
                  Create Profile
                </button>
                <button className='dash_style d-flex gap-2'>
                  <LiaSmsSolid />
                  Customer Support
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="content">
          <nav className="navbar justify-content-lg-end gap-3 pe-4">
            <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
              <IoReorderThreeOutline className="navbar-toggler-icon" />
            </button>
            <button className='join_H_button'>
              <FaCrown style={{ color: "yellow" }} /> Join Now
            </button>
            <GoBellFill className='bell_icon' />
            <BiSolidMessageRoundedDots className='bell_icon' />
            <img src={OvalImage} alt="" />
          </nav>
          <Dashboard />
          <div className="dashboard-content">
            <h2 style={{color: "white", paddingLeft: "20px", paddingTop: "50px"}}> Dashboard</h2>
            <p style={{color: "white", paddingLeft: "20px", paddingTop: "50px"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, totam? Sequi alias eveniet ut quas
               ullam delectus et quasi incidunt rem deserunt asperiores reiciendis assumenda doloremque provident,
              dolores aspernatur neque. </p>
          </div>
        </div>
      </div>
    </section>
  )
}