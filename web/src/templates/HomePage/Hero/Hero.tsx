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
        {posts.slice(0, 1).map(({ node: post }, idx) => (
          <Box width={[1]} key={idx}>
            <Box width={[1, 2 / 3]}>
              <Heading as="h1" className="text--uppercase">
                <Link to={`/blog/${post.slug.current}`}>{post.title}</Link>
              </Heading>
            </Box>

            <Flex mb={4}>
              <Pill>
                <span>#smartContracts</span>
              </Pill>
              <Pill>
                <span>#whatsNew</span>
              </Pill>
              <Pill>
                <span>#BTC</span>
              </Pill>
            </Flex>

            <Flex justifyContent="space-between">
              <Text
                as="p"
                color={theme.colors.tertiary}
                mb={0}
                className="t--small"
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
