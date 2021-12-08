import React from "react";
import { graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import './welcomebanner.css'

export const WelcomeBanner = ({ block }) => {
    const actionImage = getImage(block.actionImage);
    return (
        <section className="welcome_banner">
            <div className="Welcomebanner_FLex">
                <div className="welcome_flex1">
                    <img className="welcome_image" src={actionImage.images.fallback.src} alt="baner" />
                </div>
                <div className="welcome_flex2">
                    <p className="block__description">{block.description.description}</p>
                    <div className="btnalign">
                    <button  onClick={() => {
                       window.scrollTo({
                        top: 3850,
                        left: 0,
                        behavior: 'smooth'
                      });
                   }} className="welcome_button">
                        {block.cta[0].title}
                    </button>
                    </div>
                </div>
            </div>
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