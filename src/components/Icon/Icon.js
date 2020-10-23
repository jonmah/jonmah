import React, { cloneElement, useEffect, useState } from 'react'
import styled from 'styled-components'

const Icon = ({
  className,
  color,
  onClick,
  onMouseDown,
  height,
  type: Type,
  width,
}) => {
  const [IconComponent, setIconComponent] = useState(<svg {...{ className }} />)
  useEffect(() => {
    try {
      setIconComponent(<Type />)
    } catch (err) {
      setIconComponent(<svg {...{ className }} />)
    }
  }, [Type, className])

  return cloneElement(IconComponent, {
    className,
    color,
    onClick,
    onMouseDown,
    height,
    width,
    'data-type': 'icon',
  })
}

Icon.defaultProps = {
  width: 16,
  height: 16,
}

const iconStyles = ({ width, height, theme, color }) => `
  ${!isNaN(width) ? `width: ${width}px;` : ''}
  ${!isNaN(height) ? `height: ${height}px;` : ''}
  ${
    color
      ? `> * { 
    fill: ${theme.colors.global[color] || theme.colors.primary[color] || color} 
  }`
      : ''
  };
`

export default styled(Icon)`
  ${iconStyles}
`
