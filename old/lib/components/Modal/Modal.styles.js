import {
  Content as DialogContent,
  Description as DialogDescription,
  Overlay as DialogOverlay,
  Title as DialogTitle
} from '@radix-ui/react-dialog'

import { styled } from '@stitches'
import { fade } from '@stitches/keyframes'

export const Content = styled(DialogContent, {
  animation: `${fade} 300ms cubic-bezier(0.16, 1, 0.3, 1)`,
  backgroundColor: '$lightShade',
  borderRadius: '$modal',
  boxShadow:
    'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  left: '50%',
  maxHeight: '85vh',
  maxWidth: '450px',
  padding: '25px',
  position: 'fixed',
  top: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90vw',

  '&:hover': {
    outline: 'none'
  }
})
Content.displayName = 'Content'

export const Description = styled(DialogDescription, {
  margin: '10px 0 20px',
  color: 'pink',
  fontSize: '15px',
  lineHeight: 1.5
})
Description.displayName = 'Description'

export const Overlay = styled(DialogOverlay, {
  backgroundColor: '$overlay',
  position: 'fixed',
  inset: 0,
  animation: `${fade} 150ms cubic-bezier(0.42, 0, 0.58, 1.0)`
})
Overlay.displayName = 'Overlay'

export const Title = styled(DialogTitle, {
  margin: 0,
  fontWeight: '500',
  color: 'peru',
  fontSize: '17px'
})
Title.displayName = 'Title'
