import React, { useState } from 'react'
import './Setting.css'
import { FaCcVisa } from "react-icons/fa";
import { FaCcMastercard } from "react-icons/fa";
import { FaCcAmex } from "react-icons/fa6";
import { FaCcPaypal } from "react-icons/fa";
import { FaIdCard } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";



export const Setting = () => {

    const [selectedValue, setSelectedValue] = useState("");

    const handleSelectChange = (event) => {
        setSelectedValue(event.target.value);
    };

    return (
        <section>
            <div className="container-fluid dashboard_bg">
                <div className="container pt-4">
                    <div className="row">
                        <div className="col-md-12">
                            <div className='find_browse_style'>
                                Change Password
                            </div>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-md-12">
                            <div className="order_box pb-5">
                                <div className='ps-3 pe-3 pt-4'>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label className='account_p_style'>
                                                Old Password
                                            </label>
                                            <input type="password" placeholder='Enter Your Old Password' className='input_p_box mt-2' />
                                        </div>
                                        <div className="col-md-6">
                                            <label className='account_p_style'>
                                                New Password
                                            </label>
                                            <input type="password" placeholder='Enter Your New Password' className='input_p_box mt-2' />
                                        </div>
                                    </div>
                                    <div className="row mt-4">
                                        <div className="col-md-6">
                                            <label className='account_p_style'>
                                                Confirm
                                            </label>
                                            <input type="password" placeholder='Enter Your Confirm Password' className='input_p_box mt-2' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-md-12">
                            <div className='find_browse_style'>
                                Personal Information
                            </div>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-md-12">
                            <div className="order_box pb-5">
                                <div className='ps-3 pe-3 pt-4'>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label className='account_p_style'>
                                                Name
                                            </label>
                                            <input type="text" placeholder='Enter Your Name' className='input_p_box mt-2' />
                                        </div>
                                        <div className="col-md-6">
                                            <label className='account_p_style'>
                                                Email
                                            </label>
                                            <input type="text" placeholder='Select Your Email' className='input_p_box mt-2' />
                                        </div>
                                    </div>
                                    <div className="row mt-4">
                                        <div className="col-md-6">
                                            <label className='account_p_style'>
                                                Phone Number
                                            </label>
                                            <input type="number" placeholder='Select Your Number' className='input_p_box mt-2' />
                                        </div>
                                        <div className="col-md-6">
                                            <label className='account_p_style'>
                                                Company Name
                                            </label>
                                            <input type="text" placeholder='Enter Your Company Name' className='input_p_box mt-2' />
                                        </div>
                                    </div>
                                    <div className="row mt-4">
                                        <div className="col-md-6">
                                            <label className='account_p_style'>
                                                Company Role
                                            </label>
                                            <input type="text" placeholder='Enter Your Company Role' className='input_p_box mt-2' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='d-flex justify-content-end mt-5'>
                        <button className='payment_btn'>
                            Save Changes
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}