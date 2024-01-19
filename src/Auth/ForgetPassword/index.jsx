import { useState, useEffect, useContext } from "react"
import './ForgetPassword.css'
import { icons } from "../../Constant/Icons/Icons";

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
                    <div className='btn_close_icon'>{icons.CloseIcon}</div>
                  </button>
                </div>
                <p className="forget_content">Enter the email associated <br /> with your account</p>
                <form action="">
                  <div className='position-relative'>
                    <span className='mail_icon'>
                      {icons.MailIcon}
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