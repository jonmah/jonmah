import React from 'react'

const Switch = ({ handleToggle, isOn }) => {
  const id = crypto.randomUUID()

  return (
    <label for={id}>
      <input id={id} type="checkbox"></input>
      <div class="switch-labels">
        <span>Label</span>
        <p>Description</p>
      </div>
    </label>
  )
}

export default Switch
