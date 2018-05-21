import React, { Fragment } from 'react'
import Link from 'gatsby-link'
import TextSummitInfo from 'components/TextSummitInfo'
import Media from 'components/Media'
import Contents from 'components/contents'

const IndexPage = () => (
  <Fragment>
    <TextSummitInfo/>
    <Media/>
    <Contents/>
  </Fragment>
)

export default IndexPage
