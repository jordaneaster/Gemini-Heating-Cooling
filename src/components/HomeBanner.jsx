import React from "react";
import { graphql } from "gatsby";
import { getImage, GatsbyImage } from "gatsby-plugin-image";

export const HomeBanner = ({block}) => {
  console.log(block)
    const bannerLogo = getImage(block.bannerLogo);
    console.log(bannerLogo)
    return (
        <section className="home__banner" key={block.id}>
            <img src={bannerLogo.images.fallback.src} />
            <button className="btn">{block.button.title}</button>
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