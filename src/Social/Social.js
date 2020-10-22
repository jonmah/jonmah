import React from 'react'

import { Container } from './styled'
import Item from './Item'
import avatar from '../static/avatar.jpg'
import { Avatar, Flex } from '../components'

const Social = () => (
  <Container>
    <Item>
      <Avatar backgroundImage={avatar} diameter={3.5} />
      <Flex flexDirection="row" height="100%" justify="flex-start">
        Jonathan Mah
      </Flex>
    </Item>
  </Container>
)

export default Social
