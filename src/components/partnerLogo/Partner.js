import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import './partner.css'
import Banner from '../FinancingBanner/Banner'
const Partner = () => {
    const datas = useStaticQuery(graphql`
    query MyQuerhhy {
        allContentfulPartnerLogos {
        nodes {
            title
            logos {
            title
            file {
                url
            }
            }
        }
        }
    }
`)
    const newdata = datas.allContentfulPartnerLogos.nodes[0]
    return (
        <>
        <section className="partner_container">
            <h1 className="partsners">{newdata.title}</h1>
            <div className="partner_block">
                {newdata.logos.map(el => (
                    <div>
                        <img src={el.file.url} alt={el.title} />
                    </div>
                ))}
            </div>
        </section>
        <Banner />
        </>
    )
}

export default Partner;