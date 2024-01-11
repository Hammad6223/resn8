import React, { useState } from 'react'
import './FindTalent.css'
import { IoMdArrowDropdown } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import Tone from '../../../assets/images/ton.png'
import Accent from '../../../assets/images/acct.png'
import { MdOutlineTransgender } from "react-icons/md";
import { IoPricetagOutline } from "react-icons/io5";
import { GoGoal } from "react-icons/go";
import { MdCheckBoxOutlineBlank, MdCheckBox } from "react-icons/md";
import { ReactiveBase, RangeSlider } from '@appbaseio/reactivesearch';
import { FaRegCircleDot } from "react-icons/fa6";
import { FaRegCircle } from "react-icons/fa6";
import { Card } from '../Card/Card';

export const FindTalent = () => {

    const [checkboxes, setCheckboxes] = useState({
        lifestyle: false,
        sports: false,
        music: false,
        comedy: false,
        games: false,
        fashion: false,
    });
    const [radiobutton, setRadiobutton] = useState({
        ten: false,
        twenty: false,
        thirty: false,
        fourty: false,
    });

    const handleRadioboxChange = (name) => {
        setRadiobutton((prevRadiobutton) => ({
            ten: name === 'ten' ? !prevRadiobutton.ten : false,
            twenty: name === 'twenty' ? !prevRadiobutton.twenty : false,
            thirty: name === 'thirty' ? !prevRadiobutton.thirty : false,
            fourty: name === 'fourty' ? !prevRadiobutton.fourty : false,
        }));
    };

    const handleCheckboxChange = (event) => {
        const { name, checked } = event.target;
        setCheckboxes({
            ...checkboxes,
            [name]: checked,
        });
    };

    return (
        <section>
            <div className="container-fluid dashboard_bg">
                <div className="container pt-4">
                    <div className="row">
                        <div className="col-md-9">
                            <div className='find_browse_style'>
                                Browse Voices
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className='find_browse_style'>
                                Filters
                            </div>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-md-9 p-0">
                            <div className="find_t_box pb-3">
                                <div className="d-flex ps-2">
                                    <Card />
                                    <Card />
                                    <Card />
                                </div>
                                <div className="d-flex ms-2 me-2 gap-1">
                                    <Card />
                                    <Card />
                                    <Card />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className='filter_box pb-2'>
                                <div className='ps-4 pe-4'>
                                    <div className='d-flex pt-4'>
                                        <div className='input_f_box d-flex'>
                                            <div className='d-flex gap-2 ps-3 align-items-center'>
                                                <div>
                                                    <CiSearch style={{ color: "grey" }} />
                                                </div>
                                                <div>
                                                    <input type="text" className='input_field_f mt-1' placeholder='Search Voice' />
                                                </div>
                                            </div>
                                        </div>
                                        <button className='find_f_btn gender_style'>
                                            Find
                                        </button>
                                    </div>
                                    <button className='save_f_btn find_browse2_style mt-3'>
                                        <CiHeart /> Save Search
                                    </button>
                                    <div className='d-flex justify-content-between mt-4'>
                                        <div className='find_browse2_style d-flex gap-2'>
                                            <img src={Tone} alt="" /> Tone
                                        </div>
                                        <IoMdArrowDropdown style={{ color: "white", fontSize: "25px" }} />
                                    </div>
                                    <div className='d-flex justify-content-between mt-4'>
                                        <div className='find_browse2_style d-flex gap-2'>
                                            <img src={Accent} alt="" />Accent
                                        </div>
                                        <IoMdArrowDropdown style={{ color: "white", fontSize: "25px" }} />
                                    </div>
                                    <div className='d-flex justify-content-between mt-4'>
                                        <div className='find_browse2_style d-flex gap-2'>
                                            <MdOutlineTransgender style={{ color: "white" }} />Gender
                                        </div>
                                        <IoMdArrowDropdown style={{ color: "white", fontSize: "25px" }} />
                                    </div>
                                    <div className='d-flex justify-content-between mt-4'>
                                        <div className='find_browse2_style d-flex gap-2'>
                                            <IoPricetagOutline style={{ color: "white" }} />Price
                                        </div>
                                        <IoMdArrowDropdown style={{ color: "white", fontSize: "25px" }} />
                                    </div>
                                    <div className='d-flex justify-content-between mt-4'>
                                        <div className='find_browse2_style d-flex gap-2'>
                                            <GoGoal style={{ color: "white" }} />Purpose
                                        </div>
                                        <IoMdArrowDropdown style={{ color: "white", fontSize: "25px" }} />
                                    </div>
                                    <div className="d-flex ps-5 justify-content-between mt-3">
                                        <div className='find_browse2_style'>Lifestyle</div>
                                        <label className='checkbox-label'>
                                            <input
                                                type="checkbox"
                                                name="lifestyle"
                                                checked={checkboxes.lifestyle}
                                                onChange={handleCheckboxChange}
                                                style={{ display: 'none' }}
                                            />
                                            <span className="check_find">
                                                {checkboxes.lifestyle ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
                                            </span>
                                        </label>
                                    </div>
                                    <div className="d-flex ps-5 justify-content-between mt-3">
                                        <div className='find_browse2_style'>Sports</div>
                                        <label className='checkbox-label'>
                                            <input
                                                type="checkbox"
                                                name="sports"
                                                checked={checkboxes.sports}
                                                onChange={handleCheckboxChange}
                                                style={{ display: 'none' }}
                                            />
                                            <span className="check_find">
                                                {checkboxes.sports ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
                                            </span>
                                        </label>
                                    </div>
                                    <div className="d-flex ps-5 justify-content-between mt-3">
                                        <div className='find_browse2_style'>Music</div>
                                        <label className='checkbox-label'>
                                            <input
                                                type="checkbox"
                                                name="music"
                                                checked={checkboxes.music}
                                                onChange={handleCheckboxChange}
                                                style={{ display: 'none' }}
                                            />
                                            <span className="check_find">
                                                {checkboxes.music ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
                                            </span>
                                        </label>
                                    </div>
                                    <div className="d-flex ps-5 justify-content-between mt-3">
                                        <div className='find_browse2_style'>Comedy</div>
                                        <label className='checkbox-label'>
                                            <input
                                                type="checkbox"
                                                name="comedy"
                                                checked={checkboxes.comedy}
                                                onChange={handleCheckboxChange}
                                                style={{ display: 'none' }}
                                            />
                                            <span className="check_find">
                                                {checkboxes.comedy ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
                                            </span>
                                        </label>
                                    </div>
                                    <div className="d-flex ps-5 justify-content-between mt-3">
                                        <div className='find_browse2_style'>Games</div>
                                        <label className='checkbox-label'>
                                            <input
                                                type="checkbox"
                                                name="games"
                                                checked={checkboxes.games}
                                                onChange={handleCheckboxChange}
                                                style={{ display: 'none' }}
                                            />
                                            <span className="check_find">
                                                {checkboxes.games ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
                                            </span>
                                        </label>
                                    </div>
                                    <div className="d-flex ps-5 justify-content-between mt-3">
                                        <div className='find_browse2_style'>Fashion</div>
                                        <label className='checkbox-label'>
                                            <input
                                                type="checkbox"
                                                name="fashion"
                                                checked={checkboxes.fashion}
                                                onChange={handleCheckboxChange}
                                                style={{ display: 'none' }}
                                            />
                                            <span className="check_find">
                                                {checkboxes.fashion ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
                                            </span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className='filter_box mt-3 pb-3'>
                                <div className='ps-4 pe-4 pt-4'>
                                    <div className='find_browse2_style'>
                                        Followers
                                    </div>
                                    <div className='d-flex justify-content-between mt-3'>
                                        <div className='find_browse2_style'>
                                            Quantity
                                        </div>
                                        <div className='find_browse2_style'>
                                            10-225K
                                        </div>
                                    </div>
                                    <div className='mt-2'>
                                        {/* <ReactiveBase
                                            app="your_app_name"
                                            credentials="your_credentials"
                                            url="https://appbase-demo-ansible-abxiydt-arc.searchbase.io"
                                        >
                                            <RangeSlider
                                                componentId="PriceSensor"
                                                dataField="price"
                                                className='custom-range-slider' // Use a custom class for styling
                                                range={{ start: 0, end: 300000 }}
                                                defaultValue={{
                                                    start: 10,
                                                    end: 225000
                                                }}
                                            />
                                        </ReactiveBase> */}
                                    </div>

                                </div>
                            </div>
                            <div className='filter_box mt-3 pb-3'>
                                <div className='ps-4 pe-4 pt-4'>
                                    <div className='find_browse2_style'>
                                        Ad price
                                    </div>
                                    <div className='d-flex justify-content-between mt-3'>
                                        <div className='find_browse2_style'>
                                            Price
                                        </div>
                                        <div className='find_browse2_style'>
                                            $100-3000
                                        </div>
                                    </div>
                                    {/* <ReactiveBase
                                        app="your_app_name"
                                        credentials="your_credentials"
                                        url="https://appbase-demo-ansible-abxiydt-arc.searchbase.io"
                                    >
                                        <RangeSlider
                                            componentId="PriceSensor"
                                            dataField="price"
                                            className='custom-range-slider' // Use a custom class for styling
                                            range={{ start: 0, end: 300000 }}
                                            defaultValue={{
                                                start: 10,
                                                end: 225000
                                            }}
                                        />
                                    </ReactiveBase> */}
                                </div>
                            </div>
                            <div className='filter_box mt-3 pb-3'>
                                <div className='ps-4 pe-4 pt-4'>
                                    <div className='find_browse2_style'>
                                        Stories per day
                                    </div>
                                    <div className="d-flex mt-2">
                                        <label className='checkbox-label'>
                                            <input
                                                type="radio"
                                                name="ten"
                                                checked={radiobutton.ten}
                                                onChange={() => handleRadioboxChange("ten")}
                                                style={{ display: 'none' }}
                                            />
                                            <span className="check_find">
                                                {radiobutton.ten ? <FaRegCircleDot /> : <FaRegCircle />}
                                            </span>
                                        </label>
                                        <div className='find_browse2_style ps-2 mt-2'>10</div>
                                    </div>
                                    <div className="d-flex mt-1">
                                        <label className='checkbox-label'>
                                            <input
                                                type="radio"
                                                name="twenty"
                                                checked={radiobutton.twenty}
                                                onChange={() => handleRadioboxChange("twenty")}
                                                style={{ display: 'none' }}
                                            />
                                            <span className="check_find">
                                                {radiobutton.twenty ? <FaRegCircleDot /> : <FaRegCircle />}
                                            </span>
                                        </label>
                                        <div className='find_browse2_style ps-2 mt-2'>10-20</div>
                                    </div>
                                    <div className="d-flex mt-1">
                                        <label className='checkbox-label'>
                                            <input
                                                type="radio"
                                                name="thirty"
                                                checked={radiobutton.thirty}
                                                onChange={() => handleRadioboxChange("thirty")}
                                                style={{ display: 'none' }}
                                            />
                                            <span className="check_find">
                                                {radiobutton.thirty ? <FaRegCircleDot /> : <FaRegCircle />}
                                            </span>
                                        </label>
                                        <div className='find_browse2_style ps-2 mt-2'>20-30</div>
                                    </div>
                                    <div className="d-flex mt-1">
                                        <label className='checkbox-label'>
                                            <input
                                                type="radio"
                                                name="fourty"
                                                checked={radiobutton.fourty}
                                                onChange={() => handleRadioboxChange("fourty")}
                                                style={{ display: 'none' }}
                                            />
                                            <span className="check_find">
                                                {radiobutton.fourty ? <FaRegCircleDot /> : <FaRegCircle />}
                                            </span>
                                        </label>
                                        <div className='find_browse2_style ps-2 mt-2'>30</div>
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