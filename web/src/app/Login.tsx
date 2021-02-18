import React from 'react'
import { navigate } from 'gatsby'

import {
  IdentityModal,
  useIdentityContext
} from 'react-netlify-identity-widget'
import 'react-netlify-identity-widget/styles.css' // delete if you want to bring your own CSS

const Login: React.FC<{ path: string }> = ({ path }) => {
  const identity = useIdentityContext()
  const [dialog, setDialog] = React.useState(false)
  return (
    <>
      <h1>Log in</h1>
      <button onClick={() => setDialog(true)}>log in</button>

      <IdentityModal
        showDialog={dialog}
        onCloseDialog={() => setDialog(false)}
        onLogin={user => navigate('/user/profile')}
        onSignup={user => navigate('/user/profile')}
        aria-label="Log in"
      />
    </>
  )
}

export default Login
