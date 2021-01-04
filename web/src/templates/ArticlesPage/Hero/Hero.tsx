// Hero Component:

// ___________________________________________________________________

import React from 'react'
import { Link } from 'gatsby'

import * as S from './styles.scss'
import theme from '../../../gatsby-plugin-theme-ui'

import { Box, Flex, Heading, Text, AnimatedBox } from '../../../components/ui'
import Button from '../../../components/ui/Button'
import Pill from '../../../components/ui/Pill'

import Icon from '../../../components/Icons'

// Data
import usePost from '../../../hooks/usePost'

// ___________________________________________________________________

type Props = {}

const Hero: React.FC<Props> = () => {
  const posts = usePost()
  return (
    <S.Hero>
      <Flex className="hero__inner">
        {posts.slice(1, 3).map(({ node: post }, idx) => (
          <Box flex={1} p={theme.gutter.axis} className="panel" key={idx}>
            <Box width={1}>
              {post.tags && (
                <Flex mb={4} width={1}>
                  {post.tags.map((item, idx) => (
                    <Pill key={idx}>
                      <span>#{item.tag}</span>
                    </Pill>
                  ))}
                </Flex>
              )}

              <Heading as="h1" className="text--xl  text--uppercase">
                <Link to={`/blog/${post.slug.current}`}>{post.title}</Link>
              </Heading>
            </Box>

            <Flex justifyContent="space-between">
              <Text
                as="p"
                color={theme.colors.tertiary}
                mb={0}
                className="text--small"
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

              <Link to={`/blog/${post.slug.current}`}>
                <Button bg="transparent" color="primary">
                  Read Article <Icon name="arrow" />
                </Button>
              </Link>
            </Flex>
          </Box>
        ))}
      </Flex>
    </S.Hero>
  )
}

export default Hero

// ___________________________________________________________________

const defaultProps = {}

Hero.defaultProps = defaultProps
