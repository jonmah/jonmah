import common from './common'

const { blue, blueDark, green, white } = common.colors

const dark = {
  ...common,
  background: blue,
  menu: {
    background: blueDark,
    fontColor: white,
    hamburger: green,
  },
  typography: {
    ...common.typography,
    color: white,
  },
}

export default dark
