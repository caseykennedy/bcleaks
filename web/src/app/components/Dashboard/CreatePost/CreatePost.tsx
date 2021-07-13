// CreatePost

// ___________________________________________________________________

import React, { useRef, useState } from 'react'
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
import Button from '../../../../components/ui/Button'
import { Input, Select, Textarea } from 'theme-ui'

// Components
import Icon from '../../../../components/Icons'
import { PageTitle } from '@/templates/Post/Article/styles.scss'

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

// const currentDate = new Date().toLocaleString()

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
  const [error, setError] = useState<string>('')
  const [loading, setLoading] = useState(false)

  const titleToSlug = title
    .toLowerCase()
    .replace(/ /g, '-')
    .replace(/[^\w-]+/g, '')

  // Todo data
  const myPost = {
    author: user.user_metadata.full_name,
    category: `${category}`,
    createdOn: new Date().toString(),
    linkUrl: `${linkUrl}`,
    postType: `${postType}`,
    slug: titleToSlug,
    text: `${text}`,
    title: `${title}`,
    voters: [],
    votes: 0
  }

  // Check if Text post type
  const isLink = postType === 'link'

  // console.log('------ myPost -------')
  // console.log(myPost)
  const handlePost = (e: React.SyntheticEvent) => {
    e.preventDefault()

    setLoading(true)
    setCategory('')
    setLinkUrl('')
    setTitle('')
    setText('')

    // create it!
    api
      .create(myPost)
      .then(response => {
        console.log('API response', response)
        // set app state
        setLoading(false)
        alert('Great success!')
      })
      .catch(error => {
        setError('FUNCTION ERROR')
        alert('Error, error, errorrrr.')
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
    <S.Form id="create-post" name="Creat post: link" onSubmit={handlePost}>
      <fieldset>
        {isLink && (
          <>
            <label htmlFor="linkUrl">
              <Heading as="p">Link URL:</Heading>
            </label>
            <Input
              name="linkUrl"
              placeholder="Link"
              type="url"
              value={linkUrl}
              onChange={handleLinkUrlChange}
              ref={linkUrlRef}
              required={true}
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
          required={true}
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
              required={true}
            />
          </>
        )}

        <label htmlFor="category">Category:</label>
        <Select
          id="category"
          value={category}
          onChange={handleCategoryChange}
          required={true}
        >
          <option value="" disabled={true} selected={true}>
            choose a category
          </option>
          <option value="Altcoin">Altcoin</option>
          <option value="Bitcoin">Bitcoin</option>
          <option value="Crypto Picks">Crypto Picks</option>
          <option value="DeFi">DeFi</option>
          <option value="Ethereum">Ethereum</option>
          <option value="Investigations">Investigations</option>
        </Select>

        <Button
          as="button"
          mt={5}
          form="create-post"
          type="submit"
          value="submit"
        >
          {loading ? 'processing...' : 'submit'}
          <Icon name="carat" />
        </Button>
      </fieldset>
      <pre>{error}</pre>
    </S.Form>
  )
}

const CreatePost = () => {
  return (
    <S.CreatePost>
      <Box className="title  text--uppercase">Create a post</Box>

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
