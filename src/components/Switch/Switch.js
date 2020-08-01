import React from 'react'
import uuid from 'react-uuid'

import { Button, Input, Label } from './styles'

const Switch = ({ handleToggle, isOn }) => {
  const id = uuid()
  return (
    <>
      <Input checked={isOn} id={id} onChange={handleToggle} type="checkbox" />
      <Label htmlFor={id}>
        <Button />
      </Label>
    </>
  )
}

export default Switch
