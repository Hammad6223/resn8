import React from 'react'
import './Capture.css'
import Vector from '../../../assets/images/Vector.png'
import Rectangle from '../../../assets/images/Rectangle.png'
import Play from '../../../assets/images/Play.png'
import Dots from '../../../assets/images/Dots.png'
import { FaMicrosoft, FaAirbnb } from "react-icons/fa";
import { SiGodaddy } from "react-icons/si";
import { PiWaveformFill } from "react-icons/pi";
import colors from '../../../Constant/Colors/colors'


export const Capture = () => {

    const numberOfIcons = 6; // Change this to the number of icons you need
    const iconsArray = new Array(numberOfIcons).fill(null); // Create an array of null values

    // Array of objects representing icon components and associated text
    const iconsData = [
        { icon: <FaMicrosoft className='micro_logo_style' style={{color: colors.greyColor}}/>, text: 'Microsoft' },
        { icon: <FaAirbnb className='micro_logo_style' style={{color: colors.greyColor}}/>, text: 'Airbnb' },
        { icon: <SiGodaddy className='micro_logo_style' style={{color: colors.greyColor}}/>, text: 'GoDaddy' },
        { icon: <FaAirbnb className='micro_logo_style' style={{color: colors.greyColor}}/>, text: 'Airbnb' }
    ];

    return (
        <>
            <section id='capture'>
                <div className="container-fluid pt-5 bg_landing">
                    <div className="container">
                        <div className="row">
                            <div className="col-xxl-7 col-xl-7 col-lg-6 col-md-6 col-sm-12 col-12">
                                <div className='landing_heading' style={{color: colors.whiteColor}}>
                                    Find The Right Voice For Your Target Audience
                                </div>
                                <div className='dots_styling'>
                                    <img src={Dots} alt="" />
                                </div>
                                <div style={{ marginTop: "10px", display: "flex", width: "100%" }}>
                                    <div style={{ width: "75%" }}>
                                        <form action="">
                                            <input type="text" placeholder="I’m looking for..." className='input_styling' />
                                        </form>
                                    </div>
                                    <div style={{ width: "20%" }}>
                                        <button className='search_btn' style={{background: colors.primaryColor}}>
                                            <div className='search_btn_name' style={{color: colors.whiteColor}}>Search</div></button>
                                    </div>
                                </div>
                                <span className='comment_styling' style={{color: colors.greyColor}}>Ex: I'm looking for a cheerful, adult male voice, with a southern accent...</span>
                            </div>
                            <div className="col-xxl-5 col-xl-5 col-lg-6 col-md-6 col-sm-12 col-12">
                                <div style={{ position: 'relative' }}>
                                    <img src={Rectangle} alt="" className='rect_position' />
                                    <div style={{ position: "relative", textAlign: "center" }}>
                                        <img src={Vector} alt="" className='vector_img' />
                                        <div className='img_position'>
                                            <img src={Play} alt="" className='play_img' />
                                            <span className='play_name' style={{color: colors.whiteColor}}>How it works?</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-5">
                            <div className="col-md-7">
                                <p className='trusted_styling' style={{color: colors.primaryColor}}>Trusted by</p>
                                <div className="d-flex flex-wrap gap-3">
                                    {iconsData.map((item, index) => (
                                        <div key={index}>
                                            {item.icon}
                                            <span className='micro_styling' style={{color: colors.greyColor}}>{item.text}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="col-md-5">
                                <div className="d-flex flex-wrap gap-3">
                                    {iconsArray.map((_, index) => (
                                        <PiWaveformFill key={index} className='music_font' />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}