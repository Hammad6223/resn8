import React from 'react'
import './Header.css'
import { NavLink } from 'react-bootstrap'
import { FaCrown } from "react-icons/fa";
import { GoBellFill } from "react-icons/go";
import { BiSolidMessageRoundedDots } from "react-icons/bi";
import OvalImage from '../assets/images/Oval.png'
import { IoReorderThreeOutline } from "react-icons/io5";



export const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid ps-4 pe-4">
                <span className='header_content'>Resn8</span>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                <IoReorderThreeOutline className="navbar-toggler-icon"/>
                </button>
                <div className="collapse navbar-collapse justify-content-lg-end justify-content-center gap-4" id="collapsibleNavbar">
                    <button className='join_H_button d-flex gap-2'>
                    <FaCrown style={{color: "yellow"}}/> Join Now
                    </button>
                    <div className='d-flex gap-3 mt-3'>
                    <GoBellFill className='bell_icon'/>
                    <BiSolidMessageRoundedDots className='bell_icon'/>
                    <img src={OvalImage} alt="" />
                    </div>
                </div>
            </div>
        </nav>
    )
}
