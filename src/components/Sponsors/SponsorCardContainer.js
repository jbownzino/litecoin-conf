import React from 'react'
import styled from 'styled-components'

import { media } from 'theme/globalStyle'
import SponsorCard from './SponsorCard'

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

const SponsorCardContainer = ({ data, type }) => (
  <Wrapper>
    {data &&
      data.map((each, i) => <SponsorCard key={i} type={type} {...each} />)}
  </Wrapper>
)

export default SponsorCardContainer
