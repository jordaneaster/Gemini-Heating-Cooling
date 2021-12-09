import React, {useState} from 'react'
import './contact.css'
import { notification } from 'antd'
const ContactUs = () => {
    const [userInfo, setUserInfo] = useState({
        name: "",
        email: "",
        address_line_1: "",
        address_line_2: "",
        city: "",
        state: "",
        zip: "",
        phone: "",
        message: ""
    })
    const openNotificationWithIcon = type => {
        notification[type]({
            message: 'Gemini Notification!',
            description:
                'You have successfully submitted your information. Thank You!',
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
                    address_line_1: "",
                    address_line_2: "",
                    city: "",
                    state: "",
                    zip: "",
                    phone: "",
                    message: ""
                })
            })
            .catch(error => alert(error));

    };
    return (
            <div >
                <div className="flex_contact">
                    <div className="aka">
                        <div className="flex2s">
                                <h1 className="wes">How Can We Help You With Your HVAC Needs?</h1>
                                <form name="contact" method="post" onSubmit={(e) => handleSubmit(e)} data-netlify="true" data-netlify-honeypot="bot-field">
                                <input type="hidden" name="form-name" value="contact" />
                                <input name="name" value={userInfo.name} onChange={(e) => handleOnchange(e)} placeholder="Full Name" className="inp" type="text" />
                                <input name="email" value={userInfo.email} onChange={(e) => handleOnchange(e)} placeholder="Email" className="inp" type="text" />
                                <input name="address_line_1" value={userInfo.address_line_1} onChange={(e) => handleOnchange(e)} placeholder="Address Line 1" className="inp" type="text" />
                                <input name="address_line_2" value={userInfo.address_line_2} onChange={(e) => handleOnchange(e)} placeholder="Address Line 2" className="inp" type="text" />
                                <input name="city" value={userInfo.city} onChange={(e) => handleOnchange(e)} placeholder="City" className="inp" type="text" />
                                <input name="state" value={userInfo.state} onChange={(e) => handleOnchange(e)} placeholder="State" className="inp" type="text" />
                                <input name="zip" value={userInfo.zip} onChange={(e) => handleOnchange(e)} placeholder="Zip" className="inp" type="text" />
                                <input name="phone" value={userInfo.phone} onChange={(e) => handleOnchange(e)} placeholder="Phone" className="inp" type="number" />
                                <textarea row="3" name="message" value={userInfo.message} onChange={(e) => handleOnchange(e)} placeholder="Leave a detailed message!" className="inp" type="text"/>
                                <button type="submit" className="contactUsbtn">Submit</button>
                                </form>
                               
                        </div>
                    </div>
                    <div className="wid">
                        <h1 className="fill"> We Service Every Brand! Est. 2017</h1>
                        <p className="we">We're here to help your with all of your heating and cooling service, repair, and installation needs. </p>
                        <p className="central">Gemini Heating & Cooling.</p>
                        <p className="we">
                        <br />4110 Autumn Hill ln.
                        <br />Hamilton.
                        <br />Ohio
                        <br />45011</p>
                        <p className="we"><a href="tel:5136089137">(513) 608-9137</a></p>
                    </div>
                </div>
            </div>
    )
}
export default ContactUs