import styled from 'styled-components'

const Main = styled.main`
  background-image: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
    url('${({ backgroundImage }) => backgroundImage}');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  position: relative;
  transition: all 0.5s linear;
  width: 100vw;
`
Main.displayName = 'Main'

export default Main
