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
import FeaturedArticles from '../../../components/FeaturedArticles'
import CardPost from '../../../components/CardPost'
import Section from '../../../components/Section'

// Data
import usePost from '../../../hooks/usePost'

// ___________________________________________________________________

const Articles = () => {
  const posts = usePost()
  const heroPost = posts[0].node
  return (
    <S.Articles>
      <Box width={1} overflow="hidden">
        <FeaturedArticles bg={theme.colors.black} post={heroPost} />
      </Box>

      <Section border={true}>
        <Flex
          justifyContent="space-between"
          width={1}
          className="articles__header"
        >
          <Heading fontFamily="display" className="text--lg  text--uppercase">
            Articles
          </Heading>
          <Link to={`/articles`}>View All</Link>
        </Flex>

        <Box width={[1, 1, 6 / 8]} className="articles__main">
          <Box>
            {posts.slice(1, 7).map(({ node: post }, idx) => (
              <CardPost
                aspectRatio={4 / 3}
                post={post}
                inline={true}
                key={idx}
              />
            ))}
          </Box>
        </Box>
      </Section>
    </S.Articles>
  )
}

export default Articles
