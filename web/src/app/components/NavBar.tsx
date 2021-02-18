import React from 'react'
import { Link, navigate } from 'gatsby'

import { useIdentityContext } from 'react-netlify-identity-widget'

import { Box, Flex, Heading, Text, AnimatedBox } from '../../components/ui'
import theme from '../../gatsby-plugin-theme-ui'

export default () => {
  const { user, isLoggedIn, logoutUser }: any = useIdentityContext()
  const message: string = isLoggedIn
    ? `Hello, ${user.user_metadata && user.user_metadata.full_name}`
    : 'You are not logged in'

  return (
    <Flex bg="black" p={5} flex={1} flexDirection="column" flexWrap="wrap">
      <span>{message}</span>

      <br />

      <Flex flexDirection="column" flexWrap="wrap">
        <Link to="/user/">Dashboard</Link>
        {` `}
        <Link to="/user/profile">Account</Link>
        {` `}
        {isLoggedIn ? (
          <a
            href="/"
            onClick={async event => {
              event.preventDefault()
              await logoutUser()
              navigate(`/user/login`)
            }}
          >
            Logout
          </a>
        ) : (
          <Link to="/user/login">Login</Link>
        )}
      </Flex>
    </Flex>
  )
}
