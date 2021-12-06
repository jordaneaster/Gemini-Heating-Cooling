import React from 'react'
import Footerlogo from '../../images/footerlogo.png'
import './Footer.css'
const Footer = () => {
    return (
        <div className="FooterConatiner">
            <div className="FooterboX">
                <div className="footerLogo">
                    <img className="images" src={Footerlogo} alt="footerlogo" />
                </div>
                <div className="footerLink">
                    <div className="footerbreak">
                        <div className="w1">
                            <p className="lightcolor">Gemini</p>
                            <p className="fontslim">4086 Autumn Hill Ln,<br /> Hamilton, OH 45011, USA</p>
                            {/* <p className="lightcolor">(440) 969-1141</p> */}
                            <p className="lightcolor">Geminiheatingandcooling@gmail.com</p>
                        </div>
                        <div className="w2">
                            <p className="links">Home</p>
                            <p className="links">About</p>
                            <p className="links">Service</p>
                            <p className="links">Reviews</p>
                            <p className="links">Contact</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Footer