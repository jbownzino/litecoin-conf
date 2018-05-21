import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

const Wrapper = styled.div`
  margin: 40px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const P = styled.p`
  text-align: center;
`


const TextSummitInfo = () => (
  <Wrapper>
    <h1>Global Litecoin Summit</h1>
    <P>South San Francisco Conference Center</P>
    <P>14-15 September 2018</P>
  </Wrapper>
)

export default TextSummitInfo