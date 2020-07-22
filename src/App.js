import React from 'react'
import styled, { ThemeProvider } from 'styled-components'

import Switch from './components/Switch'

const Container = styled.div`
  background: ${props => props.theme.dark.background};
  height: 100%;
  width: 100%;
`
Container.displayName = 'AppContainer'

const App = () => {
  return (
    <ThemeProvider
      theme={{
        dark: { background: '#29416f' },
        light: { background: '#ffffff' },
      }}
    >
      <Container>
        <Switch handleToggle={() => console.log('flip')} />
      </Container>
    </ThemeProvider>
  )
}

export default App
