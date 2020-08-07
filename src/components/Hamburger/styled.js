import styled from 'styled-components'

export const Container = styled.div`
  cursor: pointer;
  height: 2.5rem;
  width: 2.5rem;

  div {
    background: ${({ theme }) => theme.menu.hamburger};
    transition: 0.4s;
  }

  > div:first-of-type {
    -webkit-transform: ${({ isOn }) =>
      isOn && 'rotate(-45deg) translate(-0.43rem,0.75rem)'};
    transform: ${({ isOn }) =>
      isOn && 'rotate(-45deg) translate(-0.43rem,0.75rem)'};
  }
  > div:nth-of-type(2) {
    opacity: ${({ isOn }) => (isOn ? 0 : 100)};
  }
  div:nth-of-type(3) {
    -webkit-transform: ${({ isOn }) =>
      isOn && 'rotate(45deg) translate(-0.43rem,-0.73rem)'};
    transform: ${({ isOn }) =>
      isOn && 'rotate(45deg) translate(-0.43rem,-0.73rem)'};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.m}) {
    display: none;
  }
`
Container.displayName = 'Container'

export const Bar = styled.div`
  height: calc(100% / 6);
  margin-bottom: calc(100% / 6);
`
Bar.displayName = 'Bar'
