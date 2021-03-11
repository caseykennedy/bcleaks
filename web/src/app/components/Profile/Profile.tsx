// Profile:

// ___________________________________________________________________

import React from 'react'
import { navigate } from 'gatsby'
import moment from 'moment'
import {
  useIdentityContext,
  IdentityModal
} from 'react-netlify-identity-widget'

import Icon from '../../../components/Icons'

// Theme + ui
import * as S from './styles.scss'
import theme from '../../../gatsby-plugin-theme-ui'
import { Box, Text } from '../../../components/ui'

// ___________________________________________________________________

type IdentityShape = {
  user: UserShape
  isLoggedIn: any
  logoutUser: any
}

const Profile = () => {
  const { user, isLoggedIn, logoutUser }: any = useIdentityContext()
  const [dialog, setDialog] = React.useState(false)

  const welcomeMessage: string = isLoggedIn
    ? `Hello, ${user.user_metadata && user.user_metadata.full_name}`
    : 'Please log in'

  return (
    <>
      <IdentityModal
        showDialog={dialog}
        onCloseDialog={() => setDialog(false)}
        onLogin={() => navigate('/user')}
        onSignup={() => navigate('/user')}
        aria-label="Log in"
      />

      <S.Profile>
        <Box className="title">{welcomeMessage}</Box>
        <Box className="content">
          {isLoggedIn && (
            <>
              <Text as="span">{user.email && user.email}</Text>
              <Text as="span" mt={5}>
                Member since:
                <br />
                {user.created_at &&
                  moment(user.created_at).format('MMMM Do YYYY')}
              </Text>
            </>
          )}
          {!isLoggedIn ? (
            <Box onClick={() => setDialog(true)} className="btn">
              login
              <Icon name="login" />
            </Box>
          ) : (
            <Box
              onClick={async event => {
                event.preventDefault()
                await logoutUser()
                navigate(`/user/login`)
              }}
              className="btn  btn--logout"
            >
              logout
              <Icon name="logout" />
            </Box>
          )}
        </Box>
      </S.Profile>
    </>
  )
}

export default Profile
