import { graphql } from "gatsby"
import * as React from "react"
import BlockComponents from "../components/block-functionality/BlockComponent"
import Layout from '../components/Layout/Layout'
import './index.css'
const IndexPage = ({ data }) => {
  return (
    <Layout>
      <div className="boxs">
      <BlockComponents blocks={data.contentfulLandingPage.contentBlocks} />
      </div>
    </Layout>
  )
}

export const query = graphql`
{
  contentfulLandingPage {
    id
    contentBlocks {
      type: __typename
      ... on Node {
        ... on ContentfulBanner {
          ...HomeBanner
        }
        ... on ContentfulWelcomeHeader {
          ...WelcomeBanner
        }
        ... on ContentfulServicesBlock {
          ...ServiceBlock
        }
      }
    }
  }
}
`
export default IndexPage
