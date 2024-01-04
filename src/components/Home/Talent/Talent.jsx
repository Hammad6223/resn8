import React from 'react'
import './Talent.css'
import Elipse_one from '../../../assets/images/Ellipse_one.png'
import Elipse_two from '../../../assets/images/Ellipse_two.png'
import Elipse_three from '../../../assets/images/Ellipse_three.png'
import Elipse_four from '../../../assets/images/Ellipse_four.png'
import Wing from '../../../assets/images/pngwing.png'
import colors from '../../../Constant/Colors/colors'
import { FaHeadphonesAlt } from "react-icons/fa";

export const Talent = () => {
    return (
        <section>
            <div className="container-fluid pt-5 pb-5 bg_landing">
                <div className="container">
                    <div className="row">
                        <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 position-relative">
                            <div className='d-flex justify-content-end'>
                                <img src={Elipse_two} alt="" />
                            </div>
                            <img src={Elipse_four} alt="" className='img_stl' />
                            <img src={Elipse_three} alt="" className='img_styling' />
                            <div className='circle_styling'>
                                <div className="row h-100">
                                    <div className="col-xxl-4 col-xl-4 col-lg-3 col-md-3">
                                        <img src={Wing} alt="" className='img_style' />

                                    </div>
                                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-5 col-sm-7 col-12 d-flex justify-content-center align-items-center talent_styling" style={{ color: colors.whiteColor }}>
                                        Become a Talent, Empower your Voice.
                                    </div>
                                    <div className="col-xxl-4 col-xl-4 col-lg-5 col-md-4 col-sm-5 col-12 d-flex justify-content-center align-items-center flex-column">
                                        <div className="row white_circle">
                                            <div className='col-3 p-0 border_styling' style={{ background: colors.whiteColor }}>
                                                <FaHeadphonesAlt style={{ fontSize: "40px" }} />
                                            </div>
                                            <div className='col p-0 d-flex justify-content-center align-items-center'>
                                                <p className='explore_styling' style={{ color: colors.whiteColor, marginBottom: "0px" }}>Explore Voices</p>
                                            </div>
                                        </div>
                                        <div className="d-flex w-100 mt-3 justify-content-center">
                                            <button className='learn_btn' style={{ background: colors.primaryColor }}>
                                                <div className='learn_name' style={{ color: colors.whiteColor }}>
                                                    Learn more
                                                </div>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='d-flex justify-content-end mt-5'>
                            <img src={Elipse_one} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}