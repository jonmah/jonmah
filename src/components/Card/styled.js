import styled from 'styled-components'

import Flex from '../Flex'

export const Container = styled(Flex)`
  background: ${({ theme }) => theme.colors.green};
  background-size: cover;
  border-radius: ${({ theme }) => theme.borderRadius};
  height: ${({ theme }) => theme.features.card.height};
  min-width: ${({ theme }) => theme.features.card.width};
  cursor: pointer;
  transition: all 0.1s linear;

  :hover {
    height: ${({ theme }) => theme.features.card.heightHover};
    min-width: ${({ theme }) => theme.features.card.widthHover};
  }
`
Container.displayName = 'Container'