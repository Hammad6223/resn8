import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import './OTP.css'
import {icons} from '../../Constant/Icons/Icons'

export const OTP = () => {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <button className='signin_button' onClick={() => setShowModal(true)}>Register</button>
      {showModal && (
        <div className="modal fade show" tabIndex="-1" >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content otp_modal-content">
              <div className="inner_otp_dialog_box">
                <div className='d-flex pt-2 gap-5'>
                  <div className="forgetP_styling">
                    OTP Verification
                  </div>
                  <button
                    type="button"
                    className="btn-close"
                    onClick={() => setShowModal(false)}
                    aria-label="Close"
                  >
                    <div className='btn_close_icon'>{icons.CloseIcon}</div>
                  </button>
                </div>
                <p className="forget_content">
                  Enter the 6 digit code sent to <br /> your phone at +1 234 56789
                </p>
                <form action="">
                  <input type="text" placeholder='Enter code' className='otp_style_input' />
                </form>
                <p className="forget_content">
                  Didn't receive the OTP? <u style={{ fontWeight: 'bold' }}>Resend OTP</u>
                </p>
                <button className='forget_button mt-4' onClick={() => navigate('/landing')}>
                  Confirm
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};