import React from 'react'
import { icons } from '../../../Constant/Icons/Icons'

export const Card = () => {
    return (
        <>
            <div className="card card_price">
                <div className="card-body position-relative">
                    <div className='pro_style mt-5'>For Pro Talent</div>
                    <div className="row justify-content-center mt-2">
                        <div className="col-xxl-7 col-xl-7 col-lg-8 col-md-11 col-sm-7 col-12 text-center p-0">
                            <div className='per_style'>
                                $9.99 per user/month
                            </div>
                        </div>
                        <div className="col-2 col-sm-2 col-3 p-0 pt-2">
                            <button className='per_btn'>-20%</button>
                        </div>
                    </div>
                    <div className='voice_p_style mt-4'>
                        <div className='grp_icon'>{icons.PeoplegroupIcon}</div>
                        Best for professional voice actors
                    </div>
                    <div className="row mt-3 justify-content-center mt-4">
                        <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-2 col-sm-3 col-2">
                            <div className='line_p_style mt-3'></div>
                        </div>
                        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-8 col-sm-6 col-7">
                            <input id="checkbox_toggle" type="checkbox" className="check" />
                            <div className="checkbox">
                                <label className="slide" htmlFor="checkbox_toggle">
                                    <label className="toggle" htmlFor="checkbox_toggle"></label>
                                    <label className="text" htmlFor="checkbox_toggle">
                                        <div className='d-flex justify-content-center'>Monthly</div>
                                    </label>
                                    <label className="text" htmlFor="checkbox_toggle">
                                        <div className='d-flex justify-content-center'>Annually</div>
                                    </label>
                                </label>
                            </div>
                        </div>
                        <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-2 col-sm-3 col-2">
                            <div className='line_p_style mt-3'></div>
                        </div>
                    </div>
                    <div className='d-flex justify-content-center' style={{ marginTop: "100px" }}>
                        <div>
                            <div>
                                <div className='tick_icon mt-n2'>{icons.CheckmarkIcon}</div>
                                <span className='text_styling mt-2 ps-2'>Ability to clone your voice_style</span>
                            </div>
                            <div>
                                <div className='tick_icon mt-n2'>{icons.CheckmarkIcon}</div>
                                <span className='text_styling mt-2 ps-2'>Higher character limit</span>
                            </div>
                            <div>
                                <div className='tick_icon mt-n2'>{icons.CheckmarkIcon}</div>
                                <span className='text_styling mt-2 ps-2'>Access to more voice options</span>
                            </div>
                            <div>
                                <div className='tick_icon mt-n2'>{icons.CheckmarkIcon}</div>
                                <span className='text_styling mt-2 ps-2'>24/7 support</span>
                            </div>
                        </div>
                    </div>
                    <div className='d-flex justify-content-center align-item-center'>
                        <button className='pro_btn position-absolute'>
                            Became a Pro Talent
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}
