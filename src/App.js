import React, { useState } from 'react'
import { ThemeProvider } from 'styled-components'

import themes from './theme'
import { GlobalStyles } from './theme/global'
import Header from './Header'
import Timeline from './Timeline'
import { Main } from './components'

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
