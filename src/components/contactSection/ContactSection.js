import React from 'react'
import './contact.css'
const ContactUs = () => {
    return (
            <div >
                <div className="flex_contact">
                    <div className="aka">
                        <div className="flex2s">
                                <h1 className="wes">How Can We Help You With Your HVAC Needs?</h1>
                                <form>
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
                                <button className="contactUsbtn" type="submit">Send</button>
                                </form>
                               
                        </div>
                    </div>
                    <div className="wid">
                        <h1 className="fill">We're here to help!  </h1>
                        <p className="we">We're here to help your with all of your heating and cooling service, repair, and installation needs. </p>
                        <p className="central">Gemini Heating & Cooling.</p>
                        <p className="we">Servicing Every Brand Under the Stars!
                        <br />4110 Autumn Hill ln.
                        <br />Hamilton.
                        <br />Ohio
                        <br />45011</p>
                        <p className="we"><a href="tel:5136089137">Local: (513) 608-9137</a></p>
                    </div>
                </div>
            </div>
    )
}
export default ContactUs