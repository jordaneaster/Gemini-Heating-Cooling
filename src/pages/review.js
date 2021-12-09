import * as React from "react"
import Layout from '../components/Layout/Layout'
import './index.css'
import { Rate } from 'antd';
import { graphql } from "gatsby"
const Review = ({ data }) => {
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

export default Review
