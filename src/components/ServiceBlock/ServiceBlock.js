import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import './service.css'
const ServiceBlock = ({ block }) => {
    console.log(block)
    return (
        <section className="services__block">
            <h1 className="title_banner">{block.title}</h1>
            <div className="card">
                {block.services.map(service => {
                    return (
                        <div className="Card_item">
                            <img className="image_card" src={service.serviceCoverImage.gatsbyImageData.images.fallback.src} />
                            <h1 className="service_card_title">{service.title}</h1>
                            <p className="card_para">{service.description.description}</p>
                            <button className="cardbtn">
                                Read More
                            </button>
                        </div>
                    )
                })}
            </div>

        </section>
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
        serviceActionImages {
          gatsbyImageData(layout: FIXED, quality: 10)
        }
        serviceCoverImage {
          gatsbyImageData(layout: FIXED, quality: 10)
        }
        button {
            title
            slug
        }
    }
}
`
export default ServiceBlock;