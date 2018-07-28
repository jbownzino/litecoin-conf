import React from 'react'
import styled from 'styled-components'

import videoBackground from 'images/video-background.png'
import { fromTheme, media } from 'theme/globalStyle'
import Counter from './Counter'

import ravLogo from 'images/rav-logo.png'
import geminiLogo from 'images/gemini-logo.svg'


const Wrapper = styled.div`
  background: url(${videoBackground}) no-repeat center;
  background-size: cover;
  min-height: 530px;
  width: 100%;
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

const SponsorWrapper = styled.div`
  background: ${fromTheme('lightGrey')};
  padding: 1.2rem 0;
`

const RAV = styled.img`
  width: 100px;
  margin: 0 40px;
`

const GEMINI = styled.img`
  width: 85px;
  margin: 0 40px;
`

const Media = () => (
  <React.Fragment>
    <Wrapper>
      <InfoWrapper>
        <H1>#LTCSF18</H1>
        <Counter />
      </InfoWrapper>
    </Wrapper>
    <SponsorWrapper>
      <RAV src={ravLogo}/>
      <GEMINI src={geminiLogo}/>
    </SponsorWrapper>
  </React.Fragment>
)

export default Media
