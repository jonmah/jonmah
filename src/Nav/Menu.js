import styled from 'styled-components'

export const Menu = styled.ul`
  background: ${({ theme }) => theme.menu.background};
  -webkit-box-shadow: -12px 12px 24px -5px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: -12px 12px 24px -5px rgba(0, 0, 0, 0.75);
  box-shadow: -12px 12px 24px -5px rgba(0, 0, 0, 0.75);
  color: ${({ theme }) => theme.menu.fontColor};
  display: ${({ isOn }) => (isOn ? 'flex' : 'none')};
  flex-direction: column;
  height: 100%;
  list-style-type: none;
  margin: 0;
  padding: 0;
  position: fixed;
  right: 0;
  top: 0;
  width: 100vw;

  @media (min-width: ${({ theme }) => theme.breakpoints.s}) {
    height: 75%;
    width: 50vw;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.m}) {
    background: unset;
    color: ${({ theme }) => theme.typography.color};
    display: flex;
    flex-direction: row;
    width: 30vw;
  }
`
Menu.displayName = 'Menu'

export const MenuItem = styled.li`
  cursor: pointer;
  display: inline-block;

  @media (max-width: ${({ theme }) => theme.breakpoints.m}) {
    display: block;
  }
`
MenuItem.displayName = 'MenuItem'
