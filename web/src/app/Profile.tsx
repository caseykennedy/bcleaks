// Profile

// ___________________________________________________________________

import React from 'react'
import { useIdentityContext } from 'react-netlify-identity-widget'

import { Box, Flex, Heading, Text, AnimatedBox } from '../components/ui'
import theme from '../gatsby-plugin-theme-ui'

// ___________________________________________________________________

const Profile = () => {
  const { user }: any = useIdentityContext()
  console.log(user)
  return (
    <Box>
      <Heading as="h4">Account</Heading>
      <ul>
        <li>Name: {user.user_metadata && user.user_metadata.full_name}</li>
        <li>E-mail: {user.email}</li>
        <li>Created at: {user.created_at}</li>
      </ul>
    </Box>
  )
}

export default Profile
