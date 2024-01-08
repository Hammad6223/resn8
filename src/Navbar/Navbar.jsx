import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import './Navbar.css'
import { IoReorderThree } from "react-icons/io5";
import colors from '../Constant/Colors/colors'

export const Navbar = () => {

  const navigate = useNavigate();

  return (
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <span className='header_content' style={{color: colors.whiteColor}} onClick={() => navigate('/landing')}>Resn8</span>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="collapsibleNavbar">
            <ul className="navbar-nav gap-5">
              <li className="nav-item">
                <NavLink className ="nav-link header_content_one" style={{color: colors.whiteColor}} to = "/capture">Capture Voice</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link header_content_one" style={{color: colors.whiteColor}} to = "/report">Find Talent</NavLink>
              </li>
              <li className="nav-item me-5">
                <NavLink className="nav-link header_content_one" style={{color: colors.whiteColor}} to = "/signup">Sign in</NavLink>
              </li>
            </ul>
            <button className='join_button' style={{background: colors.primaryColor}} onClick={() => navigate('/pricing')}>
              <div className='join_name' style={{color: colors.whiteColor}}>
                Join Now
              </div>
            </button>
          </div>
          </div>
      </nav>
  )
}