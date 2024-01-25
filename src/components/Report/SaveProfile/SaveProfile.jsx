import React, {useEffect} from 'react'
import './SaveProfile.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Card } from '../Card/Card'

export const SaveProfile = () => {

    useEffect(() => {
        AOS.init({
          offset: 300,
          duration: 1000,
        });
      }, []); // Run this effect only once when the component mounts


    return (
        <section>
            <div className="container-fluid dashboard_bg pb-3">
                <div className="container pt-4">
                    <div className="row">
                        <div className="col-md-12" data-aos="fade-up">
                            <div className='find_browse_style'>
                                Saved Profiles
                            </div>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-md-12 p-0" data-aos="fade-down">
                            <div className="find_t_box pb-3 ps-2">
                                <div className="row m-0">
                                    <div className="col-md-3 p-0">
                                        <Card />
                                    </div>
                                    <div className="col-md-3 p-0">
                                        <Card />
                                    </div>
                                    <div className="col-md-3 p-0">
                                        <Card />
                                    </div>
                                    <div className="col-md-3 p-0">
                                        <Card />
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