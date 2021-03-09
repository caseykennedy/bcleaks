// User application

// ___________________________________________________________________

import React from 'react'
import { Router } from '@reach/router'
import fetch from 'node-fetch'

// Components
import Profile from './components/Profile'
import Dashboard from './Dashboard'
import PrivateRoute from './components/PrivateRoute'
import Login from './Login'

// Theme + ui
import theme from '../gatsby-plugin-theme-ui'
import { Box, Flex } from '../components/ui'
import { Grid } from 'theme-ui'

const User = () => {
  return (
    <>
      <Box bg="black">
        <Box mr="auto" maxWidth={theme.maxWidth} width={1}>
          <Flex flexDirection={['column-reverse', 'row']}>
            <Box flex={2} bg="background" p={theme.gutter.axis}>
              <Router>
                <PrivateRoute path="/user/profile" component={Profile} />
                <PublicRoute path="/user">
                  <PrivateRoute path="/" component={Dashboard} />
                  <Login path="/login" />
                </PublicRoute>
              </Router>
            </Box>

            <Box flex={1} bg="black" p={theme.gutter.axis}>
              <Profile />
            </Box>
          </Flex>
        </Box>
      </Box>
    </>
  )
}

const PublicRoute = (props: any) => <div>{props.children}</div>

export default User
