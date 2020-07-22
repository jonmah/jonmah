import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import logo from './logo.svg'
import './App.css'

import Switch from './components/Switch'

const Container = styled.div`
  background: ${props => props.theme.dark.background};
`

const App = () => {
  return (
    <ThemeProvider
      theme={{
        dark: { background: '#29416f' },
        light: { background: '#ffffff' },
      }}
    >
      <div className="App">
        <header className="App-header">
          <Switch handleToggle={() => console.log('flip')} />
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </ThemeProvider>
  )
}

export default App
