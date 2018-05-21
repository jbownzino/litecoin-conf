import React, {Component} from 'react'
import styled from 'styled-components'
import GoogleMapReact from 'google-map-react'

const Wrapper = styled.div`
  margin: 0;
`
const TextWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
`

const AnyReactComponent = ({ text }) => <div>{text}</div>

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };

  render() {
    return (
      <Wrapper>
        <TextWrapper>
          <h5>Local Area and Travel</h5>
          <p>You can find the location of the conference center as well as local hotels and activites below. If you’re flying in to San Francisco check out our sponsor CheapAir.com for some of the best rates and pay for your flight directly with Litecoin.</p>
        </TextWrapper>
        {/* <div style={{ height: '30%', width: '100%' }}>
          <GoogleMapReact
            bootstrapURLKeys={{ key: 'AIzaSyCU4oZq-XhEpk8D_Z5pWKGl9J4bF0Dy9L0' }}
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom}
          >
            <AnyReactComponent
              lat={59.955413}
              lng={30.337844}
              text={'Kreyser Avrora'}
            />
          </GoogleMapReact>
        </div> */}
      </Wrapper>
      // Important! Always set the container height explicitly
    );
  }
}

export default SimpleMap;