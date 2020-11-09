import React from 'react'
import PropTypes from 'prop-types'

import { noop } from '../../lib'
import { Container } from './ExternalLink.styled'

const ExternalLink = props => {
  const { href } = props
  const trimHref = href ? href.trim() : ''
  const newHref =
    !trimHref || trimHref.substring(0, 4) === 'http' || trimHref[0] === '/'
      ? trimHref
      : `//${trimHref}`
  const preventDefault = e => e.preventDefault()
  const onClick = trimHref ? noop : preventDefault

  return <Container {...props} href={newHref} onClick={onClick} />
}

ExternalLink.propTypes = {
  href: PropTypes.string,
}

export default ExternalLink
