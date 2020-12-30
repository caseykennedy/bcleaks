// Articles Section:

// ___________________________________________________________________

import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image/withIEPolyfill'

import * as S from './styles.scss'
import { Box, Flex, Heading, Text, AnimatedBox } from '../../../components/ui'
import theme from '../../../gatsby-plugin-theme-ui'

import BlockContent from '../../../components/BlockContent'
import Featured from './Featured'

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
    <S.Articles border={true} overflow="visible">
      <Flex
        justifyContent="space-between"
        width={1}
        className="articles__header"
      >
        <Heading fontFamily="display" className="text--lg  text--uppercase">
          Articles
        </Heading>
        <Link to="/">View All</Link>
      </Flex>

      <Box width={1}>
        <Featured />
      </Box>

      <Flex
        justifyContent="space-between"
        mt={8}
        width={1}
        className="articles__header"
      >
        <Heading as="h4" fontFamily="display" mb={0} className="text--uppercase">
          Latest Leaks
        </Heading>
      </Flex>

      <Box width={[1, 1, 6 / 8]} className="articles__main">
        <Box>
          {posts.map(({ node: post }, idx) => (
            <Flex className="post post--horizontal" key={idx}>
              <Box width={[1 / 3, 1 / 2, 1 / 2]}>
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
              <Box width={[2 / 3, 1 / 2, 1 / 2]} className="post__details">
                <Link to={`/blog/${post.slug.current}`}>
                  <Heading as="h3">{post.title}</Heading>
                </Link>

                {/* {post._rawExcerpt && (
                    <BlockContent blocks={post._rawExcerpt || []} />
                  )} */}
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
    </S.Articles>
  )
}

export default Articles
