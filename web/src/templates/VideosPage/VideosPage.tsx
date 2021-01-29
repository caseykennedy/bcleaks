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
import Featured from '../../components/FeaturedArticles'

// Data
import usePost from '../../hooks/usePost'
import useVideo from '../../hooks/useVideo'

// ___________________________________________________________________

const VideosPage = () => {
  const posts = usePost()
  const videos = useVideo()
  return (
    <S.VideosPage>


      <Section bg="black" border={true} overflow="hidden">
        <CardSlider pagination={false} slidesPerView={2}>
          {videos.slice(0, 1).map(({ node: post }, idx) => (
            <Flex key={idx}>
              <CardLeak post={post} video={true} key={idx} />
            </Flex>
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
        <Grid columns={[1, 2, 3]} gap={theme.space[4]}>
          {videos.map(({ node: post }, idx) => (
            <Flex key={idx}>
              <CardLeak post={post} video={true} small={true} />
            </Flex>
          ))}
        </Grid>
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
