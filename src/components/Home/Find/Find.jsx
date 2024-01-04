import React from 'react'
import './Find.css'
import colors from '../../../Constant/Colors/colors'
import Line from '../../../assets/images/Line.png'
import Image from '../../../assets/images/img.png'
import Mike from '../../../assets/images/mike.png'
import People from '../../../assets/images/People_group.png'

export const Find = () => {
    return (
        <>
            <div className="container-fluid pt-5 pb-5 bg_landing">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <p className='trending_name' style={{ color: colors.whiteColor }}>Trending Voices</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div>
                                <img src={Line} alt="" style={{ width: "100%" }} />
                            </div>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-xxl-7 col-xl-7 col-lg-7 col-md-7 col-sm-7">
                            <img src={Image} alt="" style={{ width: "100%" }} />
                        </div>
                        <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-5 col-sm-5">
                            <p className='hire_name' style={{ color: colors.whiteColor }}>Find & Hire Your <br /> Favorite Voice Talent</p>
                            <p className='search_name' style={{color: colors.greyColor}}>Search our extensive database of real talent, with real <br /> voices that resonate with your diverse audience.</p>
                            <div className="row mt-4">
                                <div className="col-3">
                                    <img src={People} alt="" style={{ width: "100%" }} />
                                </div>
                                <div className="col-7">
                                    <p className='voice_name mb-0 pt-2' style={{ color: colors.whiteColor }}>100+ Voices <span style={{ color: colors.primaryColor }}>Learn More</span> </p>
                                </div>
                            </div>
                            <div>
                                <button className='find_btn mt-4' style={{background: colors.primaryColor}}>
                                    <div className='find_btn_name' style={{color: colors.whiteColor}}>Find Now</div>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
