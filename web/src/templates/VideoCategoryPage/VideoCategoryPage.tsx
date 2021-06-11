// Video Category Page:

// ___________________________________________________________________

import React, { useEffect, useState } from 'react'
import { graphql } from 'gatsby'

// Theme
import * as S from './styles.scss'
import theme from '../../gatsby-plugin-theme-ui'
import { Box, Flex, Grid, Heading, Text } from 'theme-ui'

// Components
import Section from '../../components/Section'
import CardPost from '../../components/CardPost'
import CatNav from '../../components/CatNav'
import Button from '../../components/ui/Button'
import Icon from '../../components/Icons'

// ___________________________________________________________________

type Props = {
  data: {
    category: {
      description: any
      title: any
      videos: VideoQuery[]
    }
  }
  pageContext: {
    id: string
  }
}

const VideoCategoryPage: React.FC<Props> = ({ pageContext, data }) => {
  const [posts] = useState(data.category.videos || [])
  // State for the list
  const [list, setList] = useState([...posts.slice(0, 15)])
  // State to trigger oad more
  const [loadMore, setLoadMore] = useState(false)
  // State of whether there is more to load
  const [hasMore, setHasMore] = useState(posts.length > 15)
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
        ? posts.slice(currentLength, currentLength + 15)
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
    <S.VideoCategoryPage>
      <CatNav postType="videos" />

      <Section>
        <Heading
          as="h1"
          mb={0}
          sx={{ fontFamily: `display` }}
          className="text--lg  text--uppercase"
        >
          {data.category.title}
        </Heading>
      </Section>

      <Section border={true}>
        <Grid columns={[1, 2, 3]} gap={theme.space[4]}>
          {list.map((post, idx) => (
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
    </S.VideoCategoryPage>
  )
}

export default VideoCategoryPage

// ___________________________________________________________________

export const query = graphql`
  query VideoCategoryTemplateQuery($id: String!) {
    category: sanityPostCategory(id: { eq: $id }) {
      description
      title
      videos {
        videoUrl
        title
        _rawBody
        _id
        publishedAt(formatString: "MMM. DD, YYYY | hh:mma")
        slug {
          current
        }
        tags {
          tag
        }
        figure {
          alt
          asset {
            fluid(maxWidth: 800) {
              srcWebp
              srcSetWebp
              srcSet
              src
              sizes
              base64
              aspectRatio
            }
          }
        }
        categories {
          title
        }
        authors {
          name
          role
          avatar {
            asset {
              fluid(maxWidth: 600) {
                aspectRatio
                base64
                sizes
                src
                srcSet
                srcSetWebp
                srcWebp
              }
            }
          }
        }
      }
    }
  }
`
