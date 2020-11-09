import React, { useEffect, useRef } from 'react'

import { Container } from './Carousel.styled'

const Carousel = ({ children, gutters, height }) => {
  // const [current, setCurrent] = useState(0)
  const ref = useRef()
  useEffect(() => {
    const carousel = ref?.current

    if (carousel) {
      const handleScroll = e => {
        if (e.type !== 'wheel') return

        let delta =
          (e.deltaX || e.deltaY || -e.wheelDelta || e.detail) >> 10 || 1
        console.log(`X: ${e.deltaX}, Y: ${e.deltaY}, Wheel: ${e.wheelDelta}`)
        delta = delta * -300
        carousel.scrollLeft -= delta
        e.preventDefault()
      }

      carousel.addEventListener('wheel', handleScroll)
      return () => {
        carousel.removeEventListener('wheel', handleScroll)
      }
    }
  })

  return (
    <Container alignItems="center" gutters={gutters} height={height} ref={ref}>
      {children}
    </Container>
  )
}

export default Carousel
