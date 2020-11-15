import styled from 'styled-components'

export const Container = styled.a.attrs(({ dataType }) => ({
  'data-type': `${dataType ? dataType + '-' : ''}external-link`,
}))`
  box-sizing: border-box;
  color: ${({ theme }) => theme.typography.link};
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }

  &:visited {
    color: ${({ theme }) => theme.typography.linkVisited};
  }
`
Container.displayName = 'Container'
