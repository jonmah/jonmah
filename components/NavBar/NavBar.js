import {
  Box,
  Container,
  Flex,
  Heading,
  Stack,
  useColorModeValue,
} from '@chakra-ui/react'
// import { HamburgerIcon } from `@chakra-ui/icons`

import NavItem from './NavItem'
import { Logo } from '@components'

const NavBar = props => {
  const { path } = props

  return (
    <Box
      as="nav"
      bg={useColorModeValue('#fffff40', '#20202380')}
      position="fixed"
      style={{ backdropFilter: 'blur(10px' }}
      w="100%"
      zIndex={1}
      {...props}
    >
      <Container display="flex" p={2} maxW="container.md">
        <Flex align="center" mr={5}>
          <Heading as="h1" size="lg" letterSpacing={'tighter'}>
            <Logo />
          </Heading>
          <Stack
            alignItems="center"
            direction={{ base: 'column', md: 'row' }}
            display={{ base: 'none', md: 'flex' }}
            flexGrow={1}
            mt={{ base: 4, md: 0 }}
            width={{ base: 'full', md: 'auto' }}
          >
            <NavItem href="/works" path={path}>
              Works
            </NavItem>
            <NavItem href="/posts" path={path}>
              Posts
            </NavItem>
          </Stack>
        </Flex>
      </Container>
    </Box>
  )
}

export default NavBar
