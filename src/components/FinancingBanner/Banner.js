import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import './Banner.css'
const Banner = () => {
    const datas = useStaticQuery(graphql`
    query financing {
        allContentfulFinancingBanner {
          nodes {
            image {
              file {
                url
              }
            }
            title
            description {
              description
            }
            button {
              title
              slug
            }
          }
        }
      }
      
`)
const getdata = datas.allContentfulFinancingBanner.nodes[0]
    return (
        <section className="banners_container">
            <div className="banners_block">
               <div>
                   <img className="ha" src={getdata.image.file.url} alt="no picss" />
               </div>
               <div>
                   <h1 className="heading_banner">{getdata.title}</h1>
                   <p className="para_bannee">{getdata.description.description}</p>
               </div>
               <div>
                   <a href={getdata.button.slug} target="_blank">
                   <button className="btnnanner">{getdata.button.title}</button>
                   </a>
               </div>
            </div>
        </section>
    )
}

export default Banner;