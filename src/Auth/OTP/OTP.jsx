import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom";
import './OTP.css'
import { IoCloseCircle } from "react-icons/io5";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import colors from "../../Constant/Colors/colors";

export const OTP = () => {

  const navigate = useNavigate()

  const confirmbtn = () => {
    alert(`Confirm`)
  }

  return (
    <>
      <div className="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" data-bs-backdrop="static" data-bs-keyboard="false">
        <div className="modal-dialog modal-dialog-centered" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          <div className="otp_modal-content">
            <div className="inner_otp_dialog_box">
              <div style={{ display: "flex", paddingTop: "10px", gap: "130px" }}>
                <div className="otp_styling" style={{ color: colors.whiteColor }}>
                  OTP Verification
                </div>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">
                  <IoCloseCircle style={{ color: colors.primaryColor, fontSize: "22px" }} />
                </button>
              </div>
              <p className="otp_content" style={{ color: colors.whiteColor }}>Enter the 6 digit code sent to <br /> your phone at +1 234 56789</p>
              <form action="">
                <input type="number" placeholder='Enter code' className='otp_style_input' style={{ color: colors.whiteColor }} />
              </form>
              <p className="otp_content_one" style={{ color: colors.whiteColor }}>Didn't receive the OTP? <u style={{ fontWeight: "bold" }}>Resend OTP</u> </p>
              <button className='confirm_button' style={{ background: colors.primaryColor }} onClick={confirmbtn}>
                <div className='confirm_name' style={{ color: colors.whiteColor }}>Confirm</div>
              </button>
            </div>
          </div>
        </div>
      </div>
      <a className='reg_name' data-bs-toggle="modal" href="#exampleModalToggle" role="button" style={{ color: colors.whiteColor }}>Register</a>
    </>
  )
}