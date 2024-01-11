import React from 'react'
import Images from '../../../assets/images/card.png'
import Tick from '../../../assets/images/Vector01.png'
import Play from '../../../assets/images/Play.png'
import { AiFillInstagram } from "react-icons/ai";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { GrSave } from "react-icons/gr";
import { IoMail } from "react-icons/io5";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { IoIosArrowDroprightCircle } from "react-icons/io";


export const Card = () => {

    const data = [
        {
            name: 'Anne Hathway',
            price: '$900',
            completedOrders: '249 Completed Orders',
            socialMedia: [
                { icon: <AiFillInstagram style={{ color: 'white' }} />, platform: 'Instagram' },
                { icon: <FaYoutube style={{ color: 'white' }} />, platform: 'Youtube' },
                { icon: <FaTwitter style={{ color: 'white' }} />, platform: 'Twitter' },
                { icon: <FaTiktok style={{ color: 'white' }} />, platform: 'Tiktok' }
            ],
            language: 'English',
            gender: {
                title: 'Gender',
                value: 'Adult - Female'
            },
            accent: {
                title: 'Accent',
                value: 'Select Voice'
            },
            tone: {
                title: 'Tone',
                value: 'Request Customer Order'
            },
            purpose: {
                title: 'Purpose',
                value: 'Video narration, TV',
                subValue: 'E-learning'
            }
        }
    ];

    return (
        <>
            {data.map((item, index) => (
                <div key={index} className="col pe-2 p-0 mt-3">
                    <div className="card find_card pb-3">
                        <div className='ps-2 pe-2'>
                            <div className='position-relative'>
                                <img src={Images} alt="..." style={{ width: "100%", paddingTop: "10px" }} />
                                <div className='d-flex position-absolute img_position justify-content-between ps-2 pe-2'>
                                    <IoIosArrowDropleftCircle className='circle_icon'/>
                                    <img src={Play} alt="" style={{width: "20%"}} />
                                    <IoIosArrowDroprightCircle className='circle_icon'/>
                                </div>
                            </div>
                            <div className='d-flex mt-2 gap-5'>
                                <div className='find_browse2_style'>
                                    {item.name}
                                    <img src={Tick} alt="" className='ps-2' />
                                </div>
                                <div className='p_style'>
                                    {item.price}
                                </div>
                            </div>
                            <div className='d-flex justify-content-between pe-2'>
                                <div className='com_style'>
                                    {item.completedOrders}
                                </div>
                                <div className='com_style'>
                                    Price
                                </div>
                            </div>
                            <div className='d-flex justify-content-between mt-2'>
                                <div className='d-flex gap-1'>
                                    {item.socialMedia.map((social, idx) => (
                                        <div key={idx} className='find_circles d-flex justify-content-center align-items-center'>
                                            {social.icon}
                                        </div>
                                    ))}
                                </div>
                                <div className='w-25'>
                                    <button className='eng_btn com_style'>
                                        {item.language}
                                    </button>
                                </div>
                            </div>
                            <div className='lines_style mt-3' />
                            <div className='d-flex justify-content-between mt-2'>
                                <div className='gender_style'>
                                    {item.gender.title}
                                </div>
                                <div className='gender_style'>
                                    {item.gender.value}
                                </div>
                            </div>
                            <div className='lines_style mt-2' />
                            <div className='d-flex justify-content-between mt-2'>
                                <div className='gender_style'>
                                    {item.accent.title}
                                </div>
                                <div className='gender_style'>
                                    {item.accent.value}
                                </div>
                            </div>
                            <div className='lines_style mt-2' />
                            <div className='d-flex justify-content-between mt-2'>
                                <div className='gender_style'>
                                    {item.tone.title}
                                </div>
                                <div className='gender_style'>
                                    {item.tone.value}
                                </div>
                            </div>
                            <div className='lines_style mt-2' />
                            <div className='d-flex justify-content-between mt-2'>
                                <div className='gender_style'>
                                    {item.purpose.title}
                                </div>
                                <div className='gender_style'>
                                    {item.purpose.value} <br /> <span className='ps-5'>{item.purpose.subValue}</span>
                                </div>
                            </div>
                            <div className='d-flex gap-3 mt-3'>
                                <div className='find_circles d-flex justify-content-center align-items-center'>
                                    <GrSave style={{ color: "white" }} />
                                </div>
                                <button className='gender_style clone_btn'>
                                    Clone Voice
                                </button>
                            </div>
                            <div className='d-flex gap-3 mt-2'>
                                <div className='find_circles d-flex justify-content-center align-items-center'>
                                    <IoMail style={{ color: "white" }} />
                                </div>
                                <button className='gender_style clone_btn'>
                                    Clone Voice
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}