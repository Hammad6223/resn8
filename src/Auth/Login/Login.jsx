import { useState, createContext } from 'react'
import './Login.css'
import { ForgetPassword } from '../ForgetPassword'
import { useNavigate } from 'react-router-dom';
import Vector from '../../assets/images/Vectorline.png';
import { ImFacebook2 } from "react-icons/im";
import { FcGoogle } from "react-icons/fc";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import colors from '../../Constant/Colors/colors';
import { background } from '../../Constant/Background/Background'

export const Login = () => {

    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const togglePasswordVisibility = () => {
        setShowPassword((prevState) => !prevState);
    };

    const signin = () => {
        navigate('/signup');
        console.log(email, password);
    }

    return (
        <>
            <div className="container-fluid p-0" style={background}>
                <div className="container">
                    <div className="row justify-content-center align-items-center">
                        <div className='col-xxl-4 col-xl-4 col-lg-5 col-md-7 col-sm-9 col-10 p-0'>
                            <div className='login_box'>
                                <div className='heading_login' style={{ color: colors.whiteColor }}>Resn8</div>
                                <div className='login_form'>
                                    <form action="">
                                        <label htmlFor="" style={{ color: colors.whiteColor }}>Email</label>
                                        <div className='style_i_input'>
                                            <input
                                                type="text"
                                                placeholder='Enter your email'
                                                className='style_e_input'
                                                style={{ color: colors.whiteColor }}
                                                value={email}
                                                onChange={handleEmailChange}
                                            />
                                        </div>
                                        <label htmlFor="" className='email_label' style={{ marginTop: "10px", color: colors.whiteColor }}>Password</label>
                                        <div className='style_i_input position-relative'>
                                            <input
                                                type={showPassword ? 'text' : 'password'}
                                                placeholder='Enter your password'
                                                className='style_e_input'
                                                style={{ color: colors.whiteColor }}
                                                value={password}
                                                onChange={handlePasswordChange}
                                            />
                                            <span
                                                className='toggle_input_password'
                                                style={{ color: colors.primaryColor }}
                                                onClick={togglePasswordVisibility}
                                            >
                                                {showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
                                            </span>
                                        </div>
                                    </form>
                                    <ForgetPassword />
                                    <button className='signin_button' onClick={signin} style={{ background: colors.primaryColor }}>
                                        <div className='sign_name' style={{ color: colors.whiteColor }}>Sign in</div>
                                    </button>
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
                                    <button className='facebook_button' style={{ background: colors.whiteColor }}>
                                        <div className='fb_styling'>
                                            <div><FcGoogle style={{ fontSize: "30px" }} /></div>
                                            <div className='signfacebook_styling' style={{ color: "black" }}>Sign in with Google</div></div>
                                    </button>
                                    <div className="row justify-content-center align-items-center mt-4 pb-5">
                                        <div className='col-xxl-6 col-xl-7 col-lg-7 col-md-8 col-sm-8 col-12 text-center text-lg-end text-md-end text-sm-end p-0 pt-1 acount_styling' style={{ color: colors.whiteColor }}>
                                            Don't have an account?
                                        </div>
                                        <div className='col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12 text-center text-sm-start p-0 mt-3 mt-sm-0 ps-2 account_styling' style={{ fontWeight: "600", color: colors.primaryColor, cursor: "pointer" }} onClick={signin}>
                                            Sign up now
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