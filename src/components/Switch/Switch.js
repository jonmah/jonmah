import React from 'react'
import uuid from 'react-uuid'
import styled from 'styled-components'

const Input = styled.input`
  height: 0;
  visibility: hidden;
  width: 0;

  &:checked + label {
    background: ${({ theme }) => theme.colors.blueNight};
  }

  &:checked + label span {
    left: calc(100% - 7px);
    transform: translateX(-100%);
  }

  &:checked + label span {
    background: ${({ theme }) => theme.colors.greyMoon};
  }
`
Input.displayName = 'SwitchInput'

const Label = styled.label`
  &:active span {
    width: 60px;
  }

  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  width: 100px;
  height: 50px;
  background: ${({ theme }) => theme.colors.blueLight};
  border-radius: 100px;
  position: relative;
  transition: background-color 0.2s;
`
Label.displayName = 'SwitchLabel'

const Button = styled.span`
  content: '';
  position: absolute;
  top: 7x;
  left: 7px;
  width: 36px;
  height: 36px;
  border-radius: 36px;
  transition: 0.2s;
  background: ${({ theme }) => theme.colors.yellowSun};
  box-shadow: 0 0 2px 0 rgba(10, 10, 10, 0.29);
`
Button.displayName = 'SwitchButton'

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
