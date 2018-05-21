import React from 'react'
import styled from 'styled-components'

import { Button, fromTheme } from 'theme/globalStyle'
import { tickets } from 'data/Ticket'

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  flex-wrap: wrap;
`

const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`

const TicketWrapper = styled.div`
  margin: 15px;
  min-width: 200px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`

const Img = styled.img`

`

const EmptyImg = styled.div`
  background: ${fromTheme('lightGrey')};
  width: 100%;
  height: 310px;
`

const P = styled.p`
  margin: 0;
  font-size: 12px;
`

const BookButton = Button.extend`
  background: ${fromTheme('green')};
  color: ${fromTheme('white')};
  border: 2px solid ${fromTheme('green')};
  margin: 15px 0;
  &:hover {
    background: ${fromTheme('white')};
    color: ${fromTheme('green')};w
  }
`

const TicketInfo = () => (
  <Wrapper>
    <h3>Pay with Litecoin or USD via PayPal</h3>
    <ContentWrapper>
    {tickets &&
      tickets.map(({ title, content, img, price }, i) => (
        <TicketWrapper key={i}>  
          {img.length === 0 ?
            <EmptyImg/> :
            <Img src={img} />
          }
          <InfoWrapper>
            <h5>{title}</h5>
            {content.map((each, j) => <P key={j}>{each}</P>)}
          </InfoWrapper>
          <BookButton>Book Ticket | ${price}</BookButton>
        </TicketWrapper>
      ))
    }
    </ContentWrapper>
  </Wrapper>
)

export default TicketInfo