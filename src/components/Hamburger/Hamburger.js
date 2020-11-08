import React from 'react'

import { Container, Bar } from './Hamburger.styled'

const Hamburger = ({ isOn, onClick }) => {
  return (
    <Container isOn={isOn} onClick={onClick}>
      <Bar />
      <Bar />
      <Bar />
    </Container>
  )
}

export default Hamburger
