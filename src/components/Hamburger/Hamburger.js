import React, { useState } from 'react'

import { Container, Bar } from './styled'

const Hamburger = () => {
  const [isOn, setIsOn] = useState(false)

  return (
    <Container isOn={isOn} onClick={() => setIsOn(!isOn)}>
      <Bar />
      <Bar />
      <Bar />
    </Container>
  )
}

export default Hamburger
