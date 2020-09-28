import styled from 'styled-components'

export const Menu = styled.ul`
  background: ${({ theme }) => theme.colors.blueDark};
  height: 100%;
  list-style: none;
  margin: 0;
  padding: 0;
  position: fixed;
  right: ${({ isOn }) => (isOn ? '0' : '-100vw')};
  top: 0;
  transition: 0.25s ease-out;
  width: ${({ theme }) => theme.features.menu.mobile};

  li:first-of-type {
    margin-top: 4rem;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: ${({ theme }) => theme.features.menu.tablet};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    background: unset;
    -webkit-box-shadow: unset;
    -moz-box-shadow: unset;
    box-shadow: unset;
    color: ${({ theme }) => theme.typography.color};
    display: flex;
    flex-direction: row;
    margin-top: ${({ theme }) => theme.margin};
    right: 0;
    transition: unset;

    li:first-of-type {
      margin-top: 0;
    }
  }
`
Menu.displayName = 'Menu'

export const MenuItem = styled.li`
  cursor: pointer;
  display: inline-block;

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    display: block;
    padding: ${({ theme }) => theme.padding};
  }
`
MenuItem.displayName = 'MenuItem'
