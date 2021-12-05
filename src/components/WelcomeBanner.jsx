import React from "react";
import { graphql } from "gatsby";
import { getImage, GatsbyImage } from "gatsby-plugin-image";


export const WelcomeBanner = ({block}) => {
    const actionImage = getImage(block.actionImage);
    return (
        <section className="welcome_banner" key={block.id}>
            <h1>{block.title}</h1>
            <p className="block__description">{block.description.description}</p>
            <GatsbyImage image={actionImage} alt={block.actionImage.description}/>
            <button
            aria-label="send"
            slug={block.cta.slug}
            title={block.cta.title}
            className="cta__button"
            />
        </section>
    )
}


export const query = graphql`
  fragment WelcomeBanner on ContentfulWelcomeHeader {
    id
    title
    description {
      description
    }
    actionImage {
      gatsbyImageData(
          quality: 10
          placeholder: BLURRED
          formats: JPG
      )
      description
    }
    cta {
      slug
      title
    }
}
`;

export default WelcomeBanner;