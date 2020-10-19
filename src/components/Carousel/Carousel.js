import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'

import Flex from '../Flex'

const Container = styled(Flex)`
  box-sizing: border-box;
  overflow: hidden;
  position: ${({ position }) => position};
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
        delta = delta * -300
        carousel.scrollLeft -= delta
        // safari needs also this
        document.body.scrollLeft -= delta
        e.preventDefault()
      }

      carousel.addEventListener('wheel', onWheelScroll)

      return () => {
        carousel.removeEventListener('wheel', onWheelScroll)
      }
    }
  })

  return (
    <Container ref={ref} gutters={gutters} position={position}>
      {children}
    </Container>
  )
}

export default Carousel
