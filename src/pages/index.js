import React, { Fragment } from 'react'
import Link from 'gatsby-link'
import TextSummitInfo from 'components/TextSummitInfo'
import Media from 'components/Media'
import Contents from 'components/Contents'

const IndexPage = ({ data }) => (
  <Fragment>
    <TextSummitInfo />
    <Media data={data} />
    <Contents />
  </Fragment>
)

export default IndexPage

export const pageQuery = graphql`
  query IndexQuery {
    imageOne: imageSharp(id: { regex: "/rav-logo.png/" }) {
      sizes(maxWidth: 630) {
        ...GatsbyImageSharpSizes
      }
    }
    background: imageSharp(id: { regex: "/video-background.png/"}) {
      sizes(maxWidth: 630) {
        ...GatsbyImageSharpSizes
      }
    }
    backgroundMobile: imageSharp(id: { regex: "/video-background.png/"}) {
      sizes(maxWidth: 630) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`
