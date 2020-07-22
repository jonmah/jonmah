import React, { useState } from 'react'
import styled, { ThemeProvider } from 'styled-components'

import { GlobalStyles } from './assets/global'
import { dark, light } from './assets/themes'
import { Switch } from './components'

const Container = styled.div`
  background: ${props => props.background};
  height: 100%;
  width: 100%;
`
Container.displayName = 'AppContainer'

const App = () => {
  const [theme, setTheme] = useState('light')
  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark')
    } else {
      setTheme('light')
    }
  }
  return (
    <ThemeProvider theme={theme === 'dark' ? dark : light}>
      <GlobalStyles />
      <button onClick={toggleTheme}>Toggle theme</button>
      <Container>
        <Switch handleToggle={() => console.log('flip')} />
      </Container>
    </ThemeProvider>
  )
}

export default App
