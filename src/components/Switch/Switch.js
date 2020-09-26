import React from 'react'
import uuid from 'react-uuid'

import { Button, Input, Label } from './styled'

const Switch = ({ handleToggle, isOn }) => {
  const id = uuid()
  return (
    <>
      <Input
        checked={isOn}
        data-test-id="switch"
        id={id}
        onChange={handleToggle}
        type="checkbox"
      />
      <Label htmlFor={id}>
        <Button />
      </Label>
    </>
  )
}

export default Switch
