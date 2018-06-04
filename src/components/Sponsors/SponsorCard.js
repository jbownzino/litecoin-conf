import React from 'react'
import styled from 'styled-components'
import { fromTheme, sponsorLogo, sponsorLetter, media } from 'theme/globalStyle'

const Wrapper = styled.div`
  margin: 1rem;
  display: flex;
  flex-direction: column;
`

const Logo = styled.img`
  margin: 0;
  width: ${props => sponsorLogo(props.type)};
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

const SponsorCard = ({ name, src, site, type }) => (
  <Wrapper type={type}>
    {src.length === 0 ?
      <EmptyLogo type={type} /> :
      <Logo src={src} type={type} />
    }
    <Title type={type}>{name}</Title>
  </Wrapper>
)

export default SponsorCard