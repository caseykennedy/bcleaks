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
import Featured from '../../components/Featured'

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
          fontFamily="display"
          mb={0}
          className="text--uppercase"
        >
          Articles
        </Heading>
      </S.PageTitle>

      <Section bg="black" border={true} overflow="hidden">
        <Featured />
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
        <S.AllPosts>
          {posts.map(({ node: post }, idx) => (
            <CardLeak post={post} video={true} key={idx} />
          ))}
        </S.AllPosts>
      </Section>
    </S.ArticlesPage>
  )
}

export default ArticlesPage

const data = [
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
