import React from 'react'

import { Container } from './Social.styled'
import Item from './Item'
import avatar from '../static/avatar.jpg'
import { Avatar, ExternalLink, Icon } from '../components'
import { FileText, GitHub, LinkedIn } from '../static/icons'

const Social = () => (
  <Container gutters={1}>
    <Item>
      <ExternalLink
        href="https://www.linkedin.com/in/jonathan-mah-csm-bb30952b/"
        target="_blank"
      >
        <Icon height={20} type={LinkedIn} width={20} />
      </ExternalLink>
    </Item>
    <Item>
      <ExternalLink href="https://github.com/jonmah/" target="_blank">
        <Icon height={20} type={GitHub} width={20} />
      </ExternalLink>
    </Item>
    <Item>
      <ExternalLink href="https://github.com/jonmah/" target="_blank">
        <Icon height={20} type={FileText} width={20} />
      </ExternalLink>
    </Item>
    <Item>
      <Avatar backgroundImage={avatar} />
      {/* <Flex flexDirection="row" height="100%" justify="flex-start">
        Jonathan Mah
      </Flex> */}
    </Item>
  </Container>
)

export default Social
