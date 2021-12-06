import React, { useState } from "react";
import "./Nav.css";
import Logo from '../../images/gemini_main_logo.jpg'
import Hamberger from '../../images/Hamberger.svg'
import { Link } from 'gatsby';

function NavBar() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const navItems = [
        {
            title: "HOME",
            slug: "/"
        },
        {
            title: "ABOUT",
            slug: "/about"
        },
        {
            title: "SERVICES",
            slug: "/services"
        },
        {
            title: "PHOTOS",
            slug: "/photos"
        },
        {
            title: "REVIEWS",
            slug: "/reviews"
        },
        {
            title: "CONTACT",
            slug: "/Contact"
        },
    ]
    return (
        <>
            <nav className="navbar">
                <div className="nav-container">
                    <Link to="/">
                        <span className="nav-logo">
                            <img className="Logo_image" src={Logo} alt="no logo" />
                        </span>
                    </Link>
                    <ul className={click ? "nav-menu active" : "nav-menu"}>
                        {navItems.map((el, i) => (
                            <Link to={`${el.slug}`} key={i}>
                                <li className="nav-item">
                                    <span
                                        className="nav-links"
                                        onClick={handleClick}
                                    >
                                        {el.title}
                                    </span>
                                </li>
                            </Link>
                        ))}
                    </ul>
                    <div className="nav-icon" onClick={handleClick}>
                        <div className={`Hamberger ${click ? "fas fa-times" : "fas fa-bars"}`}>
                            <img src={Hamberger} className="Hamberger_item" alt="Hamberger menu" />
                        </div>
                    </div>
                </div>

            </nav>
        </>
    );
}

export default NavBar;