import styled from 'styled-components'

export const Menu = styled.ul`
  background: #333333;
  height: 100%;
  list-style: none;
  margin: 0;
  padding: 0;
  position: fixed;
  right: ${({ isOn }) => (isOn ? '0' : '-100vw')};
  top: 0;
  transition: 0.25s ease-out;
  width: 100vw;

  li:first-of-type {
    margin-top: 4rem;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.s}) {
    width: 50vw;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.m}) {
    background: unset;
    -webkit-box-shadow: unset;
    -moz-box-shadow: unset;
    box-shadow: unset;
    color: ${({ theme }) => theme.typography.color};
    display: flex;
    flex-direction: row;
    width: 30vw;

    li:first-of-type {
      margin-top: 0;
    }
  }
`
Menu.displayName = 'Menu'

export const MenuItem = styled.li`
  cursor: pointer;
  display: inline-block;

  @media (max-width: ${({ theme }) => theme.breakpoints.m}) {
    display: block;
    padding: ${({ theme }) => theme.padding};
  }
`
MenuItem.displayName = 'MenuItem'
