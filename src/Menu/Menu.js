import React from 'react'

import { NavContainer } from './styled'
import { Flex, Hamburger } from '../components'

const Menu = props => (
  <NavContainer>
    <Flex>
      <Hamburger />
    </Flex>
  </NavContainer>
)

export default Menu
