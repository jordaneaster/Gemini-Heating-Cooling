import React from 'react'
import Layout from '../components/Layout/Layout'
import {Button} from 'antd'
import './index.css'
const ContactUs = () => {
    return (
        <Layout>
            <div >
                <div className="g">
                    <h1 className="headings">Contact Central Heating & Air Conditioning</h1>
                </div>
                <div className="flex_contact">
                    <div className="aka">
                        <div className="flex2s">
                                <h1 className="wes">How Can We Help You With Your HVAC Needs?</h1>
                                <p className="nam">Name*</p>
                                <input className="inp" type="text" />
                                <p className="nam">Email*</p>
                                <input className="inp" type="text" />
                                <p className="nam">Address*</p>
                                <input className="inp" type="text" />
                                <p className="nam">City*</p>
                                <input className="inp" type="text" />
                                <p className="nam">State*</p>
                                <input className="inp" type="text" />
                                <p className="nam">Zip*</p>
                                <input className="inp" type="text" />
                                <p className="nam">Phone*</p>
                                <input className="inp" type="number" />
                                <button className="contactUsbtn">Click To Contact US</button>
                        </div>
                    </div>
                    <div className="wid">
                        <h1 className="fill">Fill Out the Form, Email, Call ... We're here to help!  </h1>
                        <p className="we">We're here to help your with your heating and cooling service, repair, and installation needs. </p>
                        <p className="central">Central Heating & Air Conditioning Co.</p>
                        <p className="we">Heating and Cooling Service, and Installation
                        <br />243 Richmond Rd.
                        <br />Richmond Hts.
                        <br />Ohio
                        <br />44143<br />
                        USA</p>
                        <p className="we"><a href="tel:2167319400">Local: (216) 731-9400</a></p>
                    </div>
                </div>
            </div>
        </Layout>
    )
}
export default ContactUs