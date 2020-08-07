import common from './common'

const { blue, green, white } = common.colors

const light = {
  ...common,
  background: white,
  menu: {
    background: blue,
    fontColor: white,
    hamburger: green,
  },
  typography: {
    color: blue,
    fontFamily:
      "BlinkMacSystemFont, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
  },
}

export default light
