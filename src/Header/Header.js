import React from 'react'

import Nav from '../Nav'
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
      <Nav />
    </Flex>
  </Container>
)

export default Header
