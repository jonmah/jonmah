import React from 'react'
import styled from 'styled-components'

import { Switch } from '../components'

const Container = styled.header`
  height: 100px;
  position: fixed;
  width: 100vw;
`
Container.displayName = 'HeaderContainer'

const Header = ({ handleSetTheme }) => (
  <Container>
    <Switch handleToggle={handleSetTheme} />
  </Container>
)

export default Header
