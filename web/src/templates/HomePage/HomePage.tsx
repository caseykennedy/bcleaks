// HomePage:

// ___________________________________________________________________

import React from 'react'

// Theme + Styles
import theme from '../../gatsby-plugin-theme-ui'
import * as S from './styles.scss'

// UI
import { Box, Text } from '../../components/ui'

// Sections
import FeaturedArticles from '../../components/FeaturedArticles'
import Hero from './Hero'
import Videos from './Videos'
import Articles from './Articles'
import Community from './Community'

// Data
import usePost from '../../hooks/usePost'

// ___________________________________________________________________

const HomePage: React.FC = () => {
  const posts = usePost()
  const heroPost = posts.filter(post => post.node.featured)
  console.log(heroPost[0].node)
  return (
    <S.HomePage>
      <Box width={1} overflow="hidden">
        <FeaturedArticles
          bg={theme.colors.black}
          post={heroPost[0].node}
          hero={false}
        />
      </Box>
      <Videos />
      <Box
        bg="background"
        px={theme.gutter.axis}
        py={6}
        style={{ borderTop: theme.border }}
      >
        <Text as="p" color="tertiary">
          Ad space
        </Text>
      </Box>
      <Articles />
      <Box
        bg="black"
        px={theme.gutter.axis}
        py={6}
        style={{ borderTop: theme.border }}
      >
        <Text as="p" color="tertiary">
          Ad space
        </Text>
      </Box>
      <Community />
    </S.HomePage>
  )
}

export default HomePage
