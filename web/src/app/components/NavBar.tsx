import React from 'react'
import { Link, navigate } from 'gatsby'
import { useIdentityContext } from 'react-netlify-identity-widget'
import { Box, Flex, Heading, Text } from '../../components/ui'
import theme from '../../gatsby-plugin-theme-ui'

type IdentityShape = {
  user: UserShape
  isLoggedIn: any
  logoutUser: any
}

export default () => {
  const { user, isLoggedIn, logoutUser }: any = useIdentityContext()
  const message: string = isLoggedIn
    ? `Hello, ${user.user_metadata && user.user_metadata.full_name}`
    : 'Please log in'

  return (
    <Flex flex={1} flexDirection="column" flexWrap="wrap">
      <Heading as="h4">{message}</Heading>
      {isLoggedIn && (
        <>
          <Text as="p">{user.email && user.email}</Text>
          <Text as="p">
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
    </Flex>
  )
}
