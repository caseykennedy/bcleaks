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
import CatNav from '../../components/CatNav'

// Data
import usePost from '../../hooks/usePost'

// ___________________________________________________________________

const ArticlesPage = () => {
  const posts = usePost()
  const heroPost = posts[0].node
  const [items, setItems] = useState(posts)
  
  return (
    <S.ArticlesPage>
      <FeaturedArticles bg={theme.colors.black} post={heroPost} />

      <CatNav postType="articles" />

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
