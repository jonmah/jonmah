import React from 'react'
import { render, cleanup } from '@testing-library/react'

import Avatar from '../Avatar'
import avatar from '../../../static/avatar.jpg'

afterEach(cleanup)

describe('Avatar', () => {
  it('Should match snapshot', () => {
    const wrapper = render(<Avatar backgroundImage={avatar} />)
    expect(wrapper).toMatchSnapshot()
  })
})
