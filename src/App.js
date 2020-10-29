import React, { useState } from 'react'
import { ThemeProvider } from 'styled-components'

import themes from './theme'
import { GlobalStyles } from './theme/global'
import Header from './Header'
import { Main, Card, Carousel } from './components'

import splash from './static/splash.jpg'
import { testData } from './static/data/lists'

const App = () => {
  const [theme, setTheme] = useState('light')
  const [background, setBackground] = useState(splash)
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

        <Carousel
          gutters={1.5}
          height={themes[theme].features.card.heightHover}
        >
          {testData.map(({ id, splash }) => (
            <Card
              splash={splash}
              handleClick={() => setBackground(splash)}
              handleMouseover={() => setBackground(splash)}
              key={id}
            >
              {id}
            </Card>
          ))}
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
