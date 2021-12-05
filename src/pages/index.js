import { graphql } from "gatsby"
import * as React from "react"

const IndexPage = ({data}) => {
  return (
    
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
        ... on ContentfulWelcomeBanner {
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
