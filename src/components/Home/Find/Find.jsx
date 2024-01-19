import React from 'react'
import './Find.css'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Image from '../../../assets/images/img.png'
import Slider from '../../../assets/images/slide.png'
import SliderOne from '../../../assets/images/slide_one.png'
import SliderTwo from '../../../assets/images/slide_two.png'
import Mike from '../../../assets/images/mike.png'
import People from '../../../assets/images/People_group.png'

export const Find = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    const slidersData = [
        {
            id: 1,
            heading: '01',
            content: 'Bowen Higgins',
            completedOrders: 500,
            image: Slider,
        },
        {
            id: 2,
            heading: '02',
            content: 'Leighton Kramer',
            completedOrders: 350,
            image: SliderOne,
        },
        {
            id: 3,
            heading: '03',
            content: 'Saige Fuentes',
            completedOrders: 700,
            image: SliderTwo,
        },
        {
            id: 4,
            heading: '04',
            content: 'Rockfest today',
            subContent: '#Music Podcast',
            image: Slider,
        },
    ];

    return (
        <>
            <div className="container-fluid pt-5 pb-5 bg_landing">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="d-flex justify-content-end">
                                <p className='trending_name'>Trending Voices</p>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col">
                            <Carousel responsive={responsive}>
                                {slidersData.map((slider) => (
                                    <div key={slider.id} className='d-flex gap-5'>
                                        <div>
                                            <div className='slider_heading'>{slider.heading}</div>
                                            <div className='slider_content'>{slider.content}</div>
                                            <div className='slider_style_content pt-2'>
                                                Completed Orders <span style={{ color: "#D0126C" }}>{slider.completedOrders}</span>
                                            </div>
                                            {slider.subContent && (
                                                <div className='slider_style_content pt-2'>
                                                    {slider.subContent}
                                                </div>
                                            )}
                                        </div>
                                        <div>
                                            <img src={slider.image} alt="" style={{ width: "100%" }} />
                                        </div>
                                    </div>
                                ))}
                            </Carousel>;
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-xxl-7 col-xl-7 col-lg-7 col-md-12 col-sm-12">
                            <img src={Image} alt="" style={{ width: "100%" }} />
                        </div>
                        <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-12 col-sm-12">
                            <div className='contet_text_style'>
                                <div className='hire_name'>Find & Hire Your Favorite Voice Talent</div>
                                <div className='search_name'>Search our extensive database of real talent, with real voices that resonate with your diverse audience.</div>
                                <div className="row mt-4">
                                    <div className="col-3">
                                        <img src={People} alt="" style={{ width: "100%" }} />
                                    </div>
                                    <div className="col-8">
                                        <p className='voice_name mb-0 pt-2'>100+ Voices <span style={{ color: "pink" }}>Learn More</span> </p>
                                    </div>
                                </div>
                                <div>
                                    <button className='find_btn mt-4'>
                                        Find Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}