import React from 'react'
import styled from 'styled-components'

import DataCard from './DataCard'

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  width: 90vw;
`

const DataCardContainer = ({ data }) => (
  <Wrapper>
    {data &&
      data.map((each, i) => <DataCard key={i} {...each} />)}
  </Wrapper>
)

export default DataCardContainer
