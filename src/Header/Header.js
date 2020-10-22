import React from 'react'

import ProfileNav from '../ProfileNav'
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
      <ProfileNav />
    </Flex>
  </Container>
)

export default Header
