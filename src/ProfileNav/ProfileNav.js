import React from 'react'

import { Container } from './styled'
import NavItem from './NavItem'
import avatar from '../static/avatar.jpg'
import { Avatar, Flex } from '../components'

const ProfileNav = () => (
  <Container>
    <NavItem>
      <Avatar backgroundImage={avatar} diameter={3.5} />
      <Flex flexDirection="row" height="100%" justify="flex-start">
        Jonathan Mah
      </Flex>
    </NavItem>
  </Container>
)

export default ProfileNav
