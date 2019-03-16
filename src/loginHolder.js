import React from 'react'
import { Greeting } from './greeting'

export class LoginHolder extends React.Component {
  constructor(props) {
    super(props)

    this.onSigninClick = this.onSigninClick.bind(this)
    this.onSignoutClick = this.onSignoutClick.bind(this)

    this.state = {
      singedIn: false
    }
  }

  onSigninClick(e) {
    this.setState(state => ({
      singedIn: !state.singedIn
    }))
  }

  onSignoutClick(e) {
    this.setState(state => ({
      singedIn: !state.singedIn
    }))
  }

  render() {
    const signInButton = <button onClick={this.onSigninClick}>Sign in</button>
    const signOutButton = (
      <button onClick={this.onSignoutClick}>Sign out</button>
    )

    return (
      <div className="login-holder">
        <Greeting isLoggedIn={this.state.singedIn} />
        <div>{this.state.singedIn ? signOutButton : signInButton}</div>
      </div>
    )
  }
}
