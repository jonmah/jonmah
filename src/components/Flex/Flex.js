import styled from 'styled-components'

const Flex = styled.div`
  align-items: ${({ alignItems }) => alignItems};
  display: flex;
  height: ${({ height }) => height};
  justify-content: ${({ justifyContent }) => justifyContent};
  width: ${({ width }) => width};
`
Flex.displayName = 'Flex'

export default Flex
