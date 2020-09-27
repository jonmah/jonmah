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
    ...common.typography,
    color: white,
  },
}

export default dark
