import React from 'react'

import { NavContainer } from './styled'
import { Flex, Hamburger } from '../components'

const Nav = props => (
  <NavContainer>
    <Flex>
      <Hamburger />
    </Flex>
  </NavContainer>
)

export default Nav
