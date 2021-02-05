// Videos Page:

// ___________________________________________________________________

import React, { useState } from 'react'

// Theme
import * as S from './styles.scss'
import theme from '../../gatsby-plugin-theme-ui'
import { Box, Flex, Heading, Text } from '../../components/ui'

// Components
import Section from '../../components/Section'
import CardPost from '../../components/CardPost'
import FeaturedArticles from '../../components/FeaturedArticles'
import FilterNav from '../../components/FilterNav'

// Data
import usePost from '../../hooks/usePost'

// ___________________________________________________________________

const ArticlesPage = () => {
  const posts = usePost()

  // Filter posts
  const [items, setItems] = useState(posts)
  // const [pillActive, setPillActive] = useState(false)
  const setFilteredItems = (category: string) => {
    setItems(
      posts.filter(item => {
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
    setItems(posts)
  }
  return (
    <S.ArticlesPage>
      <FeaturedArticles bg={theme.colors.black} />

      <FilterNav
        setFilteredItems={setFilteredItems}
        resetFilteredItems={resetFilteredItems}
      />

      <Section>
        <Flex
          justifyContent="space-between"
          width={1}
          className="articles__header"
        >
          <Heading
            as="h4"
            mb={0}
            fontFamily="display"
            className="text--uppercase"
          >
            Latest Articles
          </Heading>
        </Flex>

        <Box width={[1, 1, 6 / 8]}>
          {items.map(({ node: post }, idx) => (
            <CardPost aspectRatio={4 / 3} post={post} inline={true} key={idx} />
          ))}
        </Box>
      </Section>
    </S.ArticlesPage>
  )
}

export default ArticlesPage
