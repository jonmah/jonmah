import React from 'react'

import { Container } from './Card.styled'

const Card = ({ children, handleClick, handleMouseover, splash }) => {
  return (
    <Container splash={splash} onClick={handleClick}>
      {children}
    </Container>
  )
}

export default Card
