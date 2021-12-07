import React from "react";
import { graphql } from "gatsby";
import './Homebanner.css'
import image from '../../images/6259536.jpg'
import { getImage } from "gatsby-plugin-image";
import Partner from '../partnerLogo/Partner'
export const HomeBanner = ({ block }) => {
  const bannerLogo = getImage(block.bannerLogo);
  // bannerLogo.images.fallback.src
  return (
    <>
      <section className="home__banner">
        <img className="imagess" src={image} />
        <h1 className="mind">Quality Heating & Cooling Services For Your Peace of Mind</h1>
        <button className="btnbanner">{block.button.title}</button>
      </section>
      <Partner />
    </>
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