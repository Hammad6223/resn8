import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import './Navbar.css'
import { icons } from '../Constant/Icons/Icons';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export const Navbar = () => {

  const navigate = useNavigate();

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        <span className='header_content' onClick={() => navigate('/landing')}>Resn8</span>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
          <div style={{ color: "white", fontSize: "30px" }}>{icons.ThreelineIcon}</div>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="collapsibleNavbar">
          <ul className="navbar-nav gap-5">
            <li className="nav-item">
              <NavLink className="nav-link header_content_one" to="/capture">Capture Voice</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link header_content_one" to="/report">Find Talent</NavLink>
            </li>
            <li className="nav-item me-5">
              <NavLink className="nav-link header_content_one" to="/signup">Sign in</NavLink>
            </li>
          </ul>
          <button className='join_button' onClick={() => navigate('/pricing')}>
            Join Now
          </button>
        </div>
      </div>
    </nav>
  )
}