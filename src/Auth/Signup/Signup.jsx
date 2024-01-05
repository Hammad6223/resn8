import { useState } from 'react'
import './Signup.css'
import { useNavigate } from 'react-router-dom';
import Vector from '../../assets/images/Vectorline.png';
import { IoMdArrowDropdown } from "react-icons/io";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { MdCheckBoxOutlineBlank, MdCheckBox } from "react-icons/md";
import { ImFacebook2 } from "react-icons/im";
import { FcGoogle } from "react-icons/fc";
import { OTP } from '../OTP/OTP'
import { background } from '../../Constant/Background/Background'
import colors from '../../Constant/Colors/colors';
import { IoCloseCircle } from 'react-icons/io5';

export const Signup = () => {

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [isChecked, setIsChecked] = useState(false);
    const [selectedValue, setSelectedValue] = useState("");
    const navigate = useNavigate();

    const togglePasswordVisibility = () => {
        setShowPassword((prevState) => !prevState);
    };

    const toggleConfirmPasswordVisibility = () => {
        setShowConfirmPassword((prevState) => !prevState);
    };

    const handleCheckboxChange = (event) => {
        setIsChecked(event.target.checked);
    };

    const handleSelectChange = (event) => {
        setSelectedValue(event.target.value);
    };

    const login = () => {
        navigate('/')
    }

    return (
        <>
            <div className="container-fluid p-0" style={background}>
                <div className="container">
                    <div className="row justify-content-center align-items-center">
                        <div className="col-xxl-4 col-xl-4 col-lg-5 col-md-7 col-sm-9 col-10 p-0">
                            <div className='sign_box'>
                                <div className='heading_signup'>Signup</div>
                                <div className='login_form'>
                                    <form action="">
                                        <label htmlFor="" className='label_style' >Profile Type</label>
                                        <div className="custom-dropdown">
                                            <select className='style_input'
                                                value={selectedValue}
                                                onChange={handleSelectChange}
                                            >
                                                <option value="" disabled hidden>Select</option>
                                                <option value="option1">Admin Account</option>
                                                <option value="option2">User Account</option>
                                            </select>
                                            <IoMdArrowDropdown className="dropdown-icon" />
                                        </div>
                                        <label htmlFor="" className='label_style mt-3'>Name</label>
                                        <input type="text" placeholder='Enter your name' className='style_i_input' />
                                        <label htmlFor="" className='label_style mt-3'>Email</label>
                                        <input type="text" placeholder='Enter your email' className='style_i_input' />
                                        <label htmlFor="" className='label_style mt-3'>Password</label>
                                        <div className='position-relative'>
                                            <input
                                                type={showPassword ? 'text' : 'password'}
                                                placeholder='Enter your password'
                                                className='style_i_input'
                                            />
                                            <span
                                                className='toggle_input_password'
                                                onClick={togglePasswordVisibility}
                                            >
                                                {showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
                                            </span>
                                        </div>
                                        <label htmlFor="" className='label_style mt-3'>Confirm Password</label>
                                        <div className='position-relative'>
                                            <input
                                                type={showConfirmPassword ? 'text' : 'password'}
                                                placeholder='Enter your confirm password'
                                                className='style_i_input'
                                            />
                                            <span
                                                className='toggle_input_password'
                                                onClick={toggleConfirmPasswordVisibility}
                                            >
                                                {showConfirmPassword ? <FaRegEye /> : <FaRegEyeSlash />}
                                            </span>
                                        </div>
                                    </form>
                                        <label className="checkbox-label mt-3">
                                            <input
                                                type="checkbox"
                                                checked={isChecked}
                                                onChange={handleCheckboxChange}
                                                style={{ display: 'none' }}
                                            />
                                            <span className="check-icon">
                                                {isChecked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
                                            </span>
                                            <span className='checkbox_styling'>Accept Terms and Conditions</span>
                                        </label>
                                    <OTP />
                                    <div className="row mt-3">
                                        <div className='col-xxl-5 col-xl-5 col-lg-5 col-md-5 col-sm-5 col-5'>
                                            <img src={Vector} alt="" style={{ width: "100%" }} />
                                        </div>
                                        <div className='col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-sm-2 col-2 or_styling'>
                                            or
                                        </div>
                                        <div className='col-xxl-5 col-xl-5 col-lg-5 col-md-5 col-sm-5 col-5'>
                                            <img src={Vector} alt="" style={{ width: "100%" }} />
                                        </div>
                                    </div>
                                    <button className='facebook_button'>
                                        <ImFacebook2 className='facebook_icon' />
                                        Sign in with facebook
                                    </button>
                                    <button className='google_button'>
                                        <FcGoogle className='google_icon' />
                                        Sign in with Google
                                    </button>
                                    <p className='project_name'>Resn8</p>
                                    <div className="row justify-content-center align-items-center mt-3 pb-4">
                                        <div className='col-xxl-6 col-xl-7 col-lg-7 col-md-8 col-sm-8 col-12 text-center text-lg-end text-md-end text-sm-end p-0 pt-1 acount_styling'>
                                            Don't have an account?
                                        </div>
                                        <div className='col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12 text-center text-sm-start p-0 mt-3 mt-sm-0 ps-2 account_s_styling' onClick={login}>
                                            Login now
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}