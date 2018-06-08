import styled, { injectGlobal, css } from 'styled-components'

export const fromTheme = (props) => ({ theme }) => theme[props]

export const sponsorLogo = (props) => ({ type }) => sponsorLogoType[type]
export const sponsorLetter = (props) => ({ type }) => sponsorLetterType[type]

export const media = {
  handheld: (...args) => css`
    @media (max-width: 420px) {
      ${ css(...args) }
    }
  `,
  medium: (...args) => css`
  @media (max-width: 850px) {
    ${ css(...args) }
  }
`
}

export const sponsorLogoType = {
  platinum: '300px',
  gold: '50px',
  silver: '30px',
}

export const sponsorLetterType = {
  platinum: '25px',
  gold: '10px',
  silver: '15px',
}

export const theme = {
  primary: '#6e27c5',
  secondary: '#ffb617',
  danger: '#f16623',
  light: '#f4f4f4',
  dark: '#222',
  green: '#20D07D',
  purple: '#5F26EF',
  white: '#FFFFFF',
  black: '#000000',
  grey: '#C0C0C0',
  lightGrey: '#EEEEEE'
}

export const Button = styled.button`
  font-size: 12px;
  padding: 0.25rem 1rem;
  margin: 0 1rem;
  height: 30px;
  min-width: 110px;
  background: transparent;
  color: ${fromTheme('primary')};
  border-radius: 100px;
  cursor: pointer;
  &:hover {
    background: ${fromTheme('dark')};
    color: ${fromTheme('white')};
  }
`

injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Open+Sans:400,700');
  body {
    padding: 0;
    margin: 0;
    font-family: 'Open Sans', sans-serif;
    overflow-y: scroll;
  }
  
  h1 {
    font-size: 31px;
    margin: 10px auto;
  }

  h5 {
    font-size: 12px;
    text-align: left;
  }

  p {
    margin: 3px 0;
    text-align: left;
    font-size: 12px;
  }

  a {
    text-decoration: none;
  }

  button:focus {
    outline: 0;
  }
`
