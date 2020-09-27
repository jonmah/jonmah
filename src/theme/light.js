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
    ...common.typography,
    color: white,
  },
}

export default light
