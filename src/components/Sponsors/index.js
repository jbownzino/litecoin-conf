import React from 'react'
import styled from 'styled-components'

import { sponsors } from 'data'


const Wrapper = styled.div`
`

const SponsorWrapper = styled.div`
`

// const Sponsors = styled.div`
//   height: 100px;
//   width: 100px;
//   border-radius: 50%;
//   margin: 0;
//   background-size: cover;
//   background-position: center center;
//   background-image: url(${props => props.logo});
// `



const Sponsors = ({ logo, name }) => (
  <Wrapper>
    <div>Sponsors</div>
    <SponsorWrapper>
    </SponsorWrapper>
  </Wrapper>
)

export default Sponsors