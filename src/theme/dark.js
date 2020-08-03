import colors from './colors'

const {
  black,
  blue,
  blueLight,
  green,
  green1,
  green2,
  green3,
  orange,
  white,
} = colors

const dark = {
  background: blue,
  breakpoints: [
    { key: 'xs', margin: '1rem' },
    { key: 's', margin: '1rem' },
    { key: 'm', margin: '2rem' },
    { key: 'l', margin: '2.5rem' },
    { key: 'xl', margin: '3rem' },
  ],
  colors,
  padding: '1rem',
  typography: {
    color: white,
    fontFamily:
      "BlinkMacSystemFont, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
  },
}

export default dark
