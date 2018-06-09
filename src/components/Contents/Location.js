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

import { media } from 'theme/globalStyle'

const Wrapper = styled.div`
  margin: 0;
`

const TextWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
`

const MapWrapper = styled.div`
  height: 70vh;
  ${media.medium`
    height: 50vh;
    width: 95vw;
  `};
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

export default MapContainer
