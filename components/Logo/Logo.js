import Image from 'next/image'
import Link from 'next/link'
import { Text, useColorModeValue } from '@chakra-ui/react'

import { LogoBox } from './Logo.styled'

const Logo = () => {
  const logoImage = `/images/footprint${useColorModeValue('', '-dark')}.png`

  return (
    <Link href="/">
      <a>
        <LogoBox>
          <Image src={logoImage} width={20} height={20} alt="logo" />
          <Text
            color={useColorModeValue('gray.800', 'whiteAlpha.900')}
            fontFamily="M PLUS Rounded 1c"
            fontWeight="bold"
            ml={3}
          >
            Jonathan Mah
          </Text>
        </LogoBox>
      </a>
    </Link>
  )
}

export default Logo
