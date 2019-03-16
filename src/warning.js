import React from 'react'

export function Warning(props) {
  if (props.hidden) {
    return null
  }

  return <div>Warning!</div>
}
