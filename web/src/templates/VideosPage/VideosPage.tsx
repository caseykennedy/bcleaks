// Videos Page:

// ___________________________________________________________________

import React, { useState } from 'react'

// Theme
import * as S from './styles.scss'
import theme from '../../gatsby-plugin-theme-ui'
import { Flex } from '../../components/ui'
import { Grid } from 'theme-ui'

// Components
import Section from '../../components/Section'
import CardPost from '../../components/CardPost'
import FilterNav from '../../components/FilterNav'
import FeaturedVideo from '../../components/FeaturedVideo'

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
      <FeaturedVideo
        bg={theme.colors.black}
        post={videos[0].node}
        hero={false}
      />

      <FilterNav
        setFilteredItems={setFilteredItems}
        resetFilteredItems={resetFilteredItems}
      />

      <Section>
        <Grid columns={[1, 2, 3]} gap={theme.space[4]}>
          {items.map(({ node: post }, idx) => (
            <Flex key={idx}>
              <CardPost post={post} video={true} small={false} />
            </Flex>
          ))}
        </Grid>
      </Section>
    </S.VideosPage>
  )
}

export default VideosPage
