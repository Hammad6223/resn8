import React from 'react'
import './Price.css'
import colors from '../../../Constant/Colors/colors'
import { FaPeopleGroup } from "react-icons/fa6";
import { IoCheckmark } from "react-icons/io5";

export const Price = () => {

  return (
    <section>
      <div className="container-fluid pt-5 bg_landing">
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
          <div className="row">
            <div className="col">
              <div className="card">
                <div className="card-body">
                  <div className='pro_style'>For Pro Talent</div>
                  <div className="row justify-content-center">
                    <div className="col-7 p-0">
                      <div className='per_style'>
                        $9.99 per user/month
                      </div>
                    </div>
                    <div className="col-2 p-0 pt-2">
                      <button className='per_btn'>-20%</button>
                    </div>
                  </div>
                  <div className='voice_p_style'>
                    <FaPeopleGroup className='grp_icon' />Best for professional voice actors
                  </div>
                  <div className="row mt-3 justify-content-center">
                    <div className="col-3">
                      <div className='line_p_style mt-3'></div>
                    </div>
                    <div className="col-6">
                      <input id="checkbox_toggle" type="checkbox" class="check" />
                        <div class="checkbox">
                          <label class="slide" for="checkbox_toggle">
                            <label class="toggle" for="checkbox_toggle"></label>
                            <label class="text" for="checkbox_toggle">Day</label>
                            <label class="text" for="checkbox_toggle">Night</label>
                          </label>
                        </div>
                        {/* <div className='box_p_style'>
                        <div className="row m-0">

                          <div className="col-5 p-0">
                            <div className='monthly_p_style ms-4'>
                              Monthly
                            </div>
                          </div>
                          <div className="col-6 p-0 ms-3">
                            <button className='annually_btn' style={{ background: colors.primaryColor, color: colors.whiteColor }}>
                              Annually
                            </button>
                          </div>
                        </div>
                      </div> */}
                    </div>
                    <div className="col-3">
                      <div className='line_p_style mt-3'></div>
                    </div>
                  </div>
                  <div className='d-flex justify-content-center mt-5'>
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
                  {/* <div className="row mt-5">
                    <div className="col-12 d-flex justify-content-center align-items-center my-2">
                      <div>
                        <IoCheckmark className='tick_icon mt-n2' />
                        <span className='text_styling mt-2 ps-2'>Ability to clone your voice_style</span>
                      </div>
                    </div>
                    <div className="col-12 d-flex justify-content-center align-items-center my-2">
                      <div>
                        <IoCheckmark className='tick_icon mt-n2' />
                        <span className='text_styling mt-2 ps-2'>Ability to clone your voice_style</span>
                      </div>
                    </div>
                    <div className="col-12 d-flex justify-content-center my-2">
                      <div>
                        <IoCheckmark className='tick_icon mt-n2' />
                        <span className='text_styling mt-2 ps-2'>24/ support</span>
                      </div>
                    </div>
                    <div className="col-12 d-flex justify-content-center my-2">
                      <div>
                        <IoCheckmark className='tick_icon mt-n2' />
                        <span className='text_styling mt-2 ps-2'>Ability to clone your voice_style</span>
                      </div>
                    </div>
                    <div className="col-12 d-flex justify-content-center my-2">
                      <div>
                        <IoCheckmark className='tick_icon mt-n2' />
                        <span className='text_styling mt-2 ps-2'>Ability to clone your voice_style</span>
                      </div>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>

                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
