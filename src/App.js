import React, { useState } from 'react'
import { ThemeProvider } from 'styled-components'

import themes from './theme'
import { GlobalStyles } from './theme/global'
import Header from './Header'
import { Page } from './components'
import { capitalize } from 'webpack-js-library'

const App = () => {
  const [theme, setTheme] = useState('light')
  const handleSetTheme = () => {
    if (theme === 'light') {
      setTheme('dark')
    } else {
      setTheme('light')
    }
  }

  console.log(capitalize('sdfsdfsdf'))
  return (
    <ThemeProvider theme={themes[theme]}>
      <GlobalStyles />
      <Header handleSetTheme={handleSetTheme} />
      <Page>
        {/* <Flex alignItems="center" justify="flex-end">
          <div
            style={{
              height: '10px',
              width: '10px',
              background: 'red',
              marginRight: '10px',
            }}
          ></div>
          <div
            style={{
              height: '10px',
              width: '10px',
              background: 'blue',
              marginRight: '10px',
            }}
          ></div>
          <div
            style={{
              height: '10px',
              width: '10px',
              background: 'green',
              marginRight: '10px',
            }}
          ></div>
        </Flex> */}
      </Page>
    </ThemeProvider>
  )
}

export default App
