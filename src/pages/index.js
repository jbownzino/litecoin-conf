import React, { Fragment } from 'react'
import Link from 'gatsby-link'
import TextSummitInfo from 'components/TextSummitInfo'
import Media from 'components/Media'
import Contents from 'components/Contents'
import Sponsors from 'components/Sponsors'

const IndexPage = () => (
  <Fragment>
    <TextSummitInfo/>
    <Media/>
    <Contents/>
    <Sponsors/>
  </Fragment>
)

export default IndexPage
