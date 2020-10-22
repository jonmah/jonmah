import styled from 'styled-components'

const Flex = styled.div`
  align-items: ${({ alignItems }) => alignItems};
  display: flex;
  flex-direction: ${({ flexDirection }) => flexDirection};
  height: ${({ height }) => height};
  justify-content: ${({ justifyContent }) => justifyContent};
  width: ${({ width }) => width};

  > * {
    ${({ flexDirection, gutters }) => ['column', 'column-inverse'].includes(flexDirection) ? `margin-bottom: ${gutters}rem;` : `margin-right: ${gutters}rem;` }
  }
`
Flex.displayName = 'Flex'

export default Flex
