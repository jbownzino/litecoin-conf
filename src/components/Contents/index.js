import React from 'react'
import styled from 'styled-components'

import { media } from 'theme/globalStyle'
import { speakers, day1, day2, sponsors } from 'data'
import ReactSwipeNavigation from './ReactSwipeNavigation';
import DataCardContainer from './DataCardContainer'
import TicketInfo from './TicketInfo'
import Location from './Location'
import Sponsors from './Sponsors'

const Wrapper = styled.div`
  margin: 7rem 7rem 0 7rem;
  ${media.medium`
    margin: 0.5rem;
  `}
`
const ContentWrapper = styled.div`
  margin-top: 100px;
  ${media.medium`
    margin-top: 50px;
  `}
`

const day1Text = `Day 1 will be lecture based with the Grand Ballroom set up theater style.`,
      day2Text = `Day 2 will be composed of a Litecoin Expo in the Grand Ballroom with over 50 businesses for ticket holders to visit and #paywithlitecoin. There will also be speakers giving presentations at the Oyster Point throughout the day.`


const Contents = () => (
  <Wrapper>
    <ReactSwipeNavigation>
      <ContentWrapper><DataCardContainer data={speakers}/></ContentWrapper>
      <ContentWrapper><DataCardContainer text={day1Text} data={day1}/></ContentWrapper>
      <ContentWrapper><DataCardContainer text={day2Text} data={day2}/></ContentWrapper>
      <ContentWrapper><TicketInfo /></ContentWrapper>
      <ContentWrapper><Location isMarkerShown /></ContentWrapper>
      <ContentWrapper><Sponsors data={sponsors}/></ContentWrapper>
    </ReactSwipeNavigation>
  </Wrapper>
)

export default Contents
