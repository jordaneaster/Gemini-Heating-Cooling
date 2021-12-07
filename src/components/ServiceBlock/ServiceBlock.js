import React from "react";
import { graphql, Link } from "gatsby";
import './service.css'
import Estimate from '../EstimateBanner/Estimatebanner'
const ServiceBlock = ({ block }) => {
    return (
        <>
        <section className="services__block">
            <h1 className="title_banner">{block.title}</h1>
            <div className="card">
                {block.services.map(service => {
                    return (
                        <div className="Card_item">
                            <img className="image_card" src={service.serviceCoverImage.gatsbyImageData.images.fallback.src} />
                            <h1 className="service_card_title">{service.title}</h1>
                            <p className="card_para">{service.description.description}</p>
                            <Link to={`/${service.slug}`}>
                                <button className="cardbtn">
                                    {service.button[0].title}
                            </button>
                            </Link>
                        </div>
                    )
                })}
            </div>
        </section>
        <Estimate />
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