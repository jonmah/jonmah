import React from 'react'
import styled from 'styled-components'

import Flex from '../Flex'

const Container = styled(Flex)`
  background: ${({ theme }) => theme.colors.green};
  border-radius: ${({ theme }) => theme.borderRadius};
  height: 20rem;
  min-width: 12rem;
`

const Card = () => {
  return <Container />
}

export default Card
