import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

import logo from 'images/litecoin-logo.svg'
import { Button, fromTheme, media } from 'theme/globalStyle'

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 40px;
  ${media.medium`
    margin: 8px;
  `}
`
const Logo = styled.img`
  width: 45px;
  height: 45px;
`

const BlueButton = Button.extend`
  background: ${fromTheme('purple')};
  color: ${fromTheme('white')};
  border: 2px solid ${fromTheme('purple')};
  ${media.medium`
    margin-right: 0;
  `}
  &:hover {
    background: ${fromTheme('white')};
    color: ${fromTheme('purple')};
  }
`

const Header = () => (
  <Wrapper>
    <Logo
      title='Header Image'
      alt='san francisco'
      src={logo}/>
  </Wrapper>
)

export default Header
