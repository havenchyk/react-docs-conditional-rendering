import React from 'react'
import { GuestLogin } from './guestLogin'
import { UserLogin } from './userLogin'
import { Warning } from './warning'

export function Greeting({ isLoggedIn }) {
  return (
    <div>
      <Warning hidden={isLoggedIn} />
      {isLoggedIn ? <UserLogin /> : <GuestLogin />}
    </div>
  )
}
