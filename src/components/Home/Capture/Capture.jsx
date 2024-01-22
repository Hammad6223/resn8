import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import './Capture.css'
import Vector from '../../../assets/images/Vector.png'
import Play from '../../../assets/images/Play.png'
import Dots from '../../../assets/images/Dots.png'
import { icons } from '../../../Constant/Icons/Icons'

export const Capture = () => {

    const numberOfIcons = 6; // Change this to the number of icons you need
    const iconsArray = new Array(numberOfIcons).fill(null); // Create an array of null values

    // Array of objects representing icon components and associated text
    const iconsData = [
        { icon: <div className='micro_logo_style'>{icons.MicrosoftIcon}</div>, text: 'Microsoft' },
        { icon: <div className='micro_logo_style'>{icons.AirbndIcon}</div>, text: 'Airbnb' },
        { icon: <div className='micro_logo_style'>{icons.GodaddyIcon}</div>, text: 'GoDaddy' },
        { icon: <div className='micro_logo_style'>{icons.AirbndIcon}</div>, text: 'Airbnb' }
    ];

    return (
        <>
            <section id='capture'>
                <div className="container-fluid pt-5 bg_landing">
                    <div className="container">
                        <div className="row">
                            <div className="col-xxl-7 col-xl-7 col-lg-6 col-md-12 col-sm-12 col-12">
                                <div className='landing_heading'>
                                    Find The Right Voice For Your Target Audience
                                </div>
                                <div className='dots_styling'>
                                    <img src={Dots} alt="" />
                                </div>
                                <div className='d-flex'>
                                    <div style={{ width: "75%" }}>
                                        <form action="">
                                            <input type="text" placeholder="I’m looking for..." className='input_styling' />
                                        </form>
                                    </div>
                                    <div style={{ width: "20%" }}>
                                        <button className='search_btn'>
                                            Search
                                        </button>
                                    </div>
                                </div>
                                <span className='comment_styling'>Ex: I'm looking for a cheerful, adult male voice, with a southern accent...</span>
                            </div>
                            <div className="col-xxl-5 col-xl-5 col-lg-6 col-md-12 col-sm-12 col-12">
                                <div className='position-relative'>
                                    <div className='rectangle_style'> <div className='heart_icon'>{icons.HeartbeatIcon}</div></div>
                                    <div className='position-relative text-center'>
                                        <LazyLoadImage
                                            // alt={image.alt}
                                            // height={image.height}
                                            src={Vector} // use normal <img> attributes as props
                                            // width={image.width} 
                                            className='vector_img'/>
                                        {/* <img src={Vector} alt="" className='vector_img' /> */}
                                        <div className='img_position'>
                                            <img src={Play} alt="" className='play_img' />
                                            <span className='play_name'>How it works?</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-5">
                            <div className="col-xxl-7 col-xl-6 col-lg-12 col-md-12">
                                <p className='trusted_styling'>Trusted by</p>
                                <div className="d-flex flex-wrap gap-4">
                                    {iconsData.map((item, index) => (
                                        <div key={index}>
                                            {item.icon}
                                            <span className='micro_styling'>{item.text}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="col-xxl-5 col-xl-6 icons_space">
                                <div className="d-none d-sm-none d-md-noned-lg-none d-xl-block d-xxl-block">
                                    <div className="d-flex flex-wrap gap-3">
                                        {iconsArray.map((_, index) => (
                                            <div className='music_font' key={index}>{icons.WaveIcon}</div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}