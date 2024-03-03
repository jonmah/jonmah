import NextLink from 'next/link'
// import { Link, useColorModeValue } from '@chakra-ui/react'

const NavItem = ({ children, href, path }) => {
  const active = path === href
  // const inactiveColor = useColorModeValue('gray200', 'whiteAlpha.900')
  return (
    <NextLink href={href} passHref>
      this is a navitem for now
      {/* <Link
        bg={active ? 'glassTeal' : undefined}
        color={active ? '#202023' : inactiveColor}
        p={2}
      >
        {children}
      </Link> */}
    </NextLink>
  )
}

export default NavItem
