import { forwardRef } from 'react'
import { styled } from '@stitches'
import s from './Button.module.scss'

const StyledButton = styled('button', {
  borderRadius: '8px'
  // color: '$lightShade',
  // fontSize: '13px',
  // padding: '0.5rem  0.75rem',
  // variants: {
  //   color: {
  //     confirm: {
  //       backgroundColor: '$main',
  //       '&:hover': {
  //         backgroundColor: '$maine'
  //       }
  //     },
  //     cancel: {
  //       backgroundColor: '$error',
  //       '&:hover': {
  //         backgroundColor: 'yellow'
  //       }
  //     }
  //   }
  // }
})

const Button = forwardRef(({ ariaLabel, label, onClick, type }, ref) => (
  <StyledButton
    aria-label={ariaLabel}
    color={type}
    onClick={onClick}
    ref={ref}
    type="button"
    className={s.button}
  >
    {label}
  </StyledButton>
))

Button.displayName = 'Button'
export default Button
