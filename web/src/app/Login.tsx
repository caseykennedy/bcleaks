import React from 'react'
import { navigate } from 'gatsby'

import { IdentityModal } from 'react-netlify-identity-widget'
import 'react-netlify-identity-widget/styles.css' // delete if you want to bring your own CSS

const Login: React.FC<{ path: string }> = ({ path }) => {
  const [dialog, setDialog] = React.useState(false)
  return (
    <>
      <h1>Log in</h1>
      <button onClick={() => setDialog(true)}>log in</button>

      <IdentityModal
        showDialog={dialog}
        onCloseDialog={() => setDialog(false)}
        onLogin={() => navigate('/user')}
        onSignup={() => navigate('/user')}
        aria-label="Log in"
      />
    </>
  )
}

export default Login
