// Videos Page:

// ___________________________________________________________________

import React, { useState } from 'react'

// Theme
import * as S from './styles.scss'
import theme from '../../gatsby-plugin-theme-ui'
import { Box, Flex } from '../../components/ui'
import { Grid } from 'theme-ui'

// Components
import Section from '../../components/Section'
import CardLeak from '../../components/CardPost'
import CardSlider from '../../components/CardSlider'
import FilterNav from '../../components/FilterNav'

// Data
import useVideo from '../../hooks/useVideo'

// ___________________________________________________________________

const VideosPage = () => {
  const videos = useVideo()

  // Filter posts
  const [items, setItems] = useState(videos)
  // const [pillActive, setPillActive] = useState(false)
  const setFilteredItems = (category: string) => {
    setItems(
      videos.filter(item => {
        if (item.node.categories[0].title.includes(category)) {
          return item
        }
        if (
          item.node.categories[1] &&
          item.node.categories[1].title.includes(category)
        ) {
          return item
        }
      })
    )
  }
  // Reset / Show all
  const resetFilteredItems = () => {
    setItems(videos)
  }
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

      <FilterNav
        setFilteredItems={setFilteredItems}
        resetFilteredItems={resetFilteredItems}
      />

      <Section>
        <Grid columns={[1, 2, 3]} gap={theme.space[4]}>
          {items.map(({ node: post }, idx) => (
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
