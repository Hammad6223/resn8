import React from 'react'
import './Price.css'
import colors from '../../../Constant/Colors/colors'

export const Price = () => {
  return (
    <section>
      <div className="container-fluid pt-5 bg_landing">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className='price_style' style={{ color: colors.whiteColor }}>
                Pricing
              </div>
              <div className='upgrade_style' style={{ color: colors.greyColor }}>
                <p style={{ width: "70%" }}>Upgrade your Resn8 account to PRO and unlock unlimited benefits to enhance your project</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              {/* <div class="card" style="width: 18rem;">
                <img src="..." class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                  </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
