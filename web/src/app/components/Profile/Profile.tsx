// Profile:

// ___________________________________________________________________

import React from 'react'
import { Link, navigate } from 'gatsby'
import { useIdentityContext } from 'react-netlify-identity-widget'

import * as S from './styles.scss'
import theme from '../../../gatsby-plugin-theme-ui'
import { Box, Flex, Heading, Text } from '../../../components/ui'

// ___________________________________________________________________

type IdentityShape = {
  user: UserShape
  isLoggedIn: any
  logoutUser: any
}

const Profile = () => {
  const { user, isLoggedIn, logoutUser }: any = useIdentityContext()
  const welcomeMessage: string = isLoggedIn
    ? `Hello, ${user.user_metadata && user.user_metadata.full_name}`
    : 'Please log in'

  return (
    <S.Profile>
      <Box className="title">{welcomeMessage}</Box>
      <Box className="content">
        {isLoggedIn && (
          <>
            <Text as="span">{user.email && user.email}</Text>
            <Text as="span">
              Member since:
              <br />
              {user.created_at && user.created_at}
            </Text>
          </>
        )}
        {isLoggedIn && (
          <button
            onClick={async event => {
              event.preventDefault()
              await logoutUser()
              navigate(`/user/login`)
            }}
          >
            Logout
          </button>
        )}
      </Box>
    </S.Profile>
  )
}

export default Profile
