import styled from 'styled-components'

export const Container = styled.div`
  background-image: url(${({ backgroundImage }) => backgroundImage});
  background-size: cover;
  ${({ diameter }) => `
    border-radius: ${diameter / 2}rem;
    height: ${diameter}rem;
    width: ${diameter}rem;
  `}
`
Container.displayName = 'Container'
