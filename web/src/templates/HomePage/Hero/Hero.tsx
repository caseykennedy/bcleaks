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
    <S.Hero bg="black" pt={[6, 7, 8]}>
      <div className="hero__inner">
        {posts.slice(3, 4).map(({ node: post }, idx) => (
          <Box width={[1]} key={idx}>
            <Box width={[1, 2 / 3]}>
              <Heading as="h1" className="text--uppercase">
                <Link to={`/blog/${post.slug.current}`}>{post.title}</Link>
              </Heading>
            </Box>

            {post.tags && (
              <Flex mb={4} width={1}>
                {post.tags.map((item, idx) => (
                  <Pill key={idx}>
                    <span>#{item.tag}</span>
                  </Pill>
                ))}
              </Flex>
            )}

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
      </div>
    </S.Hero>
  )
}

export default Hero

// ___________________________________________________________________

const defaultProps = {}

Hero.defaultProps = defaultProps
