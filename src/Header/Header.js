import React from 'react'

import Menu from '../Menu'
import { Container } from './styled'
import { Flex, Switch } from '../components'

const Header = ({ handleSetTheme }) => (
  <Container>
    <Flex
      alignItems="center"
      height="100%"
      justifyContent="space-between"
      width="100%"
    >
      <div>
        <Switch handleToggle={handleSetTheme} />
      </div>
      <Menu />
    </Flex>
  </Container>
)

export default Header
