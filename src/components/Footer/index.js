import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import { fromTheme, media } from 'theme/globalStyle'

const Wrapper = styled.footer`
  font-size: 11px;
  margin: 0 24.4vw;
  ${media.medium`
    margin: 0 20px;
  `}
`

const P1 = styled.p`
  margin-bottom: 0.3em;
  text-align: left;
`

const P2 = styled.p`
  color: ${fromTheme('grey')};
  text-align: left;
`

const Footer = () => (
  <Wrapper>
    <P1>© 2018 Litecoin Foundation</P1>
    <a target="_blank" href="mailto:contact@litecoinfoundation.net">
      <P2>contact@litecoinfoundation.net</P2>
    </a>
    <a target="_blank" href="https://litecoin-foundation.org/privacy-policy/">
      <P2>Privacy Policy</P2>
    </a>
  </Wrapper>
)

export default Footer
