import React from 'react'
import { Router } from '@reach/router'
import fetch from 'node-fetch'

// Components
import NavBar from './components/NavBar'
import Profile from './Profile'
import Main from './Main'
import PrivateRoute from './components/PrivateRoute'
import Login from './Login'

// Web Components
import Layout from '../components/Layout'

const App = () => {
  return (
    <>
      <NavBar />
      <Router>
        <PrivateRoute path="/app/profile" component={Profile} />
        <PublicRoute path="/app">
          <PrivateRoute path="/" component={Main} />
          <Login path="/login" />
        </PublicRoute>
      </Router>
    </>
  )
}

const PublicRoute = (props: any) => <div>{props.children}</div>

export default App
