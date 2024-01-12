import React, { useState } from 'react'
import './CreateProfile.css'
import { IoMdArrowDropdown } from "react-icons/io";
import { IoIosAttach } from "react-icons/io";
import { MdPhotoCamera } from "react-icons/md";




export const CreateProfile = () => {

    const [selectedValues, setSelectedValues] = useState({
        accent: '',
        gender: '',
        age: '',
        language: '',
        tone: '',
        purpose: '',
    });

    const handleSelectChange = (event, field) => {
        setSelectedValues((prevValues) => ({
            ...prevValues,
            [field]: event.target.value
        }));
    };

    return (
        <section>
            <div className="container-fluid dashboard_bg">
                <div className="container pt-4">
                    <div className="row">
                        <div className="col-md-10">
                            <div className='find_browse_style'>
                                Account Information
                            </div>
                        </div>
                        <div className="col-md-2">
                            <div className='d-flex justify-content-end'>
                                <button className='edit_btn'>
                                    Edit
                                </button>
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
                                                Accent
                                            </label>
                                            <div className="custom-dropdown mt-1">
                                                <select
                                                    className='style_input'
                                                    value={selectedValues.accent}
                                                    onChange={(e) => handleSelectChange(e, 'accent')}
                                                >
                                                    <option value="" disabled hidden>Select Your Accent</option>
                                                    <option value="option1">Primary</option>
                                                    <option value="option2">Seconday</option>
                                                </select>
                                                <IoMdArrowDropdown className="dropdown-icon" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row mt-4">
                                        <div className="col-md-6">
                                            <label className='account_p_style'>
                                                Price
                                            </label>
                                            <input type="text" placeholder='Enter Your Name' className='input_p_box mt-2' />
                                        </div>
                                        <div className="col-md-6">
                                            <label className='account_p_style'>
                                                Gender
                                            </label>
                                            <div className="custom-dropdown mt-1">
                                                <select
                                                    className='style_input'
                                                    value={selectedValues.gender}
                                                    onChange={(e) => handleSelectChange(e, 'gender')}
                                                >
                                                    <option value="" disabled hidden>Select Your Gender</option>
                                                    <option value="option1">Male</option>
                                                    <option value="option2">Female</option>
                                                </select>
                                                <IoMdArrowDropdown className="dropdown-icon" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row mt-4">
                                        <div className="col-md-6">
                                            <label className='account_p_style'>
                                                Age Range
                                            </label>
                                            <div className="custom-dropdown mt-1">
                                                <select
                                                    className='style_input'
                                                    value={selectedValues.age}
                                                    onChange={(e) => handleSelectChange(e, 'age')}
                                                >
                                                    <option value="" disabled hidden>Select Your Age</option>
                                                    <option value="option1">Infant</option>
                                                    <option value="option2">Teen</option>
                                                    <option value="option2">Adult</option>
                                                </select>
                                                <IoMdArrowDropdown className="dropdown-icon" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <label className='account_p_style'>
                                                Upload Voice Sample
                                            </label>
                                            <div className="custom-dropdown">
                                                <input type="text" placeholder='Upload Your Voice Sample' className='input_p_box mt-2' />
                                                <IoIosAttach className="dropdown-icon" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row mt-4">
                                        <div className="col-md-6">
                                            <label className='account_p_style'>
                                                Language
                                            </label>
                                            <div className="custom-dropdown mt-1">
                                                <select
                                                    className='style_input'
                                                    value={selectedValues.language}
                                                    onChange={(e) => handleSelectChange(e, 'language')}
                                                >
                                                    <option value="" disabled hidden>Select Your Language</option>
                                                    <option value="option1">English</option>
                                                    <option value="option2">French</option>
                                                </select>
                                                <IoMdArrowDropdown className="dropdown-icon" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <label className='account_p_style'>
                                                Tone
                                            </label>
                                            <div className="custom-dropdown mt-1">
                                                <select
                                                    className='style_input'
                                                    value={selectedValues.tone}
                                                    onChange={(e) => handleSelectChange(e, 'tone')}
                                                >
                                                    <option value="" disabled hidden>Select Your Tone</option>
                                                    <option value="option1">Casual</option>
                                                    <option value="option2">Formal</option>
                                                    <option value="option2">Friendly</option>
                                                    <option value="option2">Professional</option>
                                                </select>
                                                <IoMdArrowDropdown className="dropdown-icon" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row mt-4">
                                        <div className="col-md-6">
                                            <label className='account_p_style'>
                                                Purpose
                                            </label>
                                            <div className="custom-dropdown mt-1">
                                                <select
                                                    className='style_input'
                                                    value={selectedValues.purpose}
                                                    onChange={(e) => handleSelectChange(e, 'purpose')}
                                                >
                                                    <option value="" disabled hidden>Select Your Purpose</option>
                                                    <option value="option1">Business</option>
                                                    <option value="option2">Social</option>
                                                </select>
                                                <IoMdArrowDropdown className="dropdown-icon" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <label className='account_p_style'>
                                                Profile Picture
                                            </label>
                                            <div className="custom-dropdown">
                                                <input type="text" placeholder='Upload Your Photo' className='input_p_box mt-2' />
                                                <MdPhotoCamera className="dropdown-icon" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row mt-4">
                                        <div className="col-md-6">
                                            <label className='account_p_style'>
                                                Instagram
                                            </label>
                                            <input type="text" placeholder='Enter Your URL' className='input_p_box mt-2' />
                                        </div>
                                        <div className="col-md-6">
                                            <label className='account_p_style'>
                                                Youtube
                                            </label>
                                            <input type="text" placeholder='Enter Your URL' className='input_p_box mt-2' />
                                        </div>
                                    </div>
                                    <div className="row mt-4">
                                        <div className="col-md-6">
                                            <label className='account_p_style'>
                                                Twitter
                                            </label>
                                            <input type="text" placeholder='Enter Your URL' className='input_p_box mt-2' />
                                        </div>
                                        <div className="col-md-6">
                                            <label className='account_p_style'>
                                                Tiktok
                                            </label>
                                            <input type="text" placeholder='Enter Your URL' className='input_p_box mt-2' />
                                        </div>
                                    </div>
                                    <div className='d-flex justify-content-end mt-5'>
                                        <button className='payment_btn'>
                                            Save Changes
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