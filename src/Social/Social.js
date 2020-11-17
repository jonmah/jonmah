import React from 'react'

import { Container, Item } from './Social.styled'
import { Avatar, ExternalLink, Icon } from '../components'
import { social } from '../static/data'
import avatar from '../static/avatar.jpg'

const socialIcons = social.map(({ href, icon }) => (
  <Item alignItems="center" flexDirection="row" gutters={0.5}>
    <ExternalLink href={href} target="_blank">
      <Icon height={20} type={icon} width={20} />
    </ExternalLink>
  </Item>
))

const Social = () => (
  <Container gutters={1}>
    {socialIcons}
    <Item alignItems="center" flexDirection="row" gutters={0.5}>
      <Avatar backgroundImage={avatar} />
      {/* <Flex flexDirection="row" height="100%" justify="flex-start">
        Jonathan Mah
      </Flex> */}
    </Item>
  </Container>
)

export default Social
