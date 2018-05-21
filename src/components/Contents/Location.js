import React, {Component} from 'react'
import styled from 'styled-components'
import { GoogleApiWrapper, Map, InfoWindow, Marker } from 'google-maps-react'

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
  width: 100vw;
  height: 70vh;
  ${media.medium`
    height: 50vh;
  `}
`

const AnyReactComponent = ({ text }) => <div>{text}</div>

class MapContainer extends Component {
  static defaultProps = {
    center: {
      lat: 37.6474606,
      lng: -122.4043781
    },
    zoom: 11
  };

  render() {
    const { google, center } = this.props
    return (
      <Wrapper>
        <TextWrapper>
          <h5>Local Area and Travel</h5>
          <p>You can find the location of the conference center as well as local hotels and activites below. If you’re flying in to San Francisco check out our sponsor CheapAir.com for some of the best rates and pay for your flight directly with Litecoin.</p>
        </TextWrapper>
        <MapWrapper>
        <Map
          google={google}
          zoom={14}
          initialCenter={center}
        >
          <Marker onClick={this.onMarkerClick}
            title={'South San Francisco Conference Center'}
            name={'South San Francisco Conference Center'}
            position={center}
          />
        </Map>
        </MapWrapper>
      </Wrapper>
      // Important! Always set the container height explicitly
    );
  }
}

export default GoogleApiWrapper({
  apiKey: ('AIzaSyCU4oZq-XhEpk8D_Z5pWKGl9J4bF0Dy9L0')
})(MapContainer)