import React from 'react'

import { Container } from './styled'
import NavItem from './NavItem'
import avatar from '../static/avatar.jpg'
import { Avatar } from '../components'

const ProfileNav = () =>
  <Container>
    <NavItem>
      <Avatar backgroundImage={avatar} diameter={3.5} />
      Jonathan Mah
    </NavItem>
  </Container>

export default ProfileNav