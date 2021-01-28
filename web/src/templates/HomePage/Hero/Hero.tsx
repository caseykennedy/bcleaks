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
    <S.Hero bg="black" pt={[6, 7, 8]}>
      <div className="hero__inner">
        {posts.slice(3, 4).map(({ node: post }, idx) => (
          <Box width={[1]} key={idx}>
            <Box width={[1, 2 / 3]}>
              <Heading as="h1" className="text--uppercase">
                <Link to={`/articles/${post.slug.current}`}>{post.title}</Link>
              </Heading>
            </Box>

            {post.tags && (
              <Flex mb={4} width={1}>
                {post.tags.slice(0, 2).map((item, idx) => (
                  <Pill key={idx}>
                    <span>#{item.tag}</span>
                  </Pill>
                ))}
              </Flex>
            )}

            <Flex justifyContent="space-between" flexWrap="wrap">
              <Box mb={[6, 0]}>
                <PostMeta
                  authors={post.authors}
                  categories={post.categories}
                  publishedAt={post.publishedAt}
                />
              </Box>

              <Link to={`/articles/${post.slug.current}`}>
                <Button bg="transparent" color={theme.colors.primary}>
                  <Icon name="arrow" /> Read Article
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
