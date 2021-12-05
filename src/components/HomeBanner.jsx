import React from "react";
import { graphql } from "gatsby";
import { getImage, GatsbyImage } from "gatsby-plugin-image";

export const HomeBanner = ({block}) => {
    const bannerLogo = getImage(block.bannerLogo);
    return (
        <section className="home__banner" key={block.id}>
            <GatsbyImage image={bannerLogo} alt=""/>
            <button
            aria-label="send"
            slug={block.button.slug}
            title={block.button.title}
            />
        </section>
    )
}

export const query = graphql`
fragment HomeBanner on ContentfulBanner {
    id
    title
    bannerLogo {
      gatsbyImageData(
        quality: 8
        placeholder: BLURRED
        layout: FULL_WIDTH
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