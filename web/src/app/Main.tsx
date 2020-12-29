import React from 'react'
import fetch from 'node-fetch'

import { useIdentityContext } from 'react-netlify-identity-widget'

import api from '../utils/api'
import { Box, Flex, Heading, Text, AnimatedBox } from '../components/ui'
import theme from '../gatsby-plugin-theme-ui'

type TodoData = {
  title: string
  votes: number
  author: string
}

const Main = () => {
  const inputRef = React.useRef<HTMLInputElement>(null)
  const [data, setData] = React.useState(null)
  const [articleTitle, setArticleTitle] = React.useState<string>('')
  const [testData, setTestData] = React.useState([])
  console.log('------ testi -------')
  console.log(testData)
  const [loading, setLoading] = React.useState(false)
  const { user }: any = useIdentityContext()
  const [err, setErr] = React.useState('')

  const handleGet = (e: any) => {
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

    fetch('/.netlify/functions/token-hider').then(response => response.json())
    // .then(console.log)

    fetch('/.netlify/functions/todos-read-all')
      .then(response => response.json())
      .then(json => {
        setTestData(json)
      })
      .then(console.log)
  }

  const handlePost = (e: any) => {
    e.preventDefault()
    setLoading(true)

    // Function using fetch to POST to our API endpoint
    function createTodo(data: TodoData) {
      return fetch('/.netlify/functions/todos-create', {
        body: JSON.stringify(data),
        method: 'POST'
      }).then(response => {
        return response.text()
      })
    }

    // create it!
    createTodo(myTodo)
      .then(response => {
        console.log('API response', response)
        // set app state
        setLoading(false)
      })
      .catch(error => {
        console.log('ERROR')
        console.log('API error:', error)
      })
  }

  const handleInputChange = ({ target }: any) => {
    setArticleTitle(target.value)
  }

  // Todo data
  const myTodo = {
    title: articleTitle,
    votes: 37,
    author: 'crypto_33'
  }

  console.log(articleTitle)

  React.useEffect(() => {
    return () => {}
  }, [])

  return (
    <Box p={5}>
      <Heading as="h3">Dashboard</Heading>
      <Box as="ul" mb={6}>
        <li>API: {user.api && user.api.apiURL}</li>
        <li>ID: {user.id}</li>
      </Box>

      <hr />

      <Heading as="h3" mt={3}>Post article</Heading>

      <Text as="h4">Article Title:</Text>
      <Text
        as="input"
        fontSize={4}
        p={1}
        mb={3}
        width={1}
        type="text"
        value={articleTitle}
        onChange={handleInputChange}
        ref={inputRef}
      />

      <Box
        width={1}
        p={4}
        mb={6}
        bg="primary"
        color="black"
        textAlign="center"
        onClick={handlePost}
        style={{ cursor: 'pointer' }}
      >
        {loading ? 'Loading...' : 'post article'}
      </Box>

      <hr />

      <Heading as="h3" mt={6}>get data</Heading>

      <Box
        width={1}
        p={4}
        mb={6}
        bg="primary"
        color="black"
        textAlign="center"
        onClick={handleGet}
        style={{ cursor: 'pointer' }}
      >
        {loading ? 'Loading...' : 'show account info + articles'}
      </Box>
      {err && <pre>{JSON.stringify(err, null, 2)}</pre>}
      <Heading as="h3" fontSize={3}>Account data</Heading>
      <Box as="pre" mb={6}>
        {JSON.stringify(data, null, 2)}
      </Box>

      <Heading as="h3" fontSize={3}>Community articles</Heading>
      {testData &&
        testData.map((data, idx) => (
          <Box as="pre" key={idx}>
            <Heading as="h3" fontSize={3} mb={3}>
              {data.data.title}
            </Heading>
            <Heading as="h4">VOTES: {data.data.votes}</Heading>
            <Heading as="h4">AUTHOR: {data.data.author}</Heading>
          </Box>
        ))}
      <pre>{JSON.stringify(testData, null, 2)}</pre>
    </Box>
  )
}

export default Main
