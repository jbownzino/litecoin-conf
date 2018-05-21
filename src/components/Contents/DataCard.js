import React, { Component } from 'react'
import styled from 'styled-components'

import { fromTheme, media } from 'theme/globalStyle'
import twitterLogo from 'images/twitter-logo.svg'

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  margin: 40px 20px 0 0;
`

const Avatar = styled.img`
  height: 100px;
  width: 100px;
  border-radius: 50%;
  margin: 0;
`

const EmptyAvatar = styled.div`
  min-height: 100px;
  min-width: 100px;
  background: ${fromTheme('lightGrey')};
  border-radius: 50%;
  margin: 0;
`

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  font-size: 12px;
  width: 310px;
  height: 100px;
  margin-left: 30px;
`

const H5 = styled.h5`
  font-weight: bolder;
  margin: 0.1rem 0;
`

const P = styled.p`
  font-family: OpenSans-Light;
  margin: 0;
`
const SocialLink = styled.a`

`

const SocialLogo = styled.img`
  margin: 1rem 0;
`


class DataCard extends Component {
  state = { loaded: false }

  onLoad = () => {
    this.setState(() => ({ loaded: true }))
  }

  render() {
    const { name, location, info, avatar, social } = this.props
    const { loaded } = this.state
    return(
      <Wrapper>
        {avatar.length === 0 ?
          <EmptyAvatar/> :
          <Avatar src={avatar} />
        }
        <InfoWrapper>
          {name && <H5>{name}</H5>}
          {location && <H5>{location}</H5>}
          <P>{info}</P>
          {(social && social.twitter.length > 0) &&
            <SocialLink href={social.twitter} target='_blank'>
              <SocialLogo src={twitterLogo}/>
            </SocialLink>
          }
        </InfoWrapper>
      </Wrapper>
    )
  }
}

export default DataCard