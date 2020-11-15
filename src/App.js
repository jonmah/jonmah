import React, { useState } from 'react'
import { ThemeProvider } from 'styled-components'

import themes from './theme'
import { GlobalStyles } from './theme/global'
import Header from './Header'
import Timeline from './Timeline'
import { Flex, Main } from './components'

import splash from './static/splash.jpg'

const App = () => {
  const [theme, setTheme] = useState('light')
  const [background, setBackground] = useState(
    'https://i.imgur.com/nA5sI5v.jpg'
  )
  const handleSetTheme = () => {
    if (theme === 'light') {
      setTheme('dark')
    } else {
      setTheme('light')
    }
  }

  const garbage = (
    <Flex alignItems="center" justify="flex-end">
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
    </Flex>
  )

  return (
    <ThemeProvider theme={themes[theme]}>
      <GlobalStyles />
      <Main backgroundImage={background}>
        <Header handleSetTheme={handleSetTheme} />
        <Timeline
          handleClick={setBackground}
          height={themes[theme].features.card.heightHover}
        />
      </Main>
    </ThemeProvider>
  )
}

export default App
