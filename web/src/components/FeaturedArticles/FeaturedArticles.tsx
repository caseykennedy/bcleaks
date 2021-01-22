// Featured Articles Component:

// ___________________________________________________________________

import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image/withIEPolyfill'

// Theme + ui
import * as S from './styles.scss'
import theme from '../../gatsby-plugin-theme-ui'
import { Box, Flex, Heading, Text } from '../ui'

// Components
import Button from '../ui/Button'
import Pill from '../ui/Pill'
import Icon from '../Icons'
import PostMeta from '../PostMeta'

// Data
import usePost from '../../hooks/usePost'

// ___________________________________________________________________

type Props = {}

const FeaturedArticles: React.FC<Props> = () => {
  const posts = usePost()
  return (
    <S.FeaturedArticles>
      <Flex className="featured__inner">
        {posts.slice(0, 1).map(({ node: post }, idx) => (
          <>
            <Link
              to={`/articles/${post.slug.current}`}
              className="featured__panel"
              key={idx}
            >
              <Flex className="featured__content">
                <Box width={1}>
                  <Heading as="h1" className="text--xl  text--uppercase">
                    <Link to={`/articles/${post.slug.current}`}>
                      {post.title}
                    </Link>
                  </Heading>
                  {post.tags && (
                    <Flex mb={4} width={1}>
                      {post.tags.map((item, idx) => (
                        <Pill key={idx}>
                          <span>#{item.tag}</span>
                        </Pill>
                      ))}
                    </Flex>
                  )}
                </Box>

                <Flex alignItems="center" justifyContent="space-between">
                  <PostMeta
                    authors={post.authors}
                    categories={post.categories}
                    publishedAt={post.publishedAt}
                  />

                  <Link
                    to={`/articles/${post.slug.current}`}
                    className="button"
                  >
                    <Icon name="carat" />
                  </Link>
                </Flex>
              </Flex>
            </Link>
            {post.figure && (
              <Box flex={1} className="featured__image">
                <Img
                  fluid={{
                    ...post.figure.asset.fluid,
                    aspectRatio: 1.15 / 1
                  }}
                  objectFit="cover"
                  objectPosition="50% 50%"
                  alt={post.title}
                />
              </Box>
            )}
          </>
        ))}
      </Flex>
    </S.FeaturedArticles>
  )
}

export default FeaturedArticles

// ___________________________________________________________________

const defaultProps = {}

FeaturedArticles.defaultProps = defaultProps
