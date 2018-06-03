import React from 'react'
import styled from 'styled-components'
import { fromTheme, sponsorLogo, sponsorLetter, media } from 'theme/globalStyle'

const Wrapper = styled.div`
  margin: 1rem;
`

const Logo = styled.div`
  min-height: ${props => sponsorLogo(props.type)};
  min-width: ${props => sponsorLogo(props.type)};
  margin: 0;
  background-size: cover;
  background-position: center center;
  background-image: url(${props => props.img});
`

const EmptyLogo = styled.div`
  min-height: ${props => sponsorLogo(props.type)};
  min-width: ${props => sponsorLogo(props.type)};
  background: ${fromTheme('lightGrey')};
  margin: 0;
`

const Title = styled.span`
  font-size: ${props => sponsorLetter(props.type)};
`

const SponsorCard = ({ name, logo, type }) => (
  <Wrapper>
    {logo.length === 0 ?
      <EmptyLogo type={type} /> :
      <Logo img={logo} type={type} />
    }
    <Title type={type}>{name}</Title>
  </Wrapper>
)

export default SponsorCard