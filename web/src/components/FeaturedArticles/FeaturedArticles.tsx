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

type Props = {} & typeof defaultProps

const defaultProps = {
  bg: theme.colors.background
}

const FeaturedArticles: React.FC<Props> = ({ bg }) => {
  const posts = usePost()
  return (
    <S.FeaturedArticles bg={bg}>
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
                  <Heading as="h1" mb={1} className="text--xl  text--uppercase">
                    <Link to={`/articles/${post.slug.current}`}>
                      {post.title}
                    </Link>
                  </Heading>
                  {post.tags && (
                    <Flex mb={6} width={1}>
                      {post.tags.slice(0, 3).map((item, idx) => (
                        <Pill key={idx}>
                          <span>#{item.tag}</span>
                        </Pill>
                      ))}
                    </Flex>
                  )}
                </Box>

                <Flex alignItems="flex-end" justifyContent="space-between">
                  <PostMeta
                    authors={post.authors}
                    categories={post.categories}
                    publishedAt={post.publishedAt}
                  />

                  <Box className="button">
                    <Icon name="carat" />
                  </Box>
                </Flex>
              </Flex>
            </Link>
            {post.figure && (
              <Link
                to={`/articles/${post.slug.current}`}
                className="featured__image"
              >
                <Img
                  fluid={{
                    ...post.figure.asset.fluid,
                    aspectRatio: 1.25 / 1
                  }}
                  objectFit="cover"
                  objectPosition="50% 50%"
                  alt={post.title}
                />
              </Link>
            )}
          </>
        ))}
      </Flex>
    </S.FeaturedArticles>
  )
}

export default FeaturedArticles

// ___________________________________________________________________

FeaturedArticles.defaultProps = defaultProps
