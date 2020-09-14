import React from 'react'
import fetch from 'node-fetch'

import { useIdentityContext } from 'react-netlify-identity-widget'

import api from '../utils/api'

type TodoData = {
  title: string
  completed: boolean
}

const Main = () => {
  const [data, setData] = React.useState(null)
  const [loading, setLoading] = React.useState(false)
  const { user }: any = useIdentityContext()
  const [err, setErr] = React.useState('')

  const handleClick = (e: any) => {
    e.preventDefault()
    setLoading(true)
    fetch('/.netlify/functions/auth-hello', {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + user.token.access_token
      }
    })
      .then(response => response.json())
      .then(json => {
        setLoading(false)
        setData(json)
      })
      .catch(err => {
        if (window.location.origin === 'http://localhost:8000') {
          setErr(
            'your origin is "http://localhost:8000". You are likely not using Netlify Dev so the functions server isnt running. Please read the docs, use Netlify Dev, and go to http://localhost:8888'
          )
        } else setErr(err)
        throw err
      })

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
  }

  const handleDelete = (e: any) => {
    e.preventDefault()
    setLoading(true)

    const myTodo = {
      title: 'My Community Article',
      completed: false
    }

    const todoId = 275487365081858573

    // Make API request to delete todo
    api
      .delete(todoId)
      .then(() => {
        console.log(`deleted todo id ${todoId}`)
      })
      .catch(e => {
        console.log(`There was an error removing ${todoId}`, e)
      })
  }

  return (
    <>
      <h1>Your Main App</h1>
      <ul>
        <li>API: {user.api && user.api.apiURL}</li>
        <li>ID: {user.id}</li>
      </ul>
      <hr />

      <button onClick={handleClick}>
        {loading ? 'Loading...' : 'Call Lambda Function'}
      </button>
      {/* <button onClick={handleDelete}>
        {loading ? 'Loading...' : 'delete'}
      </button> */}
      {err && <pre>{JSON.stringify(err, null, 2)}</pre>}
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </>
  )
}

export default Main
