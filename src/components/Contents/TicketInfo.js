import React from 'react'
import styled from 'styled-components'

import { Button, fromTheme, media } from 'theme/globalStyle'
import { tickets } from 'data'

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  flex-wrap: wrap;
  margin-left: 18vw;
  ${media.medium`
      margin-left: 0;
  `};
`

const TextWrapper = styled.div`
  text-align: left;
  margin-left: 15px;
  ${media.medium`
      margin-left: 0;
      text-align: center;
  `};
`

const ContentWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  ${media.medium`
      justify-content: center;
  `};
`

const TicketWrapper = styled.div`
  margin: 15px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  ${media.medium`
    width: 230px;
  `};
`

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`

const Img = styled.img`
  height: 320px;
`

const EmptyImg = styled.div`
  background: ${fromTheme('lightGrey')};
  width: 100%;
  height: 310px;
`
const Ul = styled.ul`
  padding-left: 16px;
  text-align: left;
  margin: 0;
`

const Li = styled.li`
  margin: 0;
  font-size: 12px;
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
    <TextWrapper>
      <h3>Pay with Litecoin or USD via PayPal</h3>
    </TextWrapper>
    <ContentWrapper>
      {tickets &&
        tickets.map(({ title, content, src, link, price }, i) => (
          <TicketWrapper key={i}>
            {src.length === 0 ? <EmptyImg /> : <Img src={src} />}
            <InfoWrapper>
              <h5>{title}</h5>
              <Ul>
                {content.slice(0, -1).map((each, j) => <Li key={j}>{each}</Li>)}
              </Ul>
              <P>{content.slice(-1).pop()}</P>
            </InfoWrapper>
            <a target="_blank" href={link}>
              <BookButton>Book Ticket | ${price}</BookButton>
            </a>
          </TicketWrapper>
        ))}
    </ContentWrapper>
  </Wrapper>
)

export default TicketInfo
