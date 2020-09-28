import React, { useState } from 'react'
import { ThemeProvider } from 'styled-components'

import themes from './theme'
import { GlobalStyles } from './theme/global'
import Header from './Header'
import { Page } from './components'

const App = () => {
  const [theme, setTheme] = useState('light')
  const handleSetTheme = () => {
    if (theme === 'light') {
      setTheme('dark')
    } else {
      setTheme('light')
    }
  }

  return (
    <ThemeProvider theme={themes[theme]}>
      <GlobalStyles />
      <Header handleSetTheme={handleSetTheme} />
      <Page>
        {/* <Flex alignItems="center" justify="flex-end">
          <div
            style={{
              height: '100px',
              width: '100px',
              background: '#0D2340',
              marginRight: '10px',
            }}
          ></div>
          <div
            style={{
              height: '100px',
              width: '100px',
              background: '#2a416f',
              marginRight: '10px',
            }}
          ></div>
          <div
            style={{
              height: '100px',
              width: '100px',
              background: '#44F281',
              marginRight: '10px',
            }}
          ></div>
          <div
            style={{
              height: '100px',
              width: '100px',
              background: '#06d6a0',
              marginRight: '10px',
            }}
          ></div>
          <div
            style={{
              height: '100px',
              width: '100px',
              background: '#F29F05',
              marginRight: '10px',
            }}
          ></div>
          <div
            style={{
              height: '100px',
              width: '100px',
              background: '#ffa350',
              marginRight: '10px',
            }}
          ></div>
        </Flex> */}
      </Page>
    </ThemeProvider>
  )
}

export default App
