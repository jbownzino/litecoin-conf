import React, { Component } from 'react'
import styled from 'styled-components'
import { compose, withProps } from 'recompose'
import {
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow,
  withScriptjs,
} from 'react-google-maps'

import { media, Button, fromTheme } from 'theme/globalStyle'

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin-bottom: 2rem;
`

const TextWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: flex-start;
  font-size: 12px;
  width: 450px;
  margin-left: 30px;
  ${media.handheld`
    width: 180px;
  `}
`

const MapWrapper = styled.div`
  height: 70vh;
  ${media.medium`
    height: 50vh;
    width: 95vw;
  `};
`

const H5 = styled.h5`
  width: 60vw;
  ${media.medium`
    width: 90vw;
  `}
`

const P = styled.p`
`

const SponsorButton = Button.extend`
  background: ${fromTheme('blue')};
  color: ${fromTheme('white')};
  border: 2px solid ${fromTheme('blue')};
  margin: 15px 0;
  &:hover {
    background: ${fromTheme('white')};
    color: ${fromTheme('blue')};
  }
`

const Logo = styled.div`
  height: 100px;
  width: 100px;
  border-radius: 50%;
  margin: 0;
  background-size: cover;
  background-position: center center;
  background-image: url(${props => props.img});
`

const MapContainer = compose(
  withProps({
    googleMapURL: `https://maps.googleapis.com/maps/api/js?key=AIzaSyARfanpqQgbjkIWsbpg2DgpN-Lo_-3MO0s&v=3.exp&libraries=geometry,drawing,places`,
    loadingElement: <div style={{ height: `70vh` }} />,
    containerElement: <MapWrapper/>,
    mapElement: <div id='c' style={{ height: `70vh` }} />,
    defaultCenter: { lat: 37.6474606, lng: -122.4043781 },
    defaultZoom: 11,
    name: 'South San Francisco Conference Center',
    address: '255 S Airport Blvd, South San Francisco, CA 94080',
  }),
  withScriptjs,
  withGoogleMap
)(({ isMarkerShown, defaultCenter, defaultZoom, name, address }) => (
  <GoogleMap defaultCenter={defaultCenter} defaultZoom={defaultZoom}>
    {isMarkerShown && (
      <Marker position={defaultCenter}>
        <InfoWindow>
          <div>
            <h5>{name}</h5>
            <p>{address}</p>
          </div>
        </InfoWindow>
      </Marker>
    )}
  </GoogleMap>
))

const LocationContainer = () => (
  <React.Fragment>
    <H5>Local Area & Travel</H5>
    <Wrapper>
      <Logo img='https://i.imgur.com/S0V0dEX.jpg' />
      <TextWrapper>
        <P>If you’re flying into San Francisco, check out our Exclusive Flight Partner CheapAir.com</P>
        <P>Make sure to use the discount code: LITECOINSUMMIT and #PayWithLitecoin!</P>
        <a target='_blank' href='https://www.cheapair.com/'>
          <SponsorButton>Go to CheapAir.com</SponsorButton>
        </a>
      </TextWrapper>
    </Wrapper>
    <MapContainer isMarkerShown />
  </React.Fragment>
)

export default LocationContainer
