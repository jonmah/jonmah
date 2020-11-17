import React, { useMemo } from 'react'

import { testData } from '../static/data'
import { Card, Carousel } from '../components'

const Timeline = ({ handleClick, height }) => {
  const cards = useMemo(
    () =>
      testData.map(({ id, splash }) => (
        <Card
          splash={splash}
          handleClick={() => handleClick(splash)}
          handleMouseover={() => handleClick(splash)}
          key={id}
        >
          {id}
        </Card>
      )),
    [handleClick]
  )

  return (
    <Carousel gutters={1.5} height={height}>
      {cards}
    </Carousel>
  )
}

export default Timeline
