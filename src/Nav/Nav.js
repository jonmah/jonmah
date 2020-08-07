import React, { useState } from 'react'

import { NavContainer } from './styled'
import { Menu, MenuItem } from './Menu'
import { Flex, Hamburger } from '../components'

const Nav = props => {
  const [isOn, setIsOn] = useState(false)
  return (
    <NavContainer>
      <Flex justifyContent="space-between">
        <Menu isOn={isOn}>
          <MenuItem>Home</MenuItem>
          <MenuItem>Projects</MenuItem>
          <MenuItem>Contact</MenuItem>
        </Menu>
        <Hamburger isOn={isOn} onClick={() => setIsOn(!isOn)} />
      </Flex>
    </NavContainer>
  )
}

export default Nav
