import styled from 'styled-components'

export const Input = styled.input`
  display: none;

  &:checked + label {
    background: ${({ theme }) => theme.colors.green};
  }

  &:checked + label span {
    left: calc(100% - 0.1rem);
    transform: translateX(-100%);
  }
`
Input.displayName = 'SwitchInput'

export const Label = styled.label`
  &:active span {
    width: 3rem;
  }

  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  width: 4rem;
  height: 2.2rem;
  background: ${({ theme }) => theme.colors.grey};
  border-radius: 2rem;
  position: relative;
  transition: background-color 0.2s;
`
Label.displayName = 'SwitchLabel'

export const Button = styled.span`
  content: '';
  position: absolute;
  top: 0.1rem;
  left: 0.1rem;
  width: 2rem;
  height: 2rem;
  border-radius: 2rem;
  transition: 0.2s;
  background: ${({ theme }) => theme.colors.white};
  box-shadow: 0 0 0.2rem 0 rgba(10, 10, 10, 0.29);
`
Button.displayName = 'SwitchButton'
