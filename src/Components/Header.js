import React, { useState } from "react";
import '../style/header.scss'
import { BsSearch } from 'react-icons/bs';
import { BsHandbag } from 'react-icons/bs';
import { Container, Row, Col } from "react-bootstrap";
import { BiMenu } from 'react-icons/bi';
import { GrClose } from 'react-icons/gr';
import { Link } from "react-router-dom";
import { CartState } from '../context/Context';

export default function Header() {

    const [openMenu, setOpenMenu] = useState(false)

    const toggleOpenMenu = () => {
        setOpenMenu(!openMenu)
    }

    const {
        state: { cart },
        dispatch,
    } = CartState();

    console.log(cart)


    let totalQuantity = 0;
    cart.map((cartItem) => totalQuantity += cartItem.qty * 1)
    console.log(totalQuantity)


    return (
        <div className="header-container">

            <div className="header-top-animation">
                <div className="header-bar">
                    ❤🔥 ONLY THIS MONTH 🔥❤ prints A4 for 15€ (value 36€) and Prints A5 for 10€ (value 14€) 🎄HAPPY HOLIDAY!🎄
                </div>

                <div className="header-navbar">

                    <Link to="/" className="navbar-artist-name">jessica woods</Link>

                    <div className="header-right-side">

                        {/* SEARCH BAR */}

                        {/* <div className="search-box">
                            <input className="search-bar" type="text" name="" placeholder="Look for" />
                            <BsSearch className="navbar-buttons-icon search-icon" />
                        </div>   */}


                        <div className="open-close-box" onClick={toggleOpenMenu}>
                            {openMenu ? <GrClose className="navbar-buttons-icon close-icon" /> :
                        <BiMenu className="navbar-buttons-icon hamburger-icon" />}
                        </div>

                        <Link to="/shoppingcart">
                            <div className="cart-icon-number">{totalQuantity}</div> 
                            <BsHandbag className="navbar-buttons-icon cart-icon" />
                        </Link>





                    </div>

                </div>

            </div>

            <div className="navbar-header-bar" />

            <div className={openMenu ? "menu" : "menu display-none"}>
                <Link to="/" className="link-menu">Home page</Link>
                <Link to="/catalogue" className="link-menu">Catalogue</Link>
            </div>

            <div className="menu-laptop">
                <Link to="/" className="link-menu">Home page</Link>
                <Link to="/catalogue" className="link-menu">Catalogue</Link>

            </div>



        </div>
    )
}
