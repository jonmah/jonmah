import React, { useState } from 'react'
import styled, { ThemeProvider } from 'styled-components'

import { GlobalStyles } from './theme/global'
import themes from './theme'
import { Switch } from './components'

const Container = styled.div`
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
    <ThemeProvider theme={theme === 'dark' ? themes.dark : themes.light}>
      <GlobalStyles />
      <Container>
        <Switch handleToggle={toggleTheme} />
        Jon Mah
      </Container>
    </ThemeProvider>
  )
}

export default App
