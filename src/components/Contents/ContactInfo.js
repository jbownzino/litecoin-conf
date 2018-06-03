import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  margin: 0 ;
`

const ContactInfo = () => (
  <Wrapper>
    <h5>Have a Question?</h5>
    <p>For all enquiries please email: conference@litecoinfoundation.net</p>
  </Wrapper>
)

export default ContactInfo