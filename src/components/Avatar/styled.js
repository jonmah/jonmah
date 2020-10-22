import styled from 'styled-components'

export const Container = styled.div`
  background-image: url(${({backgroundImage}) => backgroundImage});
  background-size: cover;
  border-radius: ${({diameter}) => diameter / 2}rem;
  height: ${({diameter}) => diameter}rem;
  width: ${({diameter}) => diameter}rem;
`
Container.displayName = 'Container'