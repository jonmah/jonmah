import styled from 'styled-components'

export const Container = styled.header`
  padding: ${({ theme }) => theme.padding};
  position: fixed;
  width: 100vw;
`
Container.displayName = 'Container'
