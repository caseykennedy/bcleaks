import React from 'react'
import { Router } from '@reach/router'
import Layout from '../components/Layout'
import NavBar from './components/NavBar'
import Profile from './Profile'
import Main from './Main'
import PrivateRoute from './components/PrivateRoute'
import Login from './Login'

type TodoData = {
  title: string
  completed: boolean
}

const App = () => {
  fetch('/.netlify/functions/token-hider')
    .then(response => response.json())
    .then(console.log)

  fetch('/.netlify/functions/todos-read-all')
    .then(response => response.json())
    .then(console.log)

  // Function using fetch to POST to our API endpoint
  function createTodo(data: TodoData) {
    return fetch('/.netlify/functions/todos-create', {
      body: JSON.stringify(data),
      method: 'POST'
    }).then(response => {
      return response.text()
    })
  }

  // Todo data
  const myTodo = {
    title: 'My Community Article',
    completed: false
  }

  // create it!
  createTodo(myTodo)
    .then(response => {
      console.log('API response', response)
      // set app state
    })
    .catch(error => {
      console.log('ERROR')
      console.log('API error:', error)
    })

  return (
    <Layout>
      <NavBar />
      <Router>
        <PrivateRoute path="/app/profile" component={Profile} />
        <PublicRoute path="/app">
          <PrivateRoute path="/" component={Main} />
          <Login path="/login" />
        </PublicRoute>
      </Router>
    </Layout>
  )
}

const PublicRoute = (props: any) => <div>{props.children}</div>

export default App
