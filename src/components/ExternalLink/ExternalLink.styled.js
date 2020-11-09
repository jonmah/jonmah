import styled from 'styled-components'

export const Container = styled.a.attrs(({ dataType }) => ({
  'data-type': `${dataType ? dataType + '-' : ''}external-link`,
}))`
  ${({ backgroundColor, theme }) => `
    ${
      backgroundColor &&
      `background-color: ${backgroundColor};
      color: ${theme.typography.link};`
    }
  `}
  text-decoration: none;
  box-sizing: border-box;

  &:hover {
    text-decoration: underline;
  }

  &:visited {
    color: ${({ theme }) => theme.typography.linkVisited};
  }
`
Container.displayName = 'Container'
