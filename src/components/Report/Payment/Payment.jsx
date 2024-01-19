import React, { useState } from 'react'
import './Payment.css'
import { icons } from '../../../Constant/Icons/Icons';

export const Payment = () => {

    const [selectedValue, setSelectedValue] = useState("");

    const handleSelectChange = (event) => {
        setSelectedValue(event.target.value);
    };

    return (
        <section>
            <div className="container-fluid dashboard_payment_bg">
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
                                            <div className='icon_p_style'>{icons.VisaIcon}</div>
                                            <div className='icon_p_style'>{icons.MastercardIcon}</div>
                                            <div className='icon_p_style'>{icons.AmexIcon}</div>
                                            <div className='icon_p_style'>{icons.PaypalIcon}</div>
                                        </span>
                                    </div>
                                    <div className="row mt-3">
                                        <div className="col-md-6">
                                            <label className='account_p_style'>
                                                Account Number
                                            </label>
                                            <input type="text" placeholder='MM / YY' className='input_p_box mt-2' />
                                        </div>
                                        <div className="col-md-6">
                                            <label className='account_p_style CVC'>
                                                CVC
                                            </label>
                                            <div className='position-relative'>
                                                <input type="text" placeholder='CVC' className='input_p_box mt-2' />
                                                <span className='icon_card d-flex gap-2'>
                                                    <div className='icon_p_style'>{icons.IdCardIcon}</div>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row mt-3">
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
                                                <div className="dropdown-icon">{icons.DropIcon}</div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <label className='account_p_style ZIP'>
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