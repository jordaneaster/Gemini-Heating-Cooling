import React from "react";
import { graphql } from "gatsby";
import './Homebanner.css'
import { getImage, GatsbyImage } from "gatsby-plugin-image";

export const HomeBanner = ({block}) => {
    const bannerLogo = getImage(block.bannerLogo);
    return (
        <section className="home__banner">
            <img className="imagess" src={bannerLogo.images.fallback.src} />
            <button className="btnbanner">{block.button.title}</button>
        </section>
    )
}

export const query = graphql`
fragment HomeBanner on ContentfulBanner {
    id
    title
    bannerLogo {
      gatsbyImageData(
        quality: 10
        placeholder: BLURRED
        formats: JPG
      )
    }
    button {
      title
      slug
    }
}
`
export default HomeBanner;