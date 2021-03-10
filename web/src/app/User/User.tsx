// User application

// ___________________________________________________________________

import React from 'react'
import { Router } from '@reach/router'

// Theme + ui
import * as S from './styles.scss'
import theme from '../../gatsby-plugin-theme-ui'
import { Box, Flex } from '../../components/ui'

// Components
import Profile from '../components/Profile'
import Dashboard from '../components/Dashboard'
import PrivateRoute from '../components/PrivateRoute'
import Login from '../Login'

// ___________________________________________________________________

const PublicRoute = (props: any) => <div>{props.children}</div>

const User = () => {
  return (
    <S.User>
      <Box className="inner">
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

          <S.Aside p={theme.gutter.axis}>
            <Profile />
          </S.Aside>
        </Flex>
      </Box>
    </S.User>
  )
}

export default User
