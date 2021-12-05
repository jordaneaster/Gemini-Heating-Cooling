import { graphql } from "gatsby"
import * as React from "react"
import BlockComponents from "../components/block-functionality/BlockComponent"

const IndexPage = ({data}) => {
 return (
   <BlockComponents blocks={data.contentfulLandingPage.contentBlocks}/>
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
