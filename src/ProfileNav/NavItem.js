import React from 'react'

import { Flex } from '../components'

const NavItem = ({ children }) => (
  <Flex alignItems="center" flexDirection="row" gutters={0.5}>
    {children}
  </Flex>
)

export default NavItem
