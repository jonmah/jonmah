import styled from 'styled-components'

export const Input = styled.input`
  display: none;

  &:checked + label {
    background: ${({ theme }) => theme.colors.green};
  }

  &:checked + label span {
    left: calc(100% - 2px);
    transform: translateX(-100%);
  }
`
Input.displayName = 'SwitchInput'

export const Label = styled.label`
  &:active span {
    width: 45px;
  }

  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  width: 60px;
  height: 36px;
  background: ${({ theme }) => theme.colors.grey};
  border-radius: 80px;
  position: relative;
  transition: background-color 0.2s;
`
Label.displayName = 'SwitchLabel'

export const Button = styled.span`
  content: '';
  position: absolute;
  top: 2x;
  left: 2px;
  width: 32px;
  height: 32px;
  border-radius: 32px;
  transition: 0.2s;
  background: ${({ theme }) => theme.colors.white};
  box-shadow: 0 0 2px 0 rgba(10, 10, 10, 0.29);
`
Button.displayName = 'SwitchButton'
