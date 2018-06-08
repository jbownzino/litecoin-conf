import React from 'react'
import styled from 'styled-components'

import { sponsors } from 'data'
import SponsorCardContainer from './SponsorCardContainer'

const Wrapper = styled.div`
`

const Header = styled.h1`

`

const TextWrapper = styled.div`
  margin-left: 25px;
`

const SponsorWrapper = styled.div`
`

const Link = styled.a`
  font-weight: bold;
  color: black;
`

const Sponsors = () => (
  <Wrapper>
    <TextWrapper>
      <p>For more information on sponsorship, please email us <Link href={'mailto:sponsorships@litecoinfoundation.net'}> Sponsorships@litecoinfoundation.net</Link></p>
    </TextWrapper>
    <SponsorWrapper>
      <SponsorCardContainer data={sponsors.platinum} type='platinum' />
      <SponsorCardContainer data={sponsors.gold} type='gold' />
      <SponsorCardContainer data={sponsors.silver} type='silver' />
    </SponsorWrapper>
  </Wrapper>
)

export default Sponsors