import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './Sidebar.css'
import { Dashboard } from '../components/Report/Dashboard/Dashboard';
import { FindTalent } from '../components/Report/FindTalent/FindTalent';
import { SaveProfile } from '../components/Report/SaveProfile/SaveProfile';
import { OrderHistory } from '../components/Report/OrderHistory/OrderHistory';
import { Payment } from '../components/Report/Payment/Payment';
import { Setting } from '../components/Report/Settings&Privacy/Setting';
import { CreateProfile } from '../components/Report/CreateProfile/CreateProfile';
import { CustomSupport } from '../components/Report/CustomSupport/CustomSupport';
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
import { IoIosLogOut } from "react-icons/io";


export const Sidebar = () => {

  const [activeTab, setActiveTab] = useState('dashboard');

  const navigate = useNavigate();

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <section>
      <div className="d-flex">
        <div className="sidebar col-xl-2 navbar-expand-xl ">
          <div className="collapse navbar-collapse" id="collapsibleNavbar">
            <div className='w-100'>
              <span className='header_content ps-4' onClick={() => navigate('/landing')}>Resn8</span>
              <div className='mt-5 d-flex flex-column gap-3'>
                <button
                  className={`dash_style d-flex gap-2 ps-4 ${activeTab === 'dashboard' ? 'active' : ''}`}
                  onClick={() => handleTabChange('dashboard')}>
                  <LuLayoutDashboard />
                  Dashboard
                </button>
                <button
                  className={`dash_style d-flex gap-2 ps-4 ${activeTab === 'findtalent' ? 'active' : ''}`}
                  onClick={() => handleTabChange('findtalent')}>
                  <IoPersonOutline />
                  Find Talent
                </button>
                <button className={`dash_style d-flex gap-2 ps-4 ${activeTab === 'saveprofile' ? 'active' : ''}`}
                  onClick={() => handleTabChange('saveprofile')}>
                  <IoPersonOutline />
                  Saved Profile
                </button>
                <button className={`dash_style d-flex gap-2 ps-4 ${activeTab === 'orderhistory' ? 'active' : ''}`}
                  onClick={() => handleTabChange('orderhistory')}>
                  <PiNotepad />
                  Order History
                </button>
                <button className={`dash_style d-flex gap-2 ps-4 ${activeTab === 'payment' ? 'active' : ''}`}
                  onClick={() => handleTabChange('payment')}>
                  <PiHandCoins />
                  Payment
                </button>
                <button className={`dash_style d-flex gap-2 ps-4 ${activeTab === 'setting' ? 'active' : ''}`}
                  onClick={() => handleTabChange('setting')}>
                  <RiLockPasswordLine />
                  Settings & Privacy
                </button>
                <button className={`dash_style d-flex gap-2 ps-4 ${activeTab === 'profile' ? 'active' : ''}`}
                  onClick={() => handleTabChange('profile')}>
                  <IoPersonOutline />
                  Create Profile
                </button>
                <button className={`dash_style d-flex gap-2 ps-4 ${activeTab === 'custom' ? 'active' : ''}`}
                  onClick={() => handleTabChange('custom')}>
                  <LiaSmsSolid />
                  Customer Support
                </button>
                <button className='dash_style d-flex gap-2 ps-4' style={{ marginTop: "100px" }}>
                  <IoIosLogOut />
                  Logout
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12 p-0 ">
              <nav className="navbar justify-content-xl-end gap-3 pe-4 mr-auto">
                <button className="navbar-toggler d-xl-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                  <IoReorderThreeOutline className="navbar-toggler-icon" />
                </button>
                <button className='join_H_button'>
                  <FaCrown style={{ color: "yellow" }} /> Join Now
                </button>
                <GoBellFill className='bell_icon' />
                <BiSolidMessageRoundedDots className='bell_icon' />
                <img src={OvalImage} alt="" />
              </nav>
              {activeTab === 'dashboard' && <Dashboard />}
              {activeTab === 'findtalent' && <FindTalent />}
              {activeTab === 'saveprofile' && <SaveProfile />}
              {activeTab === 'orderhistory' && <OrderHistory />}
              {activeTab === 'payment' && <Payment />}
              {activeTab === 'setting' && <Setting />}
              {activeTab === 'profile' && <CreateProfile />}
              {activeTab === 'custom' && <CustomSupport />}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}