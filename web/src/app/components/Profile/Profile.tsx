// Profile:

// ___________________________________________________________________

import React from 'react'
import { navigate } from 'gatsby'
import moment from 'moment'
import {
  useIdentityContext,
  IdentityModal
} from 'react-netlify-identity-widget'

// Components
import Icon from '../../../components/Icons'

// Theme + ui
import * as S from './styles.scss'
import theme from '../../../gatsby-plugin-theme-ui'
import { Box, Text } from '../../../components/ui'
import Button from '../../../components/ui/Button'

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
              <Text as="span" my={5}>
                Member since:
                <br />
                {user.created_at &&
                  moment(user.created_at).format('MMMM Do YYYY')}
              </Text>
            </>
          )}
          {!isLoggedIn ? (
            <Button as="button" onClick={() => setDialog(true)}>
              login
              <Icon name="login" />
            </Button>
          ) : (
            <Button
              as="button"
              onClick={async (
                e: React.MouseEvent<HTMLButtonElement, MouseEvent>
              ) => {
                e.preventDefault()
                await logoutUser()
                navigate(`/user/login`)
              }}
              className="btn  btn--logout"
            >
              logout
              <Icon name="logout" />
            </Button>
          )}
        </Box>
      </S.Profile>
    </>
  )
}

export default Profile
