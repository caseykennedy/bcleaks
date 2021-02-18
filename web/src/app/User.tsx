// User application

// ___________________________________________________________________

import React from 'react'
import { Router } from '@reach/router'
import fetch from 'node-fetch'

// Components
import NavBar from './components/NavBar'
import Profile from './Profile'
import Dashboard from './Dashboard'
import PrivateRoute from './components/PrivateRoute'
import Login from './Login'

// Theme + ui
import theme from '../gatsby-plugin-theme-ui'
import { Box } from '../components/ui'
import { Grid } from 'theme-ui'

const User = () => {
  return (
    <Box p={theme.gutter.axis}>
      <Box mr="auto" maxWidth={theme.maxWidth} width={1}>
        <Grid gap={[4, 5, 6]} columns={[1, '2fr 1fr']}>
          <Box>
            <Router>
              <PrivateRoute path="/user/profile" component={Profile} />
              <PublicRoute path="/user">
                <PrivateRoute path="/" component={Dashboard} />
                <Login path="/login" />
              </PublicRoute>
            </Router>
          </Box>

          <Box>
            <NavBar />
          </Box>
        </Grid>
      </Box>
    </Box>
  )
}

const PublicRoute = (props: any) => <div>{props.children}</div>

export default User
