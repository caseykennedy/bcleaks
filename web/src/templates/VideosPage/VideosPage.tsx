// Videos Page:

// ___________________________________________________________________

import React from 'react'

// Theme
import * as S from './styles.scss'
import theme from '../../gatsby-plugin-theme-ui'
import { Box, Flex, Heading, Text } from '../../components/ui'

// Components
import Section from '../../components/Section'
import CardLeak from '../../components/CardLeak'
import CardSlider from '../../components/CardSlider'
import Featured from '../../components/Featured'

// Data
import usePost from '../../hooks/usePost'

// ___________________________________________________________________

const VideosPage = () => {
  const posts = usePost()
  return (
    <S.VideosPage>
      <S.PageTitle px={theme.gutter.axis} py={4}>
        <Heading
          as="h4"
          fontFamily="display"
          mb={0}
          className="text--uppercase"
        >
          Videos
        </Heading>
      </S.PageTitle>

      <Section border={true} overflow="hidden">
        <CardSlider pagination={true} slidesPerView={3}>
          {posts.map(({ node: post }, idx) => (
            <Box key={idx}>
              <CardLeak post={post} key={idx} />
            </Box>
          ))}
        </CardSlider>
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
            <CardLeak post={post} key={idx} />
          ))}
        </S.AllPosts>
      </Section>
    </S.VideosPage>
  )
}

export default VideosPage

// ___________________________________________________________________

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
