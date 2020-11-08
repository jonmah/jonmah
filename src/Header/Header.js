import React from 'react'

import Social from '../Social'
import { Container } from './Header.styled'
import { Flex } from '../components'

const Header = ({ handleSetTheme }) => (
  <Container>
    <Flex
      alignItems="flex-start"
      height="100%"
      justifyContent="flex-end"
      width="100%"
    >
      {/* <Switch handleToggle={handleSetTheme} /> */}
      <Social />
    </Flex>
  </Container>
)

export default Header
