import React from 'react'
import { graphql } from 'gatsby';
import './service.css'
import Layout from '../components/Layout/Layout'
const Service = ({ data }) => {
  const getdata = data.contentfulService
  console.log(getdata)
  return (
    <Layout>
      <div className="service_contaimer">
        <div className="Service_o">
          <h1 className="title_banner">{getdata.title}</h1>
          <img className="serviv" src={getdata.serviceCoverImage.file.url} alt="no p" />
          <p className="card_paras">{getdata.description.description}</p>
          <h1 className="title_banner">Our Gallery</h1>
          <div className="sersa">
            {getdata.serviceActionImages.map(el => (
              <div className="imagessa">
                <img className="pic" src={el.file.url} alt="ads" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  )
}
export default Service

export const query = graphql`
query services($slug: String!) {
    contentfulService(slug: {eq:$slug}) {
        title
        description {
          description
        }
        serviceCoverImage {
          file {
            url
          }
        }
        serviceActionImages {
          file {
            url
          }
        }
        button {
          slug
          title
        }
      }
    
  }
`