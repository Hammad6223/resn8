import { useState, useEffect, useContext } from "react"
import './ForgetPassword.css'
import { IoCloseCircle } from "react-icons/io5";
import { IoIosMail, IoMdCloseCircle } from "react-icons/io";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import colors from "../../Constant/Colors/colors";


export const ForgetPassword = () => {

  const [showModal, setShowModal] = useState(false);

  const send = () => {
    alert("Send Now");
  }

  return (
    <>
    <div className="d-flex justify-content-end">
      <button className='forgot_btn' onClick={() => setShowModal(true)}>Forgot Password</button>
      </div>
      {showModal && (
        <div className="modal fade show" tabIndex="-1">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="inner_dialog_box">
                <div className="d-flex pt-2 gap-5">
                  <div className="forgetP_styling">
                    Forgot Password?
                  </div>
                  <button
                    type="button"
                    className="btn-close"
                    onClick={() => setShowModal(false)}
                    aria-label="Close"
                  >
                    <IoCloseCircle className='btn_close_icon' />
                  </button>
                </div>
                <p className="forget_content">Enter the email associated <br /> with your account</p>
                <form action="">
                  <div className='position-relative'>
                    <span className='mail_icon'>
                      <IoIosMail />
                    </span>
                    <input type="text" placeholder='Enter your email' className='forget_style_input' />
                  </div>
                </form>
                <button className='forget_button' onClick={send}>
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}