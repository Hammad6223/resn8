import { useState } from 'react'
import './Login.css'
import { ForgetPassword } from '../ForgetPassword'
import { useNavigate } from 'react-router-dom';
import Vector from '../../assets/images/Vectorline.png';
import { ImFacebook2 } from "react-icons/im";
import { FcGoogle } from "react-icons/fc";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
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
            <div className="container-fluid p-0 pb-3" style={background}>
                <div className="container">
                    <div className="row justify-content-center align-items-center">
                        <div className='col-xxl-4 col-xl-4 col-lg-5 col-md-7 col-sm-9 col-10 p-0'>
                            <div className='login_box'>
                                <div className='heading_login'>Resn8</div>
                                <div className='login_form'>
                                    <form action="">
                                        <label htmlFor="" className='label_style'>Email</label>
                                            <input
                                                type="text"
                                                placeholder='Enter your email'
                                                className='style_i_input'
                                                value={email}
                                                onChange={handleEmailChange}
                                            />
                                        <label htmlFor="" className='label_style mt-3'>Password</label>
                                        <div className='position-relative'>
                                            <input
                                                type={showPassword ? 'text' : 'password'}
                                                placeholder='Enter your password'
                                                className='style_i_input'
                                                value={password}
                                                onChange={handlePasswordChange}
                                            />
                                            <span
                                                className='toggle_input_password'
                                                onClick={togglePasswordVisibility}
                                            >
                                                {showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
                                            </span>
                                        </div>
                                    </form>
                                    <ForgetPassword />
                                    <button className='signin_button' onClick={signin}>
                                        Sign in
                                    </button>
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
                                    <div className="row justify-content-center align-items-center mt-4 pb-5">
                                        <div className='col-xxl-6 col-xl-7 col-lg-7 col-md-8 col-sm-8 col-12 text-center text-lg-end text-md-end text-sm-end p-0 pt-1 acount_styling'>
                                            Don't have an account?
                                        </div>
                                        <div className='col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12 text-center text-sm-start p-0 mt-3 mt-sm-0 ps-2 account_s_styling' onClick={() => navigate('/signup')}>
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