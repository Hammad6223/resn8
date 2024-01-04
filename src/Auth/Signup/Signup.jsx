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
                                <div className='heading_signup' style={{ color: colors.whiteColor }}>Signup</div>
                                <div className='login_form'>
                                    <form action="">
                                        <label htmlFor="" style={{ color: colors.whiteColor }} >Profile Type</label>
                                        <div className="custom-dropdown">
                                            <select className='style_input'
                                                style={{ color: colors.whiteColor }}
                                                value={selectedValue}
                                                onChange={handleSelectChange}
                                            >
                                                <option value="" disabled hidden>Select</option>
                                                <option value="option1">Admin Account</option>
                                                <option value="option2">User Account</option>
                                            </select>
                                            <IoMdArrowDropdown className="dropdown-icon" style={{ color: colors.whiteColor }} />
                                        </div>
                                        <label htmlFor="" style={{ marginTop: "15px", color: colors.whiteColor }}>Name</label>
                                        <div className='style_s_input'>
                                        <input type="text" placeholder='Enter your name' className='style_f_input' style={{ color: colors.whiteColor }} />
                                        </div>
                                        <label htmlFor="" style={{ marginTop: "15px", color: colors.whiteColor }}>Email</label>
                                        <div className='style_s_input'>
                                        <input type="text" placeholder='Enter your email' className='style_f_input' style={{ color: colors.whiteColor }} />
                                        </div>
                                        <label htmlFor="" style={{ marginTop: "15px", color: colors.whiteColor }}>Password</label>
                                        <div className='style_s_input position-relative'>
                                            <input
                                                type={showPassword ? 'text' : 'password'}
                                                placeholder='Enter your password'
                                                className='style_f_input'
                                                style={{ color: colors.whiteColor }}
                                            />
                                            <span
                                                className='toggle-password' style={{ color: colors.primaryColor }}
                                                onClick={togglePasswordVisibility}
                                            >
                                                {showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
                                            </span>
                                        </div>
                                        <label htmlFor="" style={{ marginTop: "15px", color: colors.whiteColor }}>Confirm Password</label>
                                        <div className='style_s_input position-relative'>
                                            <input
                                                type={showConfirmPassword ? 'text' : 'password'}
                                                placeholder='Enter your confirm password'
                                                className='style_f_input'
                                                style={{ color: colors.whiteColor }}
                                            />
                                            <span
                                                className='toggle-password' style={{ color: colors.primaryColor }}
                                                onClick={toggleConfirmPasswordVisibility}
                                            >
                                                {showConfirmPassword ? <FaRegEye /> : <FaRegEyeSlash />}
                                            </span>
                                        </div>
                                        </form>
                                        <div style={{ marginTop: "15px" }}>
                                            <label className="checkbox-label">
                                                <input
                                                    type="checkbox"
                                                    checked={isChecked}
                                                    onChange={handleCheckboxChange}
                                                    style={{ display: 'none' }}
                                                />
                                                <span className="check-icon" style={{ color: colors.whiteColor }}>
                                                    {isChecked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
                                                </span>
                                                <span className='checkbox_styling' style={{ color: colors.whiteColor }}>Accept Terms and Conditions</span>
                                            </label>
                                        </div>
                                        <div className='register_button' style={{ background: colors.primaryColor }} onClick={() => navigate("/landing")}>
                                            <OTP />
                                        </div>
                                    
                                    <div className="row mt-3">
                                        <div className='col-xxl-5 col-xl-5 col-lg-5 col-md-5 col-sm-5 col-5'>
                                            <img src={Vector} alt="" style={{ width: "100%" }} />
                                        </div>
                                        <div className='col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-sm-2 col-2 or_styling' style={{ color: colors.whiteColor }}>
                                            or
                                        </div>
                                        <div className='col-xxl-5 col-xl-5 col-lg-5 col-md-5 col-sm-5 col-5'>
                                            <img src={Vector} alt="" style={{ width: "100%" }} />
                                        </div>
                                    </div>
                                    <button className='facebook_button' style={{ background: colors.blueColor }}>
                                        <div className='fb_styling'>
                                            <div><ImFacebook2 style={{ background: colors.blueColor, color: "white", fontSize: "30px" }} /></div>
                                            <div className='signfacebook_styling' style={{ color: colors.whiteColor }}>Sign in with facebook</div></div>
                                    </button>
                                    <button className='facebook_button' style={{ background: "white" }}>
                                        <div className='fb_styling'>
                                            <div><FcGoogle style={{ fontSize: "30px" }} /></div>
                                            <div className='signfacebook_styling' style={{ color: "black" }}>Sign in with Google</div></div>
                                    </button>
                                    <p className='project_name' style={{ color: colors.whiteColor }}>Resn8</p>
                                    <div className="row justify-content-center align-items-center mt-3 pb-4">
                                        <div className='col-xxl-6 col-xl-7 col-lg-7 col-md-8 col-sm-8 col-12 text-center text-lg-end text-md-end text-sm-end p-0 pt-1 acount_styling' style={{ color: colors.whiteColor }}>
                                            Don't have an account?
                                        </div>
                                        <div className='col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12 text-center text-sm-start p-0 mt-3 mt-sm-0 ps-2 account_styling' style={{ fontWeight: "600", color: colors.primaryColor, cursor: "pointer" }} onClick={login}>
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