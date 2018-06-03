import React from 'react'
import styled from 'styled-components'
import Countdown from 'react-countdown-now'
import { Button, fromTheme } from 'theme/globalStyle'

import rightArrow from 'images/right-arrow.svg'

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`

const Block = styled.div`
  margin: 0.5rem;
`

const Number = styled.div`
  font-size: 20pt;
  font-weight: bold;
  color: ${fromTheme('white')};
`

const Letter = styled.div`
  font-size: 10pt;
  font-weight: bold;
  color: ${fromTheme('white')};
`

const ArrowButton = Button.extend`
  background: ${fromTheme('white')};
  color: ${fromTheme('black')};
  border: 2px solid ${fromTheme('white')};
  &:hover {
    background: ${fromTheme('white')};
    color: ${fromTheme('purple')};
  }
`

const Arrow = styled.img`
  margin-right: 3px;
`

const Completed = () => <ArrowButton><Arrow src={rightArrow}/>Watch Live</ArrowButton>


const renderer = ({ completed, days, hours, minutes, seconds }) => 
  completed ?
  <Completed /> :
  <Wrapper>
    <Block>
      <Number>{days}</Number><Letter>Days</Letter>
    </Block>
    <Block>
      <Number>{hours}</Number><Letter>Hours</Letter>
    </Block>
    <Block>
      <Number>{minutes}</Number><Letter>Minutes</Letter>
    </Block>
    <Block>
      <Number>{seconds}</Number><Letter>Seconds</Letter>
    </Block>
  </Wrapper>

const Counter = () => (
  <Countdown
    date={Date.parse(new Date('September 14, 2018'))}
    renderer={renderer}
  />
)

export default Counter