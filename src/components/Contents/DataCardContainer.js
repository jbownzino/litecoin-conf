import React from 'react'
import styled from 'styled-components'

import { media } from 'theme/globalStyle'
import DataCard from './DataCard'

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  max-width: 1300px;
  margin-left: 18vw;
  ${media.medium`
    margin-left: 1rem;
  `}
`

const H5 = styled.h5`
  width: 60vw;
  ${media.medium`
    width: 90vw;
  `}
`

const DataCardContainer = ({ data, text }) => (
  <React.Fragment>
    <Wrapper>
      {text &&
      <H5>{text}</H5>}
      {data &&
        data.map((each, i) => <DataCard key={i} {...each} />)}
    </Wrapper>
  </React.Fragment>
)

export default DataCardContainer
