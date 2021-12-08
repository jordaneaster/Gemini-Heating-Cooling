import React, { useState } from "react";
import "./Nav.css";
import Logo from '../../images/gemini.png'
import Hamberger from '../../images/Hamberger.svg'
import fb from '../../images/fs.png'
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
            title: "CONTACT",
            slug: "/contactus"
        },
    ]
    return (
        <>
            <div className="gemini">
                <div className="gemini_flex">
                    <div>
                        <Link to="/">
                            <span className="nav-logo">
                                <img className="Logo_image" src={Logo} alt="no logo" />
                            </span>
                        </Link>
                        <a href="https://www.facebook.com" target="_blank">
                            <img className="Logo_imasge" src={fb} alt="no logo" />
                        </a>
                    </div>

                    <div className="daa">
                        <p className="paraser">Servicing <span style={{ color: '#ac3122' }}>Northeast Ohio,</span> Call Now<br /><a href="tel:2167319400" className="number">(216) 731-9400</a></p>
                    </div>
                </div>
            </div>
            <nav className="navbar"  >
                <div className="nav-container">
                    <ul className={click ? "nav-menu active" : "nav-menu"}>
                        {navItems.map((el, i) => (
                            <Link to={`${el.title == "HOME" || el.title == "CONTACT" ? el.slug : "#" }`} key={i} onClick={() => {
                                if(el.title == "ABOUT"){
                                    window.scrollTo({
                                        top: 1400,
                                        left: 0,
                                        behavior: 'smooth'
                                      });
                                }else if(el.title == "SERVICES"){
                                    window.scrollTo({
                                        top: 2300,
                                        left: 0,
                                        behavior: 'smooth'
                                      });
                                }
                            }}>
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
                    <button className="schedules" onClick={() => {
                        window.scrollTo({
                            top: 3900,
                            left: 0,
                            behavior: 'smooth'
                          });
                    }}>Request Quote</button>
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