import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

export const ServiceBlock = ({block}) => {
    return (
        <section className="services__block" key={block.id}>
           {block.services.map(service => {
             return (
               <div>
               <h1>{service.title}</h1>
               <p>{service.description.description}</p>
               <GatsbyImage src={service.serviceCoverImage} alt="no-image"/>
               <button slug={service.button.slug}>
                 {service.button.title}
               </button>
               </div>
             )
           })}
            
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