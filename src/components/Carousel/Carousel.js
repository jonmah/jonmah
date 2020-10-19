import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'

import Flex from '../Flex'

const Container = styled(Flex)`
  box-sizing: border-box;
  overflow: hidden;
  position: ${({ position }) => position};
  height: 50rem;
  scroll-behavior: smooth;

  > * {
    display: inline-block;
    margin-right: ${({ gutters }) => gutters};
  }
`

const Carousel = ({ children, gutters, position }) => {
  // const [current, setCurrent] = useState(0)
  const ref = useRef()
  useEffect(() => {
    const carousel = ref?.current

    if (carousel) {
      const onWheelScroll = e => {
        if (e.type !== 'wheel') return

        let delta = (e.deltaY || -e.wheelDelta || e.detail) >> 10 || 1
        delta = delta * -500
        carousel.scrollLeft -= delta
        e.preventDefault()
      }

      carousel.addEventListener('wheel', onWheelScroll)

      return () => {
        carousel.removeEventListener('wheel', onWheelScroll)
      }
    }
  })

  return (
    <Container
      alignItems="center"
      gutters={gutters}
      position={position}
      ref={ref}
    >
      {children}
    </Container>
  )
}

export default Carousel
