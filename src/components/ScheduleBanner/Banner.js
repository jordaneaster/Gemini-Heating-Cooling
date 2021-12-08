import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import './banner.css'
const Banner = () => {
    const datas = useStaticQuery(graphql`
    query banner {
        allContentfulScheduleServiceEstimate {
          nodes {
            button {
                title
                slug
              }
            title
            description {
              description
            }
            photo {
              file {
                url
              }
            }
          }
        }
      }
      
`)
const getdata = datas.allContentfulScheduleServiceEstimate.nodes[0]
    return (
        <section className="banners_container">
            <div className="banners_block">
               <div>
                   <img className="ha" src={getdata.photo.file.url} alt="no picss" />
               </div>
               <div>
                   <h1 className="heading_banner">{getdata.title}</h1>
                   <p className="para_bannee">{getdata.description.description}</p>
               </div>
               <div>
                   <button  className="btnnanner">{getdata.button.title}</button>
               </div>
            </div>
        </section>
    )
}

export default Banner;