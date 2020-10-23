import React from 'react'

import { Container } from './styled'
import Item from './Item'
import avatar from '../static/avatar.jpg'
import { Avatar, Flex, Icon } from '../components'
import { FileText, GitHub, LinkedIn } from '../static/icons'

const Social = () => (
  <Container gutters={1}>
    <Item>
      <Icon height={20} type={LinkedIn} width={20} />
    </Item>
    <Item>
      <Icon height={20} type={GitHub} width={20} />
    </Item>
    <Item>
      <Icon height={20} type={FileText} width={20} />
    </Item>
    <Item>
      <Avatar backgroundImage={avatar} diameter={3.5} />
      <Flex flexDirection="row" height="100%" justify="flex-start">
        Jonathan Mah
      </Flex>
    </Item>
  </Container>
)

export default Social
