// Article Category Page:

// ___________________________________________________________________

import React, { useEffect, useState } from 'react'
import { graphql } from 'gatsby'

// Theme
import * as S from './styles.scss'
import theme from '../../gatsby-plugin-theme-ui'
import { Box, Flex, Heading, Text } from 'theme-ui'

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
      posts: PostQuery[]
    }
  }
  pageContext: {
    id: string
  }
}

const ArticleCategoryPage: React.FC<Props> = ({ pageContext, data }) => {
  const [posts] = useState(data.category.posts || [])
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
    <S.ArticleCategoryPage>
      <CatNav postType="articles" />

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

      <Section border={true} pt={0}>
        <Flex>
          <Box sx={{ flex: [1, 1, 6 / 8], width: `100%` }}>
            {list.map((post, idx) => (
              <CardPost
                aspectRatio={4 / 3}
                post={post}
                inline={true}
                key={idx}
              />
            ))}
          </Box>
        </Flex>

        <Box mt={6}>
          {hasMore && (
            <Button onClick={handleLoadMore}>
              Load More <Icon name="plus" />
            </Button>
          )}
        </Box>
      </Section>
    </S.ArticleCategoryPage>
  )
}

export default ArticleCategoryPage

// ___________________________________________________________________

export const query = graphql`
  query ArticleCategoryTemplateQuery($id: String!) {
    category: sanityPostCategory(id: { eq: $id }) {
      description
      title
      posts {
        title
        _rawExcerpt
        _rawBody
        _id
        publishedAt(formatString: "MMM. DD, YYYY | hh:mma")
        slug {
          current
        }
        tags {
          tag
        }
        featured
        figure {
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
        sources {
          title
          url
        }
      }
    }
  }
`
