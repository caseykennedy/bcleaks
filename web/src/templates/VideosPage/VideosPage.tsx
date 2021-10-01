// Videos Page:

// ___________________________________________________________________

import React, { useEffect, useState } from 'react'

// Theme
import * as S from './styles.scss'
import theme from '../../gatsby-plugin-theme-ui'
import { Box, Flex, Grid, Text } from 'theme-ui'

// Components
import Section from '../../components/Section'
import CardPost from '../../components/CardPost'
import CatNav from '../../components/CatNav'
import FeaturedVideo from '../../components/FeaturedVideo'
import Button from '../../components/ui/Button'
import Icon from '../../components/Icons'

// Data
import useVideo from '../../hooks/useVideo'

// ___________________________________________________________________

const VideosPage = () => {
  const videos = useVideo()
  // State for the list
  const [list, setList] = useState([...videos.slice(0, 15)])
  // State to trigger load more
  const [loadMore, setLoadMore] = useState(false)
  // State of whether there is more to load
  const [hasMore, setHasMore] = useState(videos.length > 15)
  // Load more button click
  const handleLoadMore = () => {
    setLoadMore(true)
  }

  // Handle loading more articles
  useEffect(() => {
    if (loadMore && hasMore) {
      const currentLength = list.length
      const isMore = currentLength < videos.length
      const nextResults = isMore
        ? videos.slice(currentLength, currentLength + 15)
        : []
      setList([...list, ...nextResults])
      setLoadMore(false)
    }
  }, [loadMore, hasMore]) // eslint-disable-line

  // Check if there is more
  useEffect(() => {
    const isMore = list.length < videos.length
    setHasMore(isMore)
  }, [list]) // eslint-disable-line
  return (
    <S.VideosPage>
      <FeaturedVideo
        bg={theme.colors.black}
        post={videos[0].node}
        hero={false}
      />

      <CatNav postType="videos" />

      <Section>
        <Grid columns={[1, 2, 3]} gap={theme.space[4]}>
          {list.map(({ node: post }, idx) => (
            <Flex key={idx}>
              <CardPost post={post} video={true} small={false} />
            </Flex>
          ))}
        </Grid>

        <Box mt={6}>
          {hasMore && (
            <Button onClick={handleLoadMore}>
              Load More <Icon name="plus" />
            </Button>
          )}
        </Box>
      </Section>
    </S.VideosPage>
  )
}

export default VideosPage
