import React from 'react'
import { useIdentityContext } from 'react-netlify-identity-widget'

import { Box, Flex, Heading, Text, AnimatedBox } from '../components/ui'
import theme from '../gatsby-plugin-theme-ui'

const Profile = () => {
  const { user }: any = useIdentityContext()
  console.log(user)
  return (
    <Box p={5}>
      <Heading as="h3">Account</Heading>
      <ul>
        <li>Name: {user.user_metadata && user.user_metadata.full_name}</li>
        <li>E-mail: {user.email}</li>
        <li>Created at: {user.created_at}</li>
      </ul>
    </Box>
  )
}

export default Profile
