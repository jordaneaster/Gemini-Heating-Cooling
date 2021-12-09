import React from "react";
import { graphql, useStaticQuery,Link } from "gatsby";

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
           <Link to="/contactus"><button className="es_btm">{getdata.button.title}</button></Link>
        </section>
        
    )
    
}

export default Estimate;