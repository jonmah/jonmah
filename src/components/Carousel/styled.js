import styled from 'styled-components'

import Flex from '../Flex'

export const Container = styled(Flex)`
  box-sizing: border-box;
  overflow: hidden;
  height: ${({ height }) => height};
  position: relative;
  scroll-behavior: smooth;
  top: 35vh;

  padding: 0 ${({ theme }) => theme.padding};

  > * {
    display: inline-block;
    margin-right: ${({ gutters }) => gutters && `${gutters}rem`};
  }
  > *:last-child {
    margin-right: 5rem;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.laptop}) {
    top: 60vh;
  }
`
Container.displayName = 'Container'