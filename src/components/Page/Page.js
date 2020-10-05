import styled from 'styled-components'

const Page = styled.section`
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url('${({ backgroundImage }) => backgroundImage}');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  position: relative;
  width: 100vw;
`
Page.displayName = 'Page'

export default Page
