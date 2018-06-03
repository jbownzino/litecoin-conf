import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

import videoBackground from 'images/video-background.png'
import videoBackgroundMobile from 'images/video-background-mobile.png'
import { Button, fromTheme, media } from 'theme/globalStyle'
import Counter from './Counter'

const Wrapper = styled.div`
  background: url(${videoBackground}) no-repeat center;
  background-size: cover;
  /* background-position: center center; */
  min-height: 530px;
  width: 100%;
  ${media.handheld`
    background: url(${videoBackgroundMobile}) no-repeat center;
  `}
`

const InfoWrapper = styled.div`
  position: relative;
  left: 50%;
  top: 250px;
  transform: translate(-50%,-50%);
  ${media.handheld`
    top: 240px;
  `}
`

const H1 = styled.h1`
  color: ${fromTheme('white')};
  font-size: 20px;
`

const Media = () => (
  <Wrapper>
    <InfoWrapper>
      <H1>#LTCSF18 Watch Live</H1>
      <Counter />
    </InfoWrapper>
  </Wrapper>
)

export default Media