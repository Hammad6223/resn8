import React from 'react'
import './Footer.css'
import colors from '../Constant/Colors/colors'
import line from '../assets/images/Line_one.png'
import { IoIosArrowForward } from "react-icons/io";
import { FaFacebookF, FaTwitter, FaInstagram, FaRegCopyright } from "react-icons/fa";

export const Footer = () => {

  const footerData = [
    {
      title: 'Subscribe to our newsletter',
      items: [
        <div key="lineStyle" className="line_style">
          <input key="emailInput" type="text" placeholder="Email address" className="footer_input" style={{ color: colors.whiteColor }} />
          <div key="curveStyle" className="curve_style" style={{ background: colors.primaryColor }}>
            <IoIosArrowForward style={{ color: colors.whiteColor }} />
          </div>
        </div>,
        <div style={{ display: "flex", gap: "40px" }}>
          <FaFacebookF style={{ color: colors.whiteColor, fontSize: '20px' }} />
          <FaTwitter style={{ color: colors.whiteColor, fontSize: '20px' }} />
          <FaInstagram style={{ color: colors.whiteColor, fontSize: '20px' }} />
        </div>
      ]
    },
    {
      title: 'For Clients',
      items: [
        'Voice Marketplace',
        <div className='for_talent' style={{ marginTop: "60px", color: colors.whiteColor }}>For Talent</div>,
        <div className='voice_style mt-3'>How to Find Work</div>,
        <div className='voice_style mt-3'>Trust, Safety & Security</div>,
      ],
    },
    { title: 'Resources', items: ['Help & Support'] },
    {
      title: 'Company',
      items: [
        <div style={{ display: "flex" }}>
          <div style={{width: "50%"}}>
            <p>About Us</p>
            <p>Leadership</p>
            <p>Investor Relations</p>
            <p>Careers</p>
            <p>Press</p>
          </div>
          <div style={{width: "50%"}}>
            <p>Contact Us</p>
            <p>Modern Slavery</p>
            <p>Terms & Condition</p>
            <p>Privacy Policy</p>
          </div>
        </div>
      ]
    }
  ];

  return (
    <section>
      <div className="container-fluid pb-5" style={{ background: colors.blackColor }}>
        <div className="container">
          <div className="row pt-4">
            <div className="col-md-12">
              <div className='project_style' style={{ color: colors.whiteColor }}>
                Resn8
              </div>
              <div className='project_detail' style={{ color: colors.whiteColor }}>
                Resn8 increases voice-over project productivity by creating new opportunities for buyers and sellers to connect, <br />
                collaborate, and leverage innovative ai- technology all on a single, easy-to-use, platform.
              </div>
              <div style={{ paddingTop: "50px" }}>
                <img src={line} alt="" style={{ width: "100%" }} />
              </div>
            </div>
          </div>
          <div className="row mt-5">
            {footerData.map((section, index) => (
              <div className="col-lg-3 col-md-6 mb-4 p-0 text-center text-center text-sm-start" key={index}>
                <div className='for_talent' style={{ color: colors.whiteColor }}>
                  {section.title}
                </div>
                {section.items.map((item, itemIndex) => (
                  <div className="voice_style mt-3" style={{ color: colors.whiteColor }} key={itemIndex}>
                    {item}
                  </div>
                ))}
              </div>
            ))}
          </div>
          <div style={{ paddingTop: "50px" }}>
            <img src={line} alt="" style={{ width: "100%" }} />
          </div>
          <div className='project_detail mt-4' style={{ color: colors.whiteColor }}>
            Copyright <FaRegCopyright style={{ color: colors.whiteColor, fontSize: "20px" }} className='ps-1 pe-1' /> 2024. All rights reserved
          </div>
        </div>
      </div>
    </section>
  )
}