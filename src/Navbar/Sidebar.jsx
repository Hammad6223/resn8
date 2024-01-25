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
import { Foot } from '../Footer/Foot';
import OvalImage from '../assets/images/Oval.png'
import { icons } from '../Constant/Icons/Icons';

export const Sidebar = () => {

  const [activeTab, setActiveTab] = useState('dashboard');

  const navigate = useNavigate();

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const tabData = [
    { id: 'dashboard', label: 'Dashboard', icon: icons.DashboardIcon },
    { id: 'findtalent', label: 'Find Talent', icon: icons.PersonOutline },
    { id: 'saveprofile', label: 'Saved Profile', icon: icons.PersonOutline },
    { id: 'orderhistory', label: 'Order History', icon: icons.NotepadIcon },
    { id: 'payment', label: 'Payment', icon: icons.HandCoinsIcon },
    { id: 'setting', label: 'Settings & Privacy', icon: icons.RiLockPasswordLine },
    { id: 'profile', label: 'Create Profile', icon: icons.PersonOutline },
    { id: 'custom', label: 'Customer Support', icon: icons.LiaSmsSolid },
  ];

  const MainLayout = () => {
    return (
      <>
        {activeTab === 'dashboard' && <Dashboard />}
        {activeTab === 'findtalent' && <FindTalent />}
        {activeTab === 'saveprofile' && <SaveProfile />}
        {activeTab === 'orderhistory' && <OrderHistory />}
        {activeTab === 'payment' && <Payment />}
        {activeTab === 'setting' && <Setting />}
        {activeTab === 'profile' && <CreateProfile />}
        {activeTab === 'custom' && <CustomSupport />}
      </>
    );
  };

  return (
    <section>
      {/* Start of Navbar */}

      <nav className="navbar navbar-expand-lg navbar-sidebar">
        <div className="container-fluid">
          <span className='header_content d-lg-block d-md-none d-sm-none d-none' onClick={() => navigate('/landing')}>Resn8</span>
          <button className="navbar-toggler" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
            <div style={{ color: "white", fontSize: "30px" }}>{icons.ThreelineIcon}</div>
          </button>
          <div className='d-flex gap-3'>
            <button className='join_H_button'>
              <div style={{ marginRight: '8px', color: "yellow", fontSize: "15px" }}>{icons.CrownIcon}</div>
              Join Now
            </button>
            <div className='bell_icon'>{icons.BellFillIcon}</div>
            <div className='bell_icon'>{icons.MessageRoundedDots}</div>
            <img src={OvalImage} alt="" />
          </div>
        </div>
      </nav>

      {/* End of Navbar */}

      {/* Start of Sidebar */}

      <div className="container-fluid" >
        <div className="row ">
          <div className="col-xxl-2 col-xl-2 col-lg-3 pt-4 d-lg-block d-md-none d-sm-none d-none sidebar sidebar_comp pb-5 p-0 ">
            <div className='d-flex flex-column gap-3'>
              {tabData.map((tab) => (
                <button
                  key={tab.id}
                  className={`dash_style d-flex gap-2 ps-4 ${activeTab === tab.id ? 'active' : ''}`}
                  onClick={() => handleTabChange(tab.id)}
                >
                  {tab.icon}
                  {tab.label}
                </button>
              ))}
              <button className='dash_style d-flex gap-2 ps-4 mt-5' onClick={() => navigate('/')}>
                {icons.LogOutIcon}
                Logout
              </button>
            </div>
          </div>
          <div className="col-xxl-10 col-xl-10 col-lg-9 col-md-12 col-sm-12 col-12 sidebar_comp dashboard_bg pb-5 p-0">
            <MainLayout />
          </div>
        </div>
      </div>

      {/* End of Sidebar */}

      <Foot />

      {/* Start of offcanvas */}

      <div className="offcanvas offcanvas-start offcan sidebar col-md-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
        <span className='header_content ps-4' onClick={() => navigate('/landing')}>Resn8</span>
        <div className='d-flex flex-column gap-3'>
          {tabData.map((tab) => (
            <button
              key={tab.id}
              className={`dash_style d-flex gap-2 ps-4 ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => handleTabChange(tab.id)}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
          <button className='dash_style d-flex gap-2 ps-4 mt-5' onClick={() => navigate('/')}>
            {icons.LogOutIcon}
            Logout
          </button>
        </div>
      </div>

      {/* End of offcanvas */}


    </section >
  )
}