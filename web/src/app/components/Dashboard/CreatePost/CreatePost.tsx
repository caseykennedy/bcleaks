// CreatePost

// ___________________________________________________________________

import React, { useRef, useState } from 'react'
import fetch from 'node-fetch'

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import 'react-tabs/style/react-tabs.css'

// Context
import { useIdentityContext } from 'react-netlify-identity-widget'

// Utils
import api from '../../../../utils/api'

// Theme + ui
import * as S from './styles.scss'
import theme from '../../../../gatsby-plugin-theme-ui'
import { Box, Heading, Text } from '../../../../components/ui'
import { Input, Select, Textarea } from 'theme-ui'

// ___________________________________________________________________

type PostShape = {
  author: string
  postType: string
  category: string
  title: string
  text: string
  linkUrl: string
  votes: number
  createdOn: string
  slug: string
}

const currentDate = new Date().toLocaleString()

const CreatePostForm: React.FC<{ postType: 'link' | 'text' }> = ({
  postType
}) => {
  const { user }: any = useIdentityContext()

  const inputRef = useRef<HTMLTextAreaElement>(null)
  const textAreaRef = useRef<HTMLTextAreaElement>(null)
  const linkUrlRef = useRef<HTMLInputElement>(null)

  const [category, setCategory] = useState<string>('')
  const [linkUrl, setLinkUrl] = useState<string>('')
  const [title, setTitle] = useState<string>('')
  const [text, setText] = useState<string>('')
  const [loading, setLoading] = useState(false)

  // Todo data
  const myPost = {
    author: user.user_metadata.full_name,
    category: `${category}`,
    createdOn: currentDate,
    linkUrl: `${linkUrl}`,
    postType: `${postType}`,
    slug: title,
    text: `${text}`,
    title: `${title}`,
    voters: [],
    votes: 0,
  }

  // Check if Text post type
  const isLink = postType === 'link'

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

  const handleCategoryChange = ({
    target
  }: React.ChangeEvent<HTMLSelectElement>) => {
    setCategory(target.value)
  }
  const handleLinkUrlChange = ({
    target
  }: React.ChangeEvent<HTMLInputElement>) => {
    setLinkUrl(target.value)
  }
  const handleTitleChange = ({
    target
  }: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTitle(target.value)
  }
  const handleTextChange = ({
    target
  }: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(target.value)
  }

  return (
    <S.Form name="Creat post: link">
      <fieldset>
        {isLink && (
          <>
            <label htmlFor="linkUrl">
              <Heading as="p">Link URL:</Heading>
            </label>
            <Input
              name="linkUrl"
              placeholder="Link URL"
              type="text"
              value={linkUrl}
              onChange={handleLinkUrlChange}
              ref={linkUrlRef}
            />
          </>
        )}

        <label htmlFor="title">
          <Heading as="p">Title:</Heading>
        </label>
        <Textarea
          rows={2}
          name="title"
          placeholder="Title"
          value={title}
          onChange={handleTitleChange}
          ref={inputRef}
        />

        {!isLink && (
          <>
            <label htmlFor="text">
              <Heading as="p">Text:</Heading>
            </label>
            <Textarea
              rows={4}
              name="text"
              placeholder="Text"
              value={text}
              onChange={handleTextChange}
              ref={textAreaRef}
            />
          </>
        )}

        <label htmlFor="category">Category:</label>
        <Select id="category" value={category} onChange={handleCategoryChange}>
          <option>choose a category</option>
          <option value="altcoin">Altcoin</option>
          <option value="bitcoin">Bitcoin</option>
          <option value="defi">DeFi</option>
          <option value="ethereum">Ethereum</option>
        </Select>

        <button onClick={handlePost}>
          {loading ? 'Loading...' : 'submit'}
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
