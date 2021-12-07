import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import './estimate.css'
const Estimate = () => {
    const datas = useStaticQuery(graphql`
    query estimate {
        allContentfulEstimateBanner {
          nodes {
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
    const getdata = datas.allContentfulEstimateBanner.nodes[0]
    return (
        <section className="bannersss_container">
            <h1 className="es_heading">{getdata.title}</h1>
            <p className="es_para">{getdata.description.description}</p>
            <button className="es_btm">{getdata.button.title}</button>
        </section>
    )
}

export default Estimate;