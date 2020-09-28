import styled from 'styled-components'

const topBarRotate = 'rotate(-45deg) translate(-0.5rem,0.88rem)'
const bottomBarRotate = 'rotate(45deg) translate(-0.56rem,-0.92rem)'

export const Container = styled.div`
  cursor: pointer;
  height: 3rem;
  width: 3rem;

  div {
    background: ${({ theme }) => theme.menu.hamburger};
    transition: 0.4s;
  }

  > div:first-of-type {
    -webkit-transform: ${({ isOn }) => isOn && topBarRotate};
    transform: ${({ isOn }) => isOn && topBarRotate};
  }
  > div:nth-of-type(2) {
    opacity: ${({ isOn }) => (isOn ? 0 : 100)};
  }
  div:nth-of-type(3) {
    -webkit-transform: ${({ isOn }) => isOn && bottomBarRotate};
    transform: ${({ isOn }) => isOn && bottomBarRotate};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    display: none;
  }
`
Container.displayName = 'Container'

export const Bar = styled.div`
  height: calc(100% / 6);
  margin-bottom: calc(100% / 6);
`
Bar.displayName = 'Bar'
