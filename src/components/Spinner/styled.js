import styled, { css, keyframes } from 'styled-components'

/*!
 * Load Awesome v1.1.0 (http://github.danielcardoso.net/load-awesome/)
 * Copyright 2015 Daniel Cardoso <@DanielCardoso>
 * Licensed under MIT
 */

const boxAnimate = keyframes`
  17% {
    border-bottom-right-radius: 10%;
  }
  25% {
    transform: translateY(25%) rotate(22.5deg);
  }
  50% {
    border-bottom-right-radius: 100%;
    transform: translateY(50%) scale(1, .9) rotate(45deg);
  }
  75% {
    transform: translateY(25%) rotate(67.5deg);
  }
  100% {
    transform: translateY(0) rotate(90deg);
  }`

const boxShadow = keyframes`
  50% {
    transform: scale(1.25, 1);
  }`

const animation = box =>
  css`
    ${box} 0.6s -0.1s linear infinite;
  `

export const Container = styled.div`
  box-sizing: border-box;
  color: ${({ theme }) => theme.colors.green};
  display: block;
  font-size: 0;
  height: 96px;
  position: relative;
  width: 96px;

  > div {
    box-sizing: border-box;
    position: relative;
    display: inline-block;
    float: none;
    background-color: currentColor;
    border: 0 solid currentColor;
  }

  > div:nth-child(1),
  > div:nth-child(2) {
    position: absolute;
    left: 0;
    width: 100%;
  }

  > div:nth-child(1) {
    top: -25%;
    z-index: 1;
    height: 100%;
    border-radius: 10%;
    animation: ${animation(boxAnimate)};
  }

  > div:nth-child(2) {
    bottom: -9%;
    height: 10%;
    background: #000;
    border-radius: 50%;
    opacity: 0.2;
    animation: ${animation(boxShadow)};
  }
`
