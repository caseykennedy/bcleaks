// Articles Section:

// ___________________________________________________________________

import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image/withIEPolyfill'

import * as S from './styles.scss'
import theme from '../../../gatsby-plugin-theme-ui'
import { Box, Flex, Heading, Text } from '../../../components/ui'
import Pill from '../../../components/ui/Pill'

import BlockContent from '../../../components/BlockContent'
import Featured from './Featured'

// Data
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
    <S.Articles border={true} overflow="hidden">
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

      <Box width={1} overflow="hidden">
        <Featured />
      </Box>

      <Flex
        justifyContent="space-between"
        mt={8}
        width={1}
        className="articles__header"
      >
        <Heading
          as="h4"
          fontFamily="display"
          mb={0}
          className="text--uppercase"
        >
          Latest Leaks
        </Heading>
      </Flex>

      <Box width={[1, 1, 6 / 8]} className="articles__main">
        <Box>
          {posts.map(({ node: post }, idx) => (
            <Flex className="post post--horizontal" key={idx}>
              <Box width={[1 / 3, 1 / 2, 1 / 2]}>
                {post.figure && (
                  <Link to={`/blog/${post.slug.current}`}>
                    <Box className="figure">
                      <Img
                        fluid={post.figure.asset.fluid}
                        objectFit="cover"
                        objectPosition="50% 50%"
                        alt={post.title}
                      />
                    </Box>
                  </Link>
                )}
              </Box>

              <Flex width={[2 / 3, 1 / 2, 1 / 2]} className="post__details">
                <Box>
                  <Flex mb={4}>
                    <Pill>
                      <span>#featured</span>
                    </Pill>
                    <Pill>
                      <span>#stateMachine</span>
                    </Pill>
                    <Pill>
                      <span>#ETH</span>
                    </Pill>
                  </Flex>

                  <Heading as="h3">
                    <Link to={`/blog/${post.slug.current}`}>{post.title}</Link>
                  </Heading>
                </Box>

                <Text
                  as="p"
                  color={theme.colors.tertiary}
                  className="meta  t--small"
                >
                  <Text as="span" color="white" mb={0}>
                    {post.publishedAt}
                  </Text>
                  by {post.authors && post.authors.name} in{' '}
                  <Link to={``}>
                    <Box as="span" color="primary">
                      {post.categories && post.categories[0].title}
                    </Box>
                  </Link>
                </Text>
              </Flex>
            </Flex>
          ))}
        </Box>
      </Box>
    </S.Articles>
  )
}

export default Articles
