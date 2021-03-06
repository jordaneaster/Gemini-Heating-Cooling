import React from "react";
import { graphql, Link } from "gatsby";
import { Collapse } from 'antd';
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import './service.css'
import Estimate from '../EstimateBanner/Estimatebanner'
import Banner from '../EstimateBanner/Estimatebanner'
import ContactUs from '../contactSection/ContactSection'
import Review from '../Reviews/Review'

const ServiceBlock = ({ block }) => {
    const { Panel } = Collapse;
    const image = getImage(block.serviceActionImages)
    return (
        <>
            <section className="services__block">
                <h1 className="title_banner">{block.title}</h1>
                <div className="card">
                    {block.services.map((service, index) => {
                        return (
                            <div className="Card_item">
                                <img className="image_card" src={service.serviceCoverImage.gatsbyImageData.images.fallback.src} />
                               
                                <h1 className="service_card_title">{service.title}</h1>
                                {service.serviceChecklist.checklist.map((el, i) => (
                                    <p className="jaa"><input checked type="checkbox" />{el.listItem}</p>
                                ))}
                                <Collapse>
                                    <Panel header="More Details" key={index}>
                                        <p >{service.description.description}</p>
                                        <img className="image_card" src={service.serviceActionImages.file}/>
                                    </Panel>
                                </Collapse>
                            </div>
                            
                        )
                    })}
                </div>
            </section>
            <Estimate />
            <Review />
            <ContactUs />
        </>
    )
}

export const query = graphql`
fragment ServiceBlock on ContentfulServicesBlock {
    id
    title
    services {
        id
        title
        description {
          description
        }
        slug
        serviceActionImages {
         file {
             url
         }
        }
        serviceCoverImage {
          gatsbyImageData(layout: FIXED, quality: 10)
        }
        serviceChecklist {
            checklist {
                listItem
              }
        }
    }
}
`
export default ServiceBlock;

{/* <p className="card_para">{service.description.description}</p>
                            <Link>
                                <button className="cardbtn">
                                    Learn More
                            </button>
                            </Link> */}