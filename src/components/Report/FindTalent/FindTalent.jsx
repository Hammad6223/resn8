import React, { useState } from 'react'
import './FindTalent.css'
import Tone from '../../../assets/images/ton.png'
import Accent from '../../../assets/images/acct.png'
import { ReactiveBase, RangeSlider } from '@appbaseio/reactivesearch';
import { Card } from '../Card/Card';
import { Offcanvas } from './Offcanvas';
import { icons } from '../../../Constant/Icons/Icons';

export const FindTalent = () => {

    const [showCheckboxes, setShowCheckboxes] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);

    const checkboxesData = [
        { name: "lifestyle", label: "Lifestyle" },
        { name: "sports", label: "Sports" },
        { name: "music", label: "Music" },
        { name: "comedy", label: "Comedy" },
        { name: "games", label: "Games" },
        { name: "fashion", label: "Fashion" },
    ];

    const [checkboxes, setCheckboxes] = useState(() => {
        const initialCheckboxesState = {};
        checkboxesData.forEach(({ name }) => {
            initialCheckboxesState[name] = false;
        });
        return initialCheckboxesState;
    });

    const handleCheckboxChange = (name) => {
        setCheckboxes((prevCheckboxes) => ({
            ...prevCheckboxes,
            [name]: !prevCheckboxes[name],
        }));
    };

    const radioOptions = [
        { id: "ten", label: "10" },
        { id: "twenty", label: "10-20" },
        { id: "thirty", label: "20-30" },
        { id: "forty", label: "30" },
    ];

    const handleRadioChange = (id) => {
        setSelectedOption(id);
    };

    const DropdownItem = ({ image, icon, label, onClick }) => (
        <div className='d-flex justify-content-between mt-4'>
            <div className='find_browse2_style d-flex gap-2'>
                {image && <img src={image} alt="" />}
                {icon}
                {label}
            </div>
            <div
                style={{ color: "white", fontSize: "25px", cursor: "pointer" }}
                onClick={onClick}
            >
                {label === "Purpose" && (
                    <>
                        {showCheckboxes ? icons.DropIcon : icons.ArrowDropup}
                        {icons.ArrowDropdown}
                    </>
                )}
                {label !== "Purpose" && icons.DropIcon}
            </div>
        </div>
    );

    return (
        <section>
            <div className="container-fluid dashboard_bg pb-3">
                <div className="container pt-4">
                    <div className="row">
                        <div className="col-xxl-9 col-xl-9 col-lg-11 col-md-11 col-sm-11 col-10">
                            <div className='find_browse_style'>
                                Browse Voices
                            </div>
                        </div>
                        <div className="col-xxl-3 col-xl-3 col-lg-1 col-md-1 col-sm-1 col-1">
                            <div className='find_browse_style d-xl-block d-lg-none d-md-none d-sm-none d-none'>
                                Filters
                            </div>
                            <button className="d-xxl-none d-xl-none d-lg-block d-md-block d-sm-block d-block" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight" style={{ border: "none", background: "none" }}>
                                <div style={{ color: "white", fontSize: "30px" }}>{icons.FilterAlt}</div>
                            </button>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-xxl-9 col-xl-9 col-lg-12 col-md-12 p-0">
                            <div className="find_t_box pb-3 ps-2">
                                <div className="row m-0">
                                    <div className="col-md-4 p-0">
                                        <Card />
                                    </div>
                                    <div className="col-md-4 p-0">
                                        <Card />
                                    </div>
                                    <div className="col-md-4 p-0">
                                        <Card />
                                    </div>
                                </div>
                                <div className="row m-0">
                                    <div className="col-md-4 p-0">
                                        <Card />
                                    </div>
                                    <div className="col-md-4 p-0">
                                        <Card />
                                    </div>
                                    <div className="col-md-4 p-0">
                                        <Card />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-3 col-xl-3 d-xxl-block d-xl-block d-lg-none d-md-none d-sm-none d-none">
                            <div className='filter_box pb-2'>
                                <div className='ps-4 pe-4'>
                                    <div className='d-flex pt-4'>
                                        <div className='input_f_box d-flex'>
                                            <div className='d-flex gap-2 ps-2 align-items-center'>
                                                <div style={{ color: "grey" }}>{icons.SearchIcon}</div>
                                                <input type="text" className='input_field_f mt-1' placeholder='Search Voice' />
                                            </div>
                                        </div>
                                        <button className='find_f_btn gender_style'>
                                            Find
                                        </button>
                                    </div>
                                    <button className='save_f_btn find_browse2_style mt-3'>
                                        {icons.HeartIcon} Save Search
                                    </button>
                                    <DropdownItem label="Tone" image={Tone} />
                                    <DropdownItem label="Accent" image={Accent} />
                                    <DropdownItem label="Gender" icon={icons.GenderIcon} />
                                    <DropdownItem label="Price" icon={icons.PricetagIcon} />
                                    <DropdownItem
                                        label="Purpose"
                                        icon={icons.GoGoalIcon}
                                        onClick={() => setShowCheckboxes(!showCheckboxes)}
                                    />
                                    {showCheckboxes && (
                                        <div>
                                            {checkboxesData.map(({ name, label }) => (
                                                <div
                                                    key={name}
                                                    className="d-flex ps-5 justify-content-between mt-3"
                                                >
                                                    <div className="find_browse2_style">{label}</div>
                                                    <label className="checkbox-label">
                                                        <input
                                                            type="checkbox"
                                                            name={name}
                                                            checked={checkboxes[name]}
                                                            onChange={() => handleCheckboxChange(name)}
                                                            style={{ display: "none" }}
                                                        />
                                                        <span className="check_find">
                                                            {checkboxes[name] ? icons.CheckboxIcon : icons.UnCheckboxIcon}
                                                        </span>
                                                    </label>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div className='filter_box mt-3 pb-1'>
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
                                    <ReactiveBase
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
                                        </ReactiveBase>
                                </div>
                            </div>
                            <div className='filter_box mt-3 pb-2'>
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
                                    <ReactiveBase
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
                                    </ReactiveBase>
                                </div>
                            </div>
                            <div className='filter_box mt-3 pb-2'>
                                <div className='ps-4 pe-4 pt-4'>
                                    <div className='find_browse2_style'>
                                        Stories per day
                                    </div>
                                    {radioOptions.map(({ id, label }) => (
                                        <div key={id} className="d-flex mt-1">
                                            <label className="checkbox-label">
                                                <input
                                                    type="radio"
                                                    name="radiobutton"
                                                    checked={selectedOption === id}
                                                    onChange={() => handleRadioChange(id)}
                                                    style={{ display: "none" }}
                                                />
                                                <span className="check_find">
                                                    {selectedOption === id ? icons.CircleDotIcon : icons.CircleIcon}
                                                </span>
                                            </label>
                                            <div className="find_browse2_style ps-2 mt-2">{label}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Offcanvas />
        </section>
    )
}