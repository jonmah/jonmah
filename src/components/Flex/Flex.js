import styled from 'styled-components'

const Flex = styled.div`
  align-items: ${props => props.alignItems};
  display: flex;
  height: 100%;
  justify-content: ${props => props.justify};
  width: 100%;
`

export default Flex
