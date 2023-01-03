import { Layout } from '@components'

const App = ({ Component, pageProps, router }) => (
  <Layout router={router}>
    <Component {...pageProps} key={router.route} />
  </Layout>
)

export default App
