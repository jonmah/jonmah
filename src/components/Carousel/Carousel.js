import React, { useEffect, useRef } from 'react'

import { Container } from './styled'

const Carousel = ({ children, gutters, height }) => {
  // const [current, setCurrent] = useState(0)
  const ref = useRef()
  useEffect(() => {
    const carousel = ref?.current

    if (carousel) {
      const onWheelScroll = e => {
        if (e.type !== 'wheel') return

        let delta = (e.deltaY || -e.wheelDelta || e.detail) >> 10 || 1
        delta = delta * -150
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
      ref={ref}
    >
      {children}
    </Container>
  )
}

export default Carousel
