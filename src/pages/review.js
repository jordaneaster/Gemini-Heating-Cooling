import * as React from "react"
import { useState } from "react";
import { notification } from "antd";
import Layout from '../components/Layout/Layout'
import './index.css'
import { Rate } from 'antd';
import { graphql } from "gatsby"
import nate from '../images/logos/Nate-Certification.png'
import epa from '../images/logos/epa.png'
const Review = ({ data }) => {
    const [userInfo, setUserInfo] = useState({
        title: "",
        message: "",
        rating: "",
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
            body: encode({ "form-name": "review", ...userInfo })
        })
            .then(() => {
                openNotificationWithIcon('success')
                setUserInfo({
                    title: "",
                    message: "",
                    rating: ""
                })
            })
            .catch(error => alert(error));

    };
    const getdata = data.allContentfulCustomerReviews.nodes
    return (
        <Layout>
            <div>
                <div className="g">
                    <h1 className="headings">Our Customer Reviews</h1>
                </div>
                <div className="faawa">
                    {getdata.map(el => (
                        <div className="imgresol">
                            <div className="imgdic3">
                                <Rate disabled defaultValue={Number(el.rating)} className="star" count="5" />
                            </div>
                            <div className="imgdic">
                                <img className="imgesa" src={el.image.file.url} />
                            </div>
                            <div className="imgdic2">
                                <h1 className="tiat">{el.title}</h1>
                                <p>{el.review.review}</p>
                            </div>
                        </div>
                    ))}
                    <div className="flex_contact2">
                        <div className="flex_review">
                            <h1 className="alwwys">Satisfaction Guaranteed!</h1>
                            <div>
                                <img width="37%" src={nate} />
                                <img width="20%" src={epa} />
                            </div>
                        </div>
                        <div className="akas">
                            <div className="flex2s">
                                <div>
                                    <h1 className="alwwys">Please Leave Us A Review!</h1>
                                </div>
                                <div>
                                    <form className="review_form" name="review" method="post" onSubmit={(e) => handleSubmit(e)} data-netlify="true" data-netlify-honeypot="bot-field">
                                        <input type="hidden" name="form-name" value="contact" />
                                        <input name="rating" value={userInfo.rating} onChange={(e) => handleOnchange(e)} placeholder="Enter Rating 1-5" className="inp" type="text" />
                                        <input name="title" value={userInfo.title} onChange={(e) => handleOnchange(e)} placeholder="Title" className="inp" type="text" />
                                        <textarea row="3" name="message" value={userInfo.message} onChange={(e) => handleOnchange(e)} placeholder="Leave us a review!" className="inp" type="text" />
                                        <button type="submit" className="contactUsbtn">Submit</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </Layout>
    )
}
export const query = graphql`
query cusery {
                    allContentfulCustomerReviews {
                    nodes {
                    rating
        title
        image {
                    file {
                    url
                }
        }
        review {
                    review
                }
      }
    }
  }
  
`

export default Review;
