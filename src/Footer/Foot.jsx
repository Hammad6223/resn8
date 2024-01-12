import React from 'react'
import { FaRegCopyright } from "react-icons/fa";


export const Foot = () => {
    return (
        <section>
            <div className="container-fluid footer_BG pb-3">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className='project_detail pt-3'>
                                Copyright <FaRegCopyright className='copyright_icon ps-1 pe-1' /> 2024. All rights reserved
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
