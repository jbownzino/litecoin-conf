import React from 'react'
import styled from 'styled-components'

import { media } from 'theme/globalStyle'
import DataCard from './DataCard'

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  max-width: 1300px;
  margin-left: 2rem;
  ${media.medium`
    margin-left: 0;
  `}
`

const DataCardContainer = ({ data }) => (
  <Wrapper>
    {data &&
      data.map((each, i) => <DataCard key={i} {...each} />)}
  </Wrapper>
)

export default DataCardContainer
