// Dashboard

// ___________________________________________________________________

import React from 'react'

// Theme + ui
import * as S from './styles.scss'
import theme from '../../gatsby-plugin-theme-ui'
import { Box, Flex, Heading, Text } from '../../components/ui'

import CreatePost from './CreatePost'

// ___________________________________________________________________

const MyPosts = () => {
  return (
    <Box className="panel" mt={theme.gutter.axis}>
      <Heading className="title  text--sm">My posts</Heading>
      <Flex alignItems="center" justifyContent="center" color="quaternary">
        You have no posts :(
      </Flex>
    </Box>
  )
}

const Dashboard = () => {
  return (
    <S.Dashboard>
      <Heading color="quaternary" mb={3} className="text--xl">
        Dashboard
      </Heading>

      <CreatePost />
      <MyPosts />
    </S.Dashboard>
  )
}

export default Dashboard
