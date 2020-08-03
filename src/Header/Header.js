import React from 'react'

import { Container } from './styled'
import { Hamburger, Switch } from '../components'

const Header = ({ handleSetTheme }) => (
  <Container>
    <Switch handleToggle={handleSetTheme} />
    <Hamburger />
  </Container>
)

export default Header
