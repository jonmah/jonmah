import React from 'react'

import { Container } from './styled'
import { Switch } from '../components'

const Header = ({ handleSetTheme }) => (
  <Container>
    <Switch handleToggle={handleSetTheme} />
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="white"
    >
      <title>menu</title>
      <path d="M17.167 6.333h-14.333c-0.667 0-1.25-0.583-1.25-1.25s0.583-1.25 1.25-1.25h14.333c0.667 0 1.25 0.583 1.25 1.25s-0.583 1.25-1.25 1.25z"></path>
      <path d="M17.167 11.25h-14.333c-0.667 0-1.25-0.583-1.25-1.25s0.583-1.25 1.25-1.25h14.333c0.667 0 1.25 0.583 1.25 1.25s-0.583 1.25-1.25 1.25z"></path>
      <path d="M17.167 16.167h-14.333c-0.667 0-1.25-0.583-1.25-1.25s0.583-1.25 1.25-1.25h14.333c0.667 0 1.25 0.583 1.25 1.25s-0.583 1.25-1.25 1.25z"></path>
    </svg>
  </Container>
)

export default Header
