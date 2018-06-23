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
      margin-left: 1rem;
  `};
`

const ContentWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  max-width: 1300px;
  margin-left: 19vw;
  flex-direction: row;
  ${media.medium`
      margin-left: 0;
  `};
`

const TextWrapper = styled.div`
  margin-left: 19vw;
  margin-bottom: 2rem;
  ${media.medium`
    margin-left: 0;
    margin-right: 1rem;
  `}
`

const Link = styled.a`
  font-weight: bold;
  color: black;
`

const Sponsors = ({ data }) => (
  <Wrapper>
    <TextWrapper>
      <p>
        For more information on sponsorship, please email us at{' '}
        <Link href={'mailto:sponsorships@litecoinfoundation.net'}>
          {' '}
          sponsorships@litecoinfoundation.net
        </Link>
      </p>
    </TextWrapper>
    <ContentWrapper>
      {data && data.platinum.map((each, i) => <DataCard key={i} {...each} />)}
    </ContentWrapper>
    <ContentWrapper>
      {data && data.gold.map((each, i) => <DataCard key={i} {...each} />)}
    </ContentWrapper>
    <ContentWrapper>
      {data && data.silver.map((each, i) => <DataCard key={i} {...each} />)}
    </ContentWrapper>
    <ContentWrapper>
      {data && data.bronze.map((each, i) => <DataCard key={i} {...each} />)}
    </ContentWrapper>
    <ContentWrapper>
      {data && data.digital.map((each, i) => <DataCard key={i} {...each} />)}
    </ContentWrapper>
  </Wrapper>
)

export default Sponsors
