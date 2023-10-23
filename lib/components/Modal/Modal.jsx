import * as Dialog from '@radix-ui/react-dialog'
import { Button } from '@components'
import { Content, Description, Overlay, Title } from './Modal.styles'

const Modal = ({ children, description, title, triggerLabel }) => (
  <Dialog.Root>
    <Dialog.Trigger asChild>
      <Button
        label={triggerLabel}
        onClick={() => console.log('Modal Trigger')}
        type="confirm"
      />
    </Dialog.Trigger>
    <Dialog.Portal>
      <Overlay />
      <Content className="DialogContent">
        <Title>{title}</Title>
        <Description>{description}</Description>
        {children}
        <Dialog.Close asChild>
          <Button
            label="Save"
            onClick={() => console.log('Save')}
            type="confirm"
          />
        </Dialog.Close>
        <Dialog.Close asChild>
          <Button
            ariaLabel="Close"
            label="Cancel"
            onClick={() => console.log('Cancel')}
            type="cancel"
          />
        </Dialog.Close>
      </Content>
    </Dialog.Portal>
  </Dialog.Root>
)

Modal.displayName = 'Modal'
export default Modal
