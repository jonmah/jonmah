import colors from './colors'

const common = {
  borderRadius: '0.5rem',
  breakpoints: {
    desktop: '1025px',
    laptop: '768px',
    mobile: '320px',
    tablet: '481px',
  },
  colors,
  features: {
    card: {
      height: '25vh',
      heightHover: '30vh',
      width: '17vh',
      widthHover: '20vh',
    },
    menu: {
      mobile: '100vw',
      tablet: '30rem',
    },
  },
  margin: '1rem',
  padding: '1rem',
  typography: {
    fontFamily:
      "BlinkMacSystemFont, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
  },
}

export default common
