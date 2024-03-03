import { createStitches } from '@stitches/react'

export const {
  config,
  createTheme,
  css,
  styled,
  getCssText,
  globalCss,
  keyframes,
  theme
} = createStitches({
  theme: {
    colors: {
      // main brand
      darkAccent: 'rgba(142, 119, 176, 1)',
      darkShade: 'rgba(45, 49, 74, 1)',
      lightAccent: 'rgba(122, 183, 213, 1)',
      lightShade: 'rgba(248, 247, 247, 1)',
      main: 'rgba(39, 213, 135, 1)',
      maine: 'rgba(39, 213, 135, 0.4)',

      // states
      // error: '#ff0054',
      error: '#ee4266',
      // warning: '#fcf3_00',
      warn: '#fee400',

      // utility
      overlay: 'rgba(0, 0, 0, 0.5)'
    },
    radii: {
      modal: '8px',
      1: '4px',
      2: '6px',
      3: '8px',
      4: '12px',
      round: '50%',
      pill: '9999px'
    }
  },
  media: {
    phone: '(min-width: 480px)',
    tablet: '(min-width: 480px)',
    desktop: '(min-width: 1024px)'
  },
  utils: {
    marginX: value => ({ marginLeft: value, marginRight: value })
  }
})
