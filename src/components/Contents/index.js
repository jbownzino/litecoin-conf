import React, { Component } from 'react'
import styled from 'styled-components'
import ReactSwipe from 'react-swipe'

import { media } from 'theme/globalStyle'
import { speakers, day1, day2 } from 'data'
import ReactSwipeNavigation from './ReactSwipeNavigation';
import DataCardContainer from './DataCardContainer'
import TicketInfo from './TicketInfo'
import Location from './Location'
import ContactInfo from './ContactInfo'
import Sponsors from '../Sponsors'

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

const Contents = () => (
  <Wrapper>
    <ReactSwipeNavigation>
      <ContentWrapper><DataCardContainer data={speakers}/></ContentWrapper>
      <ContentWrapper><DataCardContainer data={day1}/></ContentWrapper>
      <ContentWrapper><DataCardContainer data={day2}/></ContentWrapper>
      <ContentWrapper><TicketInfo /></ContentWrapper>
      <ContentWrapper><Location isMarkerShown /></ContentWrapper>
      <ContentWrapper><Sponsors /></ContentWrapper>
    </ReactSwipeNavigation>
  </Wrapper>
)

export default Contents
