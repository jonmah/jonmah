import React from 'react'
import { render, cleanup } from '@testing-library/react'

import Page from '../Page'

describe('Page component', () => {
  afterEach(cleanup)

  it('Renders', () => {
    const wrapper = render(<Page />)
    expect(wrapper).toMatchSnapshot()
  })
})
