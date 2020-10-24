import React from 'react'

import { Container } from './styled'

const Avatar = ({
  backgroundImage,
  diameter,
  handleClick,
  handleMouseOver,
}) => (
  <Container
    backgroundImage={backgroundImage}
    diameter={diameter}
    handleClick={handleClick}
    handleMouseOver={handleMouseOver}
  />
)

Avatar.defaultProps = {
  diameter: 3.5,
}

export default Avatar
