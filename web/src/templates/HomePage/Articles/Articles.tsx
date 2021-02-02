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
import Billboard from '../../../components/FeaturedArticles'
import CardLeak from '../../../components/CardLeak'
import Section from '../../../components/Section'

// Data
import usePost from '../../../hooks/usePost'

// ___________________________________________________________________

const Articles = () => {
  const posts = usePost()
  return (
    <S.Articles>
      <Section bg="" overflow="hidden">
        <Flex
          justifyContent="space-between"
          width={1}
          className="articles__header"
        >
          <Heading fontFamily="display" className="text--lg  text--uppercase">
            Articles
          </Heading>
          <Link to={`/articles`}>
            <Text color="primary">View All</Text>
          </Link>
        </Flex>
      </Section>

      <Box width={1} overflow="hidden">
        <Billboard bg={theme.colors.black} />
      </Box>

      <Section border={true}>
        <Flex
          justifyContent="space-between"
          width={1}
          className="articles__header"
        >
          <Heading
            as="h4"
            fontFamily="display"
            mb={0}
            className="text--uppercase"
          >
            Latest
          </Heading>
        </Flex>

        <Box width={[1, 1, 6 / 8]} className="articles__main">
          <Box>
            {posts.slice(1, 7).map(({ node: post }, idx) => (
              <CardLeak
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
