import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'

import Flex from '../Flex'

const Container = styled(Flex)`
  box-sizing: border-box;
  overflow: hidden;
  height: ${({ height }) => height};
  position: relative;
  scroll-behavior: smooth;
  top: ${({ top }) => top};

  padding: 0 ${({ theme }) => theme.padding};

  > * {
    display: inline-block;
    margin-right: ${({ gutters }) => gutters};
  }
  > *:last-child {
    margin-right: 5rem;
  }
`

const Carousel = ({ children, gutters, height, position, top }) => {
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
      height={height}
      position={position}
      top={top}
      ref={ref}
    >
      {children}
    </Container>
  )
}

export default Carousel
