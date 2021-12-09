import React, { useState } from 'react'
import Layout from '../components/Layout/Layout'
import { notification } from 'antd'
import './index.css'
const ContactUs = () => {
    const [userInfo, setUserInfo] = useState({
        name: "",
        email: "",
        address: "",
        city: "",
        state: "",
        zip: "",
        phone: ""
    })
    const openNotificationWithIcon = type => {
        notification[type]({
            message: 'Gemini Notification!',
            description:
                'You have Successfully submit your information Thanks you!',
        });
    };
    const encode = (data) => {
        return Object.keys(data)
            .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
            .join("&");
    }
    const handleOnchange = e => {
        setUserInfo({
            ...userInfo,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({ "form-name": "contact", ...userInfo })
        })
            .then(() => {
                openNotificationWithIcon('success')
                setUserInfo({
                    name: "",
                    email: "",
                    address: "",
                    city: "",
                    state: "",
                    zip: "",
                    phone: ""
                })
            })
            .catch(error => alert(error));

    };
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
                            <form name="contact" method="post" onSubmit={(e) => handleSubmit(e)} data-netlify="true" data-netlify-honeypot="bot-field">
                                <input type="hidden" name="form-name" value="contact" />
                                <label htmlFor="name" className="nam">Name*</label>
                                <input name="name" value={userInfo.name} onChange={(e) => handleOnchange(e)} placeholder="Type your Full Name..." className="inp" type="text" />
                                <label htmlFor="email" className="nam">Email*</label>
                                <input name="email" value={userInfo.email} onChange={(e) => handleOnchange(e)} placeholder="Type your Email..." className="inp" type="text" />
                                <label htmlFor="address" className="nam">Address*</label>
                                <input name="address" value={userInfo.address} onChange={(e) => handleOnchange(e)} placeholder="Type your Address..." className="inp" type="text" />
                                <label htmlFor="city" className="nam">City*</label>
                                <input name="city" value={userInfo.city} onChange={(e) => handleOnchange(e)} placeholder="Type your City..." className="inp" type="text" />
                                <label htmlFor="state" className="nam">State*</label>
                                <input name="state" value={userInfo.state} onChange={(e) => handleOnchange(e)} placeholder="Type your State..." className="inp" type="text" />
                                <label htmlFor="zip" className="nam">Zip*</label>
                                <input name="zip" value={userInfo.zip} onChange={(e) => handleOnchange(e)} placeholder="Type your Zip..." className="inp" type="text" />
                                <label htmlFor="phone" className="nam">Phone*</label>
                                <input name="phone" value={userInfo.phone} onChange={(e) => handleOnchange(e)} placeholder="Type your Phone..." className="inp" type="number" />
                                <button type="submit" className="contactUsbtn">Click To Contact US</button>
                            </form>
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