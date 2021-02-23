// Dashboard

// ___________________________________________________________________

import React, { useContext } from 'react'
import fetch from 'node-fetch'

// Context
import { useIdentityContext } from 'react-netlify-identity-widget'

// Utils
import api from '../../utils/api'

import StoreContext from '../../context/StoreContext'

// Theme + ui
import * as S from './styles.scss'
import theme from '../../gatsby-plugin-theme-ui'
import { Box, Heading, Text } from '../../components/ui'
import { Input, Select, Textarea } from 'theme-ui'

// ___________________________________________________________________

type TodoData = {
  author: string
  body: string
  postType: string
  title: string
  votes: number
}

const Dashboard = () => {
  const { create, readAll, update } = useContext(StoreContext)

  const inputRef = React.useRef<HTMLInputElement>(null)
  const [data, setData] = React.useState(null)
  const [articleTitle, setArticleTitle] = React.useState<string>('')
  const [articleBody, setArticleBody] = React.useState<string>('')
  const [testData, setTestData] = React.useState([])
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
        Authorization: `Bearer ${user.token.access_token}`
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

      // readAll()
      fetch('/.netlify/functions/todos-read-all')
      .then(response => response.json())
      .then(json => {
        setTestData(json)
      })
      .then(console.log)
  }

  // Todo data
  const myTodo = {
    author: user.user_metadata.full_name,
    body: articleBody,
    postType: 'article',
    title: articleTitle,
    votes: 0
  }

  // console.log('------ myTodo -------')
  // console.log(myTodo)

  const handlePost = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault()
    setLoading(true)

    // create it!
    create(myTodo)
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

  const handleTitleChange = ({
    target
  }: React.ChangeEvent<HTMLInputElement>) => {
    setArticleTitle(target.value)
  }

  const handleBodyChange = ({
    target
  }: React.ChangeEvent<HTMLTextAreaElement>) => {
    setArticleBody(target.value)
  }

  React.useEffect(() => {
    return () => {}
  }, [])

  return (
    <S.Dashboard>
      <Heading as="h3">Dashboard</Heading>

      <hr />

      <Heading as="h3" mt={3}>
        Post article
      </Heading>

      <Heading as="h4">Post Title:</Heading>
      <Input
        p={1}
        mb={6}
        type="text"
        value={articleTitle}
        onChange={handleTitleChange}
        ref={inputRef}
      />

      <Heading as="h4">Post Body:</Heading>
      <Textarea p={1} mb={6} value={articleBody} onChange={handleBodyChange} />

      <Heading as="h4">Post type:</Heading>
      <Select defaultValue="Article">
        <option>Article</option>
        <option>Link</option>
        <option>Video</option>
      </Select>

      <Box
        width={1}
        p={4}
        my={6}
        bg="primary"
        color="black"
        textAlign="center"
        onClick={handlePost}
        style={{ cursor: 'pointer' }}
      >
        {loading ? 'Loading...' : 'post article'}
      </Box>

      <hr />

      <Box bg="black" p={4}>
        <Heading as="h3" mt={6}>
          get data
        </Heading>

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

        <Text color="pink" mb={6}>
          {err && <>{JSON.stringify(err, null, 2)}</>}
        </Text>

        <Heading as="h3" fontSize={3}>
          Account data
        </Heading>
        <Box as="pre" mb={6}>
          {JSON.stringify(data, null, 2)}
        </Box>

        <Heading as="h3" fontSize={3}>
          Community articles
        </Heading>
        {testData &&
          testData.map((data, idx) => (
            <Box as="pre" key={idx}>
              <Heading as="h3" fontSize={3} mb={3}>
                {data.data.title}
              </Heading>
              <Text as="p">{data.data.body}</Text>
              <Heading as="h4">VOTES: {data.data.votes}</Heading>
              <Heading as="h4">AUTHOR: {data.data.author}</Heading>
            </Box>
          ))}
        <pre>{JSON.stringify(testData, null, 2)}</pre>
      </Box>
    </S.Dashboard>
  )
}

export default Dashboard
