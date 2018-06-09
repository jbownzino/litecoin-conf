import React from 'react'
import styled from 'styled-components'

import { media } from 'theme/globalStyle'
import DataCard from './DataCard'

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  flex-direction: column;
  ${media.medium`
      margin-left: 2rem;
  `}
`

const ContentWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  max-width: 1300px;
  margin-left: 20vw;
  flex-direction: row;
  ${media.medium`
      margin-left: 2rem;
  `}
`

const Sponsors = ({ data }) => (
  <Wrapper>
    <ContentWrapper>{data &&
      data.platinum.map((each, i) => <DataCard key={i} {...each} />)}</ContentWrapper>
    <ContentWrapper>{data &&
      data.gold.map((each, i) => <DataCard key={i} {...each} />)}</ContentWrapper>
    <ContentWrapper>{data &&
      data.silver.map((each, i) => <DataCard key={i} {...each} />)}</ContentWrapper>
  </Wrapper>
)

export default Sponsors
