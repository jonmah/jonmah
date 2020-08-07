import common from './common'

const { blue, green, white } = common.colors

const dark = {
  ...common,
  background: blue,
  menu: {
    background: white,
    fontColor: blue,
    hamburger: green,
  },
  typography: {
    color: white,
    fontFamily:
      "BlinkMacSystemFont, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
  },
}

export default dark
