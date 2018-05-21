import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

import logo from 'images/litecoin-logo.svg'
import { Button, fromTheme } from 'theme/globalStyle'

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px 20px;
`
const Logo = styled.img`
  width: 45px;
  height: 45px;
`

const BlueButton = Button.extend`
  background: ${fromTheme('purple')};
  color: ${fromTheme('white')};
  border: 2px solid ${fromTheme('purple')};
  &:hover {
    background: ${fromTheme('white')};
    color: ${fromTheme('purple')};w
  }
`

const Header = () => (
  <Wrapper>
    <Logo
      title='Header Image'
      alt='san francisco'
      src={logo}/>
    <BlueButton>Book Tickets</BlueButton>
  </Wrapper>
)

export default Header
