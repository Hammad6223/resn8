import { useState, useEffect, useContext } from "react"
import './ForgetPassword.css'
import { IoCloseCircle } from "react-icons/io5";
import { IoIosMail, IoMdCloseCircle } from "react-icons/io";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import colors from "../../Constant/Colors/colors";


export const ForgetPassword = () => {

  const send = () => {
    alert("Send Now");
  }

  return (
    <>
      <div className="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" data-bs-backdrop="static" data-bs-keyboard="false">
        <div className="modal-dialog modal-dialog-centered" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          <div className="modal-content">
            <div className="inner_dialog_box">
              <div style={{ display: "flex", paddingTop: "10px", gap: "112px" }}>
                <div className="forgetP_styling" style={{ color: colors.whiteColor }}>
                  Forgot Password?
                </div>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">
                  <IoMdCloseCircle style={{ color: colors.primaryColor, fontSize: "22px" }} />
                </button>
              </div>
              <p className="forget_content" style={{ color: colors.whiteColor }}>Enter the email associated <br /> with your account</p>
              <form action="">
                <div className='forgot_container'>
                  <input type="text" placeholder='Enter your email' className='forget_style_input' style={{ color: colors.whiteColor }} />
                  <span className='mail_icon' style={{ color: colors.whiteColor }}>
                    <IoIosMail style={{ fontSize: "25px" }} />
                  </span>
                </div>
              </form>
              <button className='forget_button' style={{ background: colors.primaryColor }} onClick={send}>
                <div className='forget_name' style={{ color: colors.whiteColor }}>Send</div>
              </button>
            </div>
          </div>
        </div>
      </div>
      <a className='forget_styling' data-bs-toggle="modal" href="#exampleModalToggle" role="button" style={{ color: colors.whiteColor }}>Forgot Password</a>
    </>
  )
}