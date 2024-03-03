import Head from 'next/head'

import { NavBar } from '@components'

const Main = ({ children, router }) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Jonathan Mah</title>
      </Head>

      <NavBar path={router.asPath} />

      <>
        {children}
      </>
    </>
  )
}

export default Main
