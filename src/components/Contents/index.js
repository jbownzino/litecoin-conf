import React, { Component } from 'react'
import styled from 'styled-components'
import ReactSwipe from 'react-swipe'
import querystring from 'querystring'

import { speakers, day1, day2 } from 'data/Person'
import ReactSwipeNavigation from './ReactSwipeNavigation';
import DataCardContainer from './DataCardContainer'
import TicketInfo from './TicketInfo'
import Location from './Location'
import ContactInfo from './ContactInfo'

const Wrapper = styled.div`
  margin: 0 70px;
`
const ContentWrapper = styled.div`
  margin-top: 100px;
`

const Contents = () => (
  <Wrapper>
    <ReactSwipeNavigation>
      <ContentWrapper><DataCardContainer data={speakers}/></ContentWrapper>
      <ContentWrapper><DataCardContainer data={day1}/></ContentWrapper>
      <ContentWrapper><DataCardContainer data={day2}/></ContentWrapper>
      <ContentWrapper><TicketInfo /></ContentWrapper>
      <ContentWrapper><Location /></ContentWrapper>
      <ContentWrapper><ContactInfo /></ContentWrapper>
    </ReactSwipeNavigation>
  </Wrapper>
)

export default Contents
