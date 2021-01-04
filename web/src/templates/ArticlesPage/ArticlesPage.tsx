// Videos Page:

// ___________________________________________________________________

import React from 'react'

// Theme
import * as S from './styles.scss'
import theme from '../../gatsby-plugin-theme-ui'
import { Box, Flex, Heading, Text } from '../../components/ui'

import { Grid } from 'theme-ui'

// Components
import Section from '../../components/Section'
import CardLeak from '../../components/CardLeak'
import CardSlider from '../../components/CardSlider'
import FeaturedArticles from '../../components/FeaturedArticles'
import TopArticles from '../../components/TopArticles'

import Hero from './Hero'

// Data
import usePost from '../../hooks/usePost'

// ___________________________________________________________________

const ArticlesPage = () => {
  const posts = usePost()
  return (
    <S.ArticlesPage>
      <S.PageTitle px={theme.gutter.axis} py={4}>
        <Heading
          as="h3"
          color="tertiary"
          fontFamily="display"
          mb={0}
          className="text--uppercase"
        >
          Articles
        </Heading>
      </S.PageTitle>

      <Hero />

      <Section bg="black" border={true} overflow="hidden">
        <Heading
          as="h4"
          color="tertiary"
          fontFamily="display"
          className="text--uppercase"
        >
          Latest Articles
        </Heading>
        <TopArticles />
      </Section>

      <S.FilterNav px={theme.gutter.axis}>
        <Box className="inner">
          {data.map((filter, idx) => (
            <Box mr={6} className="criteria" key={idx}>
              {filter.criteria}
            </Box>
          ))}
        </Box>
      </S.FilterNav>

      <Section>
        <Box width={[1, 1, 6 / 8]}>
          {posts.map(({ node: post }, idx) => (
            <CardLeak aspectRatio={3 / 2} post={post} inline={true} key={idx} />
          ))}
        </Box>
      </Section>
    </S.ArticlesPage>
  )
}

export default ArticlesPage

const data = [
  {
    criteria: 'All'
  },
  {
    criteria: 'blockchain'
  },
  {
    criteria: 'crypto'
  },
  {
    criteria: 'bitcoin'
  },
  {
    criteria: 'ethereum'
  },
  {
    criteria: 'opinion'
  },
  {
    criteria: 'markets'
  },
  {
    criteria: 'tech'
  }
]
