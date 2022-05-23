import React, { useState } from 'react'
import '../style/home.scss'
import collectionsItems from '../Components/collectionsItemsData';
import Image1 from '../Components/images/black-stroke.png'
import { Link } from "react-router-dom";
import HomeButtons from '../Components/HomeButtons';

export default function Home() {





    return (
        <div className="home-container">

            <div className="header-container">

                <div className="header-container-image">

                    <div className='box-header-overlap'>
                        <img src={Image1} alt="" className="header-container-image" />
                        <div className='inner-text-container'>
                            <h3 className="header-container-image-title1">Prints, stickers and mugs</h3>
                            <h4 className="header-container-image-title2">Created with love by illustrator Jessica Woods</h4>
                        </div>
                    </div>
                </div>
            </div>



            <div className="collections-container">

                {/* <div className='collections-top-bar' /> */}

                <div className='collection-title-box'>
                    <h2 className="collections-title">Collections list</h2>
                    <div className='collections-title-bar' />
                </div>

                <HomeButtons />

            </div>

            <div className="navbar-header-bar" />
        </div>




    )
}