import React, { useState } from 'react'
import './Payment.css'
import { FaCcVisa } from "react-icons/fa";
import { FaCcMastercard } from "react-icons/fa";
import { FaCcAmex } from "react-icons/fa6";
import { FaCcPaypal } from "react-icons/fa";
import { FaIdCard } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";



export const Payment = () => {

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
                                Add Payment
                            </div>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-md-12">
                            <div className="order_box pb-5">
                                <div className='ps-3 pe-3 pt-4'>
                                    <label className='account_p_style'>
                                        Account Name
                                    </label>
                                    <div className='position-relative'>
                                        <input type="text" placeholder='1234 1234 1234 1234' className='input_p_box mt-2' />
                                        <span className='icon_card d-flex gap-2'>
                                            <FaCcVisa className='icon_p_style' />
                                            <FaCcMastercard className='icon_p_style' />
                                            <FaCcAmex className='icon_p_style' />
                                            <FaCcPaypal className='icon_p_style' />
                                        </span>
                                    </div>
                                    <div className="row mt-4">
                                        <div className="col-md-6">
                                            <label className='account_p_style'>
                                                Account Number
                                            </label>
                                            <input type="text" placeholder='MM / YY' className='input_p_box mt-2' />
                                        </div>
                                        <div className="col-md-6">
                                            <label className='account_p_style'>
                                                CVC
                                            </label>
                                            <div className='position-relative'>
                                                <input type="text" placeholder='CVC' className='input_p_box mt-2' />
                                                <span className='icon_card d-flex gap-2'>
                                                    <FaIdCard className='icon_p_style' />
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row mt-4">
                                        <div className="col-md-6">
                                            <label className='account_p_style'>
                                                Routing Number
                                            </label>
                                            <div className="custom-dropdown mt-1">
                                                <select className='style_input'
                                                    value={selectedValue}
                                                    onChange={handleSelectChange}
                                                >
                                                    <option value="" disabled hidden>Select</option>
                                                    <option value="option1">India</option>
                                                    <option value="option2">China</option>
                                                    <option value="option2">Iran</option>
                                                </select>
                                                <IoMdArrowDropdown className="dropdown-icon" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <label className='account_p_style'>
                                                ZIP
                                            </label>
                                            <input type="text" placeholder='01234' className='input_p_box mt-2' />
                                        </div>
                                    </div>
                                    <div className='d-flex justify-content-end mt-4'>
                                        <button className='payment_btn'>
                                            Save Payment
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}