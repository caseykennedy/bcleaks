// CreatePost

// ___________________________________________________________________

import React, { useRef, useState } from 'react'
import fetch from 'node-fetch'

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import 'react-tabs/style/react-tabs.css'

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
  linkUrl: string
  votes: number
  createdOn: string
}

const currentDate = new Date().toUTCString()

const CreatePostForm: React.FC<{ postType: 'link' | 'text' }> = ({
  postType
}) => {
  const inputRef = useRef<HTMLTextAreaElement>(null)
  const textAreaRef = useRef<HTMLTextAreaElement>(null)
  const linkUrlRef = useRef<HTMLInputElement>(null)

  const [articleTitle, setArticleTitle] = useState<string>('')
  const [articleBody, setArticleBody] = useState<string>('')
  const [linkUrl, setlinkUrl] = useState<string>('')
  const [loading, setLoading] = useState(false)
  const { user }: any = useIdentityContext()

  // Todo data
  const myPost = {
    author: user.user_metadata.full_name,
    postType: `${postType}`,
    category: 'bitcoin',
    title: articleTitle,
    body: articleBody,
    linkUrl: `${linkUrl}`,
    votes: 0,
    createdOn: currentDate
  }

  // Check if Text post type
  const isPostText = postType === 'text'

  // console.log('------ myPost -------')
  // console.log(myPost)
  const handlePost = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
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
  }: React.ChangeEvent<HTMLTextAreaElement>) => {
    setArticleTitle(target.value)
  }
  const handleBodyChange = ({
    target
  }: React.ChangeEvent<HTMLTextAreaElement>) => {
    setArticleBody(target.value)
  }
  const handlelinkUrlChange = ({
    target
  }: React.ChangeEvent<HTMLInputElement>) => {
    setlinkUrl(target.value)
  }

  return (
    <S.Form name="Creat post: link">
      <fieldset>
        <label htmlFor="linkUrl">
          <Heading as="p">Link URL:</Heading>
        </label>
        <Input
          name="linkUrl"
          placeholder="Link URL"
          type="text"
          value={linkUrl}
          onChange={handlelinkUrlChange}
          ref={linkUrlRef}
        />

        <label htmlFor="title">
          <Heading as="p">Title:</Heading>
        </label>
        <Textarea
          rows={2}
          name="title"
          placeholder="Title"
          value={articleTitle}
          onChange={handleTitleChange}
          ref={inputRef}
        />

        {isPostText && (
          <>
            <label htmlFor="text">
              <Heading as="p">Text:</Heading>
            </label>
            <Textarea
              rows={4}
              name="text"
              placeholder="Text"
              value={articleBody}
              onChange={handleBodyChange}
              ref={textAreaRef}
            />
          </>
        )}

        <label htmlFor="category">Category:</label>
        <Select id="category">
          <option>choose a category</option>
          <option value="altcoin">Altcoin</option>
          <option value="bitcoin">Bitcoin</option>
          <option value="defi">DeFi</option>
          <option value="ethereum">Ethereum</option>
        </Select>

        <button onClick={handlePost}>
          {loading
            ? 'Loading...'
            : 'submit'}
        </button>
      </fieldset>
    </S.Form>
  )
}

const CreatePost = () => {
  return (
    <S.CreatePost>
      <Box className="title">Create a post</Box>

      <Tabs>
        <TabList>
          <Tab>Link</Tab>
          <Tab>Text</Tab>
        </TabList>

        <TabPanel>
          <CreatePostForm postType="link" />
        </TabPanel>

        <TabPanel>
          <CreatePostForm postType="text" />
        </TabPanel>
      </Tabs>
    </S.CreatePost>
  )
}

export default CreatePost
