import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }
  
  html {
    font-size: 62.5%;
  }

  body {
    align-items: center;
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.typography.color};
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100vh;
    margin: 0;
    padding: 0;
    font-family: ${({ theme }) => theme.typography.fontFamily};
    transition: all 0.25s linear;
  }`
