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
    <Flex
      bg="black"
      p={5}
      style={{
        display: 'flex',
        flex: '1',
        justifyContent: 'space-between'
      }}
    >
      <span>{message}</span>

      <nav>
        <span>test nav: </span>
        <Link to="/app/">Dashboard</Link>
        {` `}
        <Link to="/app/profile">account</Link>
        {` `}
        {isLoggedIn ? (
          <a
            href="/"
            onClick={async event => {
              event.preventDefault()
              await logoutUser()
              navigate(`/app/login`)
            }}
          >
            Logout
          </a>
        ) : (
          <Link to="/app/login">Login</Link>
        )}
      </nav>
    </Flex>
  )
}
