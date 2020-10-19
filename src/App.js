import React, { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import uuid from 'react-uuid'

import themes from './theme'
import { GlobalStyles } from './theme/global'
import Header from './Header'
import { Main, Card, Carousel } from './components'

import splash from './static/splash.jpg'

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
      <Main backgroundImage={splash}>
        <Header handleSetTheme={handleSetTheme} />
        <Carousel gutters="1.5rem">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18].map(
            x => (
              <Card key={uuid()} />
            )
          )}
        </Carousel>
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
      </Main>
    </ThemeProvider>
  )
}

export default App
