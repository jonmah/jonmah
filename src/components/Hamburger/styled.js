import styled from 'styled-components'

export const Container = styled.div`
  height: 2.5rem;
  width: 2.5rem;

  div {
    transition: 0.4s;
  }

  > div:first-of-type {
    -webkit-transform: ${({ isOn }) =>
      isOn ? 'rotate(-45deg) translate(-0.75rem, 0.75rem)' : undefined};
    transform: ${({ isOn }) =>
      isOn ? 'rotate(-45deg) translate(-0.75rem, 0.75rem)' : undefined};
  }
  > div:nth-of-type(2) {
    opacity: ${({ isOn }) => (isOn ? 0 : 100)};
  }
  div:nth-of-type(3) {
    -webkit-transform: ${({ isOn }) =>
      isOn ? 'rotate(45deg) translate(-0.45rem,-0.4rem)' : undefined};
    transform: ${({ isOn }) =>
      isOn ? 'rotate(45deg) translate(-0.45rem,-0.4rem)' : undefined};
  }
`
Container.displayName = 'Container'

export const Bar = styled.div`
  background: ${({ theme }) => theme.colors.white};
  height: calc(100% / 6);
  margin-bottom: calc(100% / 6);
`
Bar.displayName = 'Bar'
