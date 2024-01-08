import React from 'react'
import './Price.css'
import colors from '../../../Constant/Colors/colors'
import { FaPeopleGroup } from "react-icons/fa6";
import { IoCheckmark } from "react-icons/io5";
import { FaMessage } from "react-icons/fa6";

export const Price = () => {

  return (
    <section>
      <div className="container-fluid pt-5 pb-5 bg_landing">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className='price_style'>
                Pricing
              </div>
              <div className='upgrade_style'>
                <p style={{ width: "70%" }}>Upgrade your Resn8 account to PRO and unlock unlimited benefits to enhance your project</p>
              </div>
            </div>
          </div>
          <div className="row mt-5 justify-content-center">
            <div className="col-xxl-5 col-xl-6 col-lg-6 col-md-6">
              <div className="card">
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
                    <FaPeopleGroup className='grp_icon' />Best for professional voice actors
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
                        <IoCheckmark className='tick_icon mt-n2' />
                        <span className='text_styling mt-2 ps-2'>Ability to clone your voice_style</span>
                      </div>
                      <div>
                        <IoCheckmark className='tick_icon mt-n2' />
                        <span className='text_styling mt-2 ps-2'>Higher character limit</span>
                      </div>
                      <div>
                        <IoCheckmark className='tick_icon mt-n2' />
                        <span className='text_styling mt-2 ps-2'>Access to more voice options</span>
                      </div>
                      <div>
                        <IoCheckmark className='tick_icon mt-n2' />
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
            </div>
            <div className="col-xxl-5 col-xl-6 col-lg-6 col-md-6 ps-3 col2">
              <div className="card">
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
                    <FaPeopleGroup className='grp_icon' />Best for professional voice actors
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
                        <IoCheckmark className='tick_icon mt-n2' />
                        <span className='text_styling mt-2 ps-2'>Ability to clone your voice_style</span>
                      </div>
                      <div>
                        <IoCheckmark className='tick_icon mt-n2' />
                        <span className='text_styling mt-2 ps-2'>Higher character limit</span>
                      </div>
                      <div>
                        <IoCheckmark className='tick_icon mt-n2' />
                        <span className='text_styling mt-2 ps-2'>Access to more voice options</span>
                      </div>
                      <div>
                        <IoCheckmark className='tick_icon mt-n2' />
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
            </div>
          </div>
          <div className="row mt-5 justify-content-center">
            <div className="col-xxl-8">
              <div className="price_box">
                <div className="ps-5 pe-5">
                  <div className="enter_text pt-5">
                    Enterprise Plan
                  </div>
                  <div className="row mt-3">
                    <div className="col-md-7">
                      <div className="offer_text">
                        We offer custom plan solutions to fit your voice service needs. To get started on finding the right plan for your team, contact us today.
                      </div>
                    </div>
                    <div className="col-md-5 d-flex justify-content-end justify-content-center text-center">
                      <button className='contact_btn gap-2'>
                        <FaMessage />Contact Sales
                      </button>
                    </div>
                  </div>
                </div>

                <div className='row mt-5 m-0 slider'>
                  <div className="col-md-3 col-lg-2 col-xl-2 col-xxl-2 p-0">
                    <div className="price_circle">
                      Unlimited voice generation
                    </div>
                  </div>
                  <div className="col-md-2 col-lg-2 col-xl-2 col-xxl-2 p-0 ps-1">
                    <div className="price_circle">
                      Custom Pricing
                    </div>
                  </div>
                  <div className="col-md-2 col-lg-2 col-xl-2 col-xxl-2 p-0 ps-1">
                    <div className="price_circle">
                      24/7 Dedicated Support
                    </div>
                  </div>
                  <div className="col-md-2 col-lg-3 col-xl-3 col-xxl-3 p-0 ps-1">
                    <div className="price_circle">
                      Dedicated Slack Channel
                    </div>
                  </div>
                  <div className="col-md-3 col-lg-3 col-xl-3 col-xxl-3 p-0 ps-1">
                    <div className="price_circle">
                      Unlimited Character Limit
                    </div>
                  </div>
                </div>
                <div className='row mt-4 m-0 slider'>
                  <div className="col-md-2 col-lg-2 col-xl-2 col-xxl-2 p-0">
                    <div className="price_circle">
                      Dedicated Slack channel
                    </div>
                  </div>
                  <div className="col-md-3 col-lg-2 col-xl-2 col-xxl-3 p-0 ps-1">
                    <div className="price_circle">
                      Whiteglove onboarding support
                    </div>
                  </div>
                  <div className="col-md-1 col-lg-2 col-xl-2 col-xxl-1 p-0 ps-1">
                    <div className="price_circle">
                      SCIM
                    </div>
                  </div>
                  <div className="col-md-3 col-lg-3 col-xl-3 col-xxl-3 p-0 ps-1">
                    <div className="price_circle">
                      Dedicated Slack Channel
                    </div>
                  </div>
                  <div className="col-md-3 col-lg-3 col-xl-3 col-xxl-3 p-0 ps-1">
                    <div className="price_circle">
                      Whiteglove onboarding support
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}