import React from "react";
import { graphql } from "gatsby";
import { getImage, GatsbyImage } from "gatsby-plugin-image";

export const ServiceBlock = ({block}) => {
    const coverImage = getImage(block.services.serviceCoverImage);
    return (
        <section className="services__block" key={block.id}>
            <GatsbyImage image={coverImage} alt="" />
            <h1>{block.title}</h1>
            <p>{block.services.description.description}</p>
            <button
            slug={block.services.button.slug}
            title={block.services.button.title}
            />
            
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
        serviceCoverImage {
          gatsbyImageData(
            quality: 8
            placeholder: TRACED_SVG
            layout: FULL_WIDTH
            formats: AUTO
          )
        }
        serviceActionImages {
          gatsbyImageData(
            quality: 8
            placeholder: BLURRED
            layout: FULL_WIDTH
            formats: AUTO
          )
        }
        button {
            title
            slug
        }
    }
}
`
export default ServiceBlock;