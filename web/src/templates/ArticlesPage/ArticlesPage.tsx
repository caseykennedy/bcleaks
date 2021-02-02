// Videos Page:

// ___________________________________________________________________

import React, { useState } from 'react'

// Theme
import * as S from './styles.scss'
import theme from '../../gatsby-plugin-theme-ui'
import { Box, Flex, Heading, Text } from '../../components/ui'

import { Grid } from 'theme-ui'

// Components
import Section from '../../components/Section'
import Pill from '../../components/ui/Pill'
import CardLeak from '../../components/CardLeak'
import FeaturedArticles from '../../components/FeaturedArticles'
import TopArticles from '../../components/TopArticles'

import Hero from './Hero'

// Data
import usePost from '../../hooks/usePost'

// ___________________________________________________________________

const Filter = () => {
  const posts = usePost()
  const categories = [{ title: 'News' }, { title: 'Press' }]

  // Filter posts
  const [items, setItems] = useState(posts)
  const [pillActive, setPillActive] = useState(false)
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
    <S.Filter id="product-grid">
      <S.FilterNav>
        <Pill
          bg={theme.colors.lightgray}
          color={theme.colors.text}
          onClick={resetFilteredItems}
        >
          All
        </Pill>

        {categories.map((cat, idx) => (
          <div onClick={() => setFilteredItems(cat.title)} key={idx}>
            <Pill bg={theme.colors.lightgray} color={theme.colors.text}>
              {cat.title}
            </Pill>
          </div>
        ))}
      </S.FilterNav>

      <Box width={[1, 1, 6 / 8]}>
        {posts.map(({ node: post }, idx) => (
          <CardLeak aspectRatio={4 / 3} post={post} inline={true} key={idx} />
        ))}
      </Box>
    </S.Filter>
  )
}

const ArticlesPage = () => {
  const posts = usePost()
  console.log(posts)

  // Filter posts
  const [items, setItems] = useState(posts)
  const [pillActive, setPillActive] = useState(false)
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

      <S.FilterNav p={theme.gutter.axis}>
        <Box className="inner">
          <Box mr={6} className="criteria" onClick={resetFilteredItems}>
            All
          </Box>
          {criteria.map((filter, idx) => (
            <Box
              mr={6}
              className="criteria"
              onClick={() => setFilteredItems(filter.criteria)}
              key={idx}
            >
              {filter.criteria}
            </Box>
          ))}
        </Box>
      </S.FilterNav>

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
            <CardLeak aspectRatio={4 / 3} post={post} inline={true} key={idx} />
          ))}
        </Box>
      </Section>
    </S.ArticlesPage>
  )
}

export default ArticlesPage

// ___________________________________________________________________

const criteria = [
  {
    criteria: 'Altcoin'
  },
  {
    criteria: 'Bitcoin'
  },
  {
    criteria: 'Crypto Picks'
  },
  {
    criteria: 'DeFi'
  },
  {
    criteria: 'Ethereum'
  },
  {
    criteria: 'Investigations'
  }
]
