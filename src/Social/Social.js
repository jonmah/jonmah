import React from 'react'

import { Container } from './Social.styled'
import Item from './Item'
import avatar from '../static/avatar.jpg'
import { Avatar, ExternalLink, Icon } from '../components'
import { social } from '../static/data'

const socialIcons = social.map(({ href, icon }) => (
  <Item>
    <ExternalLink href={href} target="_blank">
      <Icon height={20} type={icon} width={20} />
    </ExternalLink>
  </Item>
))

const Social = () => (
  <Container gutters={1}>
    {socialIcons}
    <Item>
      <Avatar backgroundImage={avatar} />
      {/* <Flex flexDirection="row" height="100%" justify="flex-start">
        Jonathan Mah
      </Flex> */}
    </Item>
  </Container>
)

export default Social
