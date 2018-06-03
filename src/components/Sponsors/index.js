import React from 'react'
import styled from 'styled-components'

import { sponsors } from 'data'
import SponsorCardContainer from './SponsorCardContainer'

const Wrapper = styled.div`
`

const SponsorWrapper = styled.div`
`

// const SponsorCard = styled.div`
//   height: 100px;
//   width: 100px;
//   border-radius: 50%;
//   margin: 0;
//   background-size: cover;
//   background-position: center center;
//   background-image: url(${props => props.logo});
// `



const Sponsors = () => (
  <Wrapper>
    <div>Sponsors</div>
    <SponsorWrapper>
      <SponsorCardContainer data={sponsors.platinum} type='platinum' />
      <SponsorCardContainer data={sponsors.gold} type='gold' />
      <SponsorCardContainer data={sponsors.silver} type='silver' />
    </SponsorWrapper>
  </Wrapper>
)

export default Sponsors