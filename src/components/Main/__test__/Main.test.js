import React from 'react'
import { render, cleanup } from '@testing-library/react'

import Main from '../Main'

describe('Main component', () => {
  afterEach(cleanup)

  it('Renders', () => {
    const wrapper = render(<Main />)
    expect(wrapper).toMatchSnapshot()
  })
})
