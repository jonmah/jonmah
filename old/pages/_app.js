import { Layout, Modal } from '@components'
import { styled } from '@stitches'
import '@sass/global.scss'

const Button = styled('button', {
  backgroundColor: '$main',
  borderRadius: '8px',
  fontSize: '13px',
  padding: '0.5rem  0.75rem',
  '&:hover': {
    backgroundColor: '$darkShade'
  }
  // variants: {
  //   color: {
  //     turq: {
  //       border: '2px solid $main',
  //       '&:hover': {
  //         backgroundColor: '$main',
  //         color: '$black'
  //       }
  //     },
  //     orange: {
  //       border: '2px solid $darkShade',
  //       '&:hover': {
  //         backgroundColor: '$darkShade',
  //         color: '$black'
  //       }
  //     }
  //   }
  // },
  // defaultVariants: {
  //   color: 'orange'
  // }
})

const App = ({ Component, pageProps, router }) => (
  <Layout router={router}>
    <Modal
      description="Make changes to your profile here. Click save when you're done."
      handleConfirm={() => console.log('Save')}
      title="Edit profile"
      triggerLabel="Trigger the Modal"
    >
      <fieldset className="Fieldset">
        <label className="Label" htmlFor="name">
          Name
        </label>
        <input className="Input" id="name" defaultValue="Jon" />
      </fieldset>
      <fieldset className="Fieldset">
        <label className="Label" htmlFor="username">
          Username
        </label>
        <input className="Input" id="username" defaultValue="jon" />
      </fieldset>
    </Modal>
    <Button>FFFFFFFF</Button>
    <Component {...pageProps} key={router.route} />
  </Layout>
)

export default App
