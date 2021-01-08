// Hero Component:

// ___________________________________________________________________

import React from 'react'
import { Link } from 'gatsby'

// Theme + ui
import * as S from './styles.scss'
import theme from '../../../gatsby-plugin-theme-ui'
import { Box, Flex, Heading, Text, AnimatedBox } from '../../../components/ui'

// Components
import Button from '../../../components/ui/Button'
import Pill from '../../../components/ui/Pill'
import Icon from '../../../components/Icons'
import PostMeta from '../../../components/PostMeta'

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
                <Link to={`/articles/${post.slug.current}`}>{post.title}</Link>
              </Heading>
            </Box>

            <Flex alignItems="center" justifyContent="space-between">
              <PostMeta
                authors={post.authors}
                categories={post.categories}
                publishedAt={post.publishedAt}
              />

              <Link to={`/articles/${post.slug.current}`} className="button">
                <Icon name="carat" />
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
