import styled from 'styled-components'

import Flex from '../Flex'

export const Container = styled(Flex)`
  box-sizing: border-box;
  height: ${({ height }) => height};
  overflow: scroll;
  position: relative;
  scroll-behavior: smooth;
  top: 35vh;

  > * {
    display: inline-block;
    margin-right: ${({ gutters }) => gutters && `${gutters}rem`};
  }
  > *:last-child {
    margin-right: 5rem;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.laptop}) {
    overflow: hidden;
    top: 60vh;
  }
`
Container.displayName = 'Container'
