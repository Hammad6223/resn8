import React from 'react'
import './Price.css'
import { Card } from './Card'
import { icons } from '../../../Constant/Icons/Icons'

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
              <Card />
            </div>
            <div className="col-xxl-5 col-xl-6 col-lg-6 col-md-6 ps-3 col2">
              <Card />
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
                        {icons.MessageIcon}Contact Sales
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