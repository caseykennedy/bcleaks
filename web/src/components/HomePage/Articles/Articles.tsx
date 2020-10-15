// Articles Section:

// ___________________________________________________________________

import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image/withIEPolyfill'

import * as S from './styles.scss'
import { Box, Flex, Heading, Text, AnimatedBox } from '../../ui'
import theme from '../../../../config/theme'

import BlockContent from '../../BlockContent'

// Hooks
import usePost from '../../../hooks/usePost'

// ___________________________________________________________________

type CategoryShape = {
  categories: {
    title: string
  }[]
}

const Author: React.FC<{ author: PostAuthor }> = ({ author }) => {
  return (
    <S.Author>
      {/* <Img
        fluid={author.avatar.asset.fluid}
        objectFit="cover"
        objectPosition="50% 50%"
        alt={author.name}
        className="author__img"
      /> */}
      <Box className="author__name">{author.name}</Box>
    </S.Author>
  )
}

const Articles = () => {
  const posts = usePost()
  return (
    <S.Articles>
      <Flex className="articles__header" justifyContent="space-between">
        <Heading as="h3" fontFamily="display">
          Articles
        </Heading>
        <Link to="/">View All</Link>
      </Flex>
      <Flex flexWrap={['wrap', 'nowrap']}>
        <Box width={[1, 2 / 3]} className="articles__main">
          <Box>
            {posts.slice(0, 1).map(({ node: post }, idx) => (
              <Box className="post" key={idx}>
                {post.figure && (
                  <Box className="post__figure">
                    <Img
                      fluid={post.figure.asset.fluid}
                      objectFit="cover"
                      objectPosition="50% 50%"
                      alt={post.title}
                    />
                  </Box>
                )}
                <Heading as="h2">{post.title}</Heading>
                {post._rawExcerpt && (
                  <BlockContent blocks={post._rawExcerpt || []} />
                )}
                <Text
                  as="p"
                  color={theme.colors.tertiary}
                  className="post__meta"
                >
                  <small>
                    {post.publishedAt}
                    <br />
                    {post.authors && post.authors.name} in{' '}
                    {post.categories && post.categories[0].title}
                  </small>
                </Text>
              </Box>
            ))}
          </Box>
          <Box>
            {posts.map(({ node: post }, idx) => (
              <Flex className="post post--horizontal" key={idx}>
                <Box width={[1 / 4]} pr={5}>
                  {post.figure && (
                    <Box className="post__figure">
                      <Img
                        fluid={post.figure.asset.fluid}
                        objectFit="cover"
                        objectPosition="50% 50%"
                        alt={post.title}
                      />
                    </Box>
                  )}
                </Box>
                <Box width={[3 / 4]}>
                  <Heading as="h4" fontSize={3}>
                    {post.title}
                  </Heading>
                  {post._rawExcerpt && (
                    <BlockContent blocks={post._rawExcerpt || []} />
                  )}
                  <Text
                    as="p"
                    color={theme.colors.tertiary}
                    className="post__meta"
                  >
                    <small>
                      {post.publishedAt}
                      <br />
                      {post.authors && post.authors.name} in{' '}
                      {post.categories && post.categories[0].title}
                    </small>
                  </Text>
                </Box>
              </Flex>
            ))}
          </Box>
        </Box>
        <Box width={[1, 1 / 3]} className="articles__aside">
          {posts.map(({ node: post }, idx) => (
            <Box className="post" key={idx}>
              {post.figure && (
                <Box className="post__figure">
                  <Img
                    fluid={post.figure.asset.fluid}
                    objectFit="cover"
                    objectPosition="50% 50%"
                    alt={post.title}
                  />
                </Box>
              )}
              <Heading as="h4">{post.title}</Heading>
              <Text as="p" color={theme.colors.tertiary} className="post__meta">
                <small>
                  {post.publishedAt}
                  <br />
                  {post.authors && post.authors.name} in{' '}
                  {post.categories && post.categories[0].title}
                </small>
              </Text>
            </Box>
          ))}
        </Box>
      </Flex>
    </S.Articles>
  )
}

export default Articles
