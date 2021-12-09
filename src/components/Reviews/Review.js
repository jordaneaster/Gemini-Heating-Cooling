import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { Rate } from 'antd';
const Review = () => {
    const datas = useStaticQuery(graphql`
    query reviw {
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
`)
    const newdata = datas.allContentfulCustomerReviews.nodes
    return (
        <>
            <section className="partner_container">
                <h1 className="partsners">Our Customer Reviews</h1>
                <div className="faawa">
                    {newdata.map(el => (
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
                </div>
            </section>
        </>
    )
}

export default Review;