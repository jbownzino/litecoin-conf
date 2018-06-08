import React from 'react'
import styled from 'styled-components'
import { fromTheme, sponsorLogo, sponsorLetter, media } from 'theme/globalStyle'

const Wrapper = styled.div`
  margin: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const Logo = styled.img`
  margin: 0;
  filter: saturate(-100);
  width: ${props => sponsorLogo(props.type)};
  &:hover {
    filter: saturate(0);
  }
`

const EmptyLogo = styled.div`
  min-height: ${props => sponsorLogo(props.type)};
  min-width: ${props => sponsorLogo(props.type)};
  background: ${fromTheme('lightGrey')};
  margin: 0;
`

const Title = styled.div`
  font-size: ${props => sponsorLetter(props.type)};
`

const SponsorCard = ({ name, src, site, type }) => (
  <Wrapper type={type}>
    {src.length === 0 ?
      <EmptyLogo type={type} /> :
      <a target='_blank' href={site}>
        <Logo src={src} type={type} />
      </a>
    }
    <Title type={type}>{name}</Title>
  </Wrapper>
)

export default SponsorCard