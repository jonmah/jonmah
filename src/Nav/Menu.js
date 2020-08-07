import styled from 'styled-components'

export const Menu = styled.ul`
  background: ${({ theme }) => theme.colors.white};
  -webkit-box-shadow: -12px 12px 24px -5px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: -12px 12px 24px -5px rgba(0, 0, 0, 0.75);
  box-shadow: -12px 12px 24px -5px rgba(0, 0, 0, 0.75);
  color: ${({ theme }) => theme.colors.blue};
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
    border-bottom: 1px solid ${({ theme }) => theme.colors.white};
    display: block;
    padding: ${({ theme }) => theme.padding};
  }
`
MenuItem.displayName = 'MenuItem'
