import React, { useState } from 'react'

import { NavContainer } from './styled'
import { Flex, Hamburger } from '../components'

const Nav = props => {
  const [isOn, setIsOn] = useState(false)
  return (
    <NavContainer>
      <Flex>
        <Hamburger isOn={isOn} onClick={() => setIsOn(!isOn)} />
      </Flex>
    </NavContainer>
  )
}

export default Nav
