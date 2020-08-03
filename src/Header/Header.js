import React from 'react'

import Menu from '../Menu'
import { Container } from './styled'
import { Flex, Switch } from '../components'

const Header = ({ handleSetTheme }) => (
  <Container>
    <Flex
      alignItems="flex-start"
      height="100%"
      justifyContent="space-between"
      width="100%"
    >
      <Switch handleToggle={handleSetTheme} />
      <Menu />
    </Flex>
  </Container>
)

export default Header
