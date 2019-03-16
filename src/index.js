import React from 'react'
import ReactDOM from 'react-dom'
import { LoginHolder } from './loginHolder'
import './styles.css'

function App(props) {
  return <LoginHolder />
}

ReactDOM.render(<App />, document.querySelector('#my-awesome-root'))
