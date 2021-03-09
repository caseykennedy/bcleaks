// Dashboard

// ___________________________________________________________________

import React from 'react'
import { Link } from 'gatsby'

// Theme + ui
import * as S from './styles.scss'
import theme from '../../gatsby-plugin-theme-ui'
import { Box, Flex, Heading, Text } from '../../components/ui'

import CreatePost from './CreatePost'
import MyPosts from './MyPosts'

// ___________________________________________________________________

const Dashboard = () => {
  return (
    <S.Dashboard>
      {/* <Heading color="quaternary" mb={3} className="text--xl">
        Dashboard
      </Heading> */}

      <CreatePost />
      <Box
        bg="black"
        mt={theme.gutter.axis}
        p={4}
        style={{ border: theme.border }}
      >
        <Text color={theme.colors.tertiary} className="text--sm">
          Please be mindful of BCLeaks's <Link to={`/`}>content policy</Link>{' '}
          and be respectful.
        </Text>
      </Box>
      <MyPosts />
    </S.Dashboard>
  )
}

export default Dashboard
