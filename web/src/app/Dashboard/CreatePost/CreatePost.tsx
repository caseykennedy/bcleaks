// CreatePost

// ___________________________________________________________________

import React, { useRef, useState } from 'react'
import fetch from 'node-fetch'

// Context
import { useIdentityContext } from 'react-netlify-identity-widget'

// Utils
import api from '../../../utils/api'

// Theme + ui
import * as S from './styles.scss'
import theme from '../../../gatsby-plugin-theme-ui'
import { Box, Heading, Text } from '../../../components/ui'
import { Input, Select, Textarea } from 'theme-ui'

// ___________________________________________________________________

type PostShape = {
  author: string
  postType: string
  category: string
  title: string
  body: string
  assetUrl: string
  votes: number
  createdOn: string
}

const currentDate = new Date().toUTCString()

const CreatePost = () => {
  const inputRef = useRef<HTMLInputElement>(null)
  const textAreaRef = useRef<HTMLTextAreaElement>(null)
  const assetUrlRef = useRef<HTMLInputElement>(null)

  const [data, setData] = useState(null)
  const [articleTitle, setArticleTitle] = useState<string>('')
  const [articleBody, setArticleBody] = useState<string>('')
  const [assetUrl, setAssetUrl] = useState<string>('')
  const [testData, setTestData] = useState([])
  const [loading, setLoading] = useState(false)
  const { user }: any = useIdentityContext()
  const [err, setErr] = useState('')

  const handleGet = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
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

    fetch('/.netlify/functions/todos-read-all')
      .then(response => response.json())
      .then(json => {
        setTestData(json)
      })
      .then(console.log)
  }

  // Todo data
  const myPost = {
    author: user.user_metadata.full_name,
    postType: 'article',
    category: 'bitcoin',
    title: articleTitle,
    body: articleBody,
    assetUrl: `${assetUrl}`,
    votes: 0,
    createdOn: currentDate
  }

  // console.log('------ myPost -------')
  // console.log(myPost)
  const handlePost = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault()
    setLoading(true)
    // create it!
    api
      .create(myPost)
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
  const handleAssetUrlChange = ({
    target
  }: React.ChangeEvent<HTMLInputElement>) => {
    setAssetUrl(target.value)
  }

  return (
    <S.CreatePost>
      <Heading mb={6} className="title  text--sm">
        Create a post
      </Heading>

      <Box as="form">
        <label>
          <Heading as="p">Post Title:</Heading>
        </label>
        <Input
          p={1}
          mb={4}
          name="title"
          type="text"
          value={articleTitle}
          onChange={handleTitleChange}
          ref={inputRef}
        />

        <label>
          <Heading as="p">Post Body:</Heading>
        </label>
        <Textarea
          p={1}
          mb={4}
          value={articleBody}
          onChange={handleBodyChange}
          ref={textAreaRef}
        />

        <label>
          <Heading as="p">Asset URL:</Heading>
        </label>
        <Input
          p={1}
          mb={4}
          name="assetUrl"
          type="text"
          value={assetUrl}
          onChange={handleAssetUrlChange}
          ref={assetUrlRef}
        />

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
      </Box>
    </S.CreatePost>
  )
}

export default CreatePost
