// Videos Page:

// ___________________________________________________________________

import React, { useEffect, useState } from 'react'

// Theme
import * as S from './styles.scss'
import theme from '../../gatsby-plugin-theme-ui'
import { Box, Flex, Heading, Text } from '../../components/ui'

// Components
import Section from '../../components/Section'
import CardPost from '../../components/CardPost'
import FeaturedArticles from '../../components/FeaturedArticles'
import CatNav from '../../components/CatNav'
import Button from '../../components/ui/Button'
import Icon from '../../components/Icons'

// Data
import usePost from '../../hooks/usePost'

// ___________________________________________________________________

const ArticlesPage = () => {
  const posts = usePost()
  const heroPost = posts[0].node
  const [items, setItems] = useState(posts)
  // State for the list
  const [list, setList] = useState([...posts.slice(0, 10)])
  // State to trigger oad more
  const [loadMore, setLoadMore] = useState(false)
  // State of whether there is more to load
  const [hasMore, setHasMore] = useState(posts.length > 10)
  // Load more button click
  const handleLoadMore = () => {
    setLoadMore(true)
  }

  // Handle loading more articles
  useEffect(() => {
    if (loadMore && hasMore) {
      const currentLength = list.length
      const isMore = currentLength < posts.length
      const nextResults = isMore
        ? posts.slice(currentLength, currentLength + 10)
        : []
      setList([...list, ...nextResults])
      setLoadMore(false)
    }
  }, [loadMore, hasMore]) // eslint-disable-line

  // Check if there is more
  useEffect(() => {
    const isMore = list.length < posts.length
    setHasMore(isMore)
  }, [list]) // eslint-disable-line

  return (
    <S.ArticlesPage>
      <FeaturedArticles bg={theme.colors.black} post={heroPost} />

      <CatNav postType="articles" />

      <Section>
        <Flex
          justifyContent="space-between"
          width={1}
          className="articles__header"
        >
          <Heading
            as="h4"
            mb={0}
            fontFamily="display"
            className="text--uppercase"
          >
            Latest Articles
          </Heading>
        </Flex>

        <Box width={[1, 1, 6 / 8]}>
          {list.map(({ node: post }, idx) => (
            <CardPost aspectRatio={4 / 3} post={post} inline={true} key={idx} />
          ))}
        </Box>

        <Box mt={6}>
          {hasMore && (
            <Button onClick={handleLoadMore}>
              Load More <Icon name="plus" />
            </Button>
          )}
        </Box>
      </Section>
    </S.ArticlesPage>
  )
}

export default ArticlesPage
