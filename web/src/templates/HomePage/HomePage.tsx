// HomePage:

// ___________________________________________________________________

import React from 'react'

// Theme + UI
import { Box, Text } from '../../components/ui'
import theme from '../../gatsby-plugin-theme-ui'
import * as S from './styles.scss'

// Components
import FeaturedVideo from '../../components/FeaturedVideo'

// Sections
import Videos from './Videos'
import Articles from './Articles'
import Community from './Community'

// Data
import useVideo from '../../hooks/useVideo'

// ___________________________________________________________________

const HomePage: React.FC = () => {
  const videos = useVideo()
  return (
    <S.HomePage>
      <Box width={1} overflow="hidden">
        {videos.slice(2, 3).map(({ node: post }, key) => (
          <FeaturedVideo
            bg={theme.colors.black}
            post={post}
            hero={false}
            key={key}
          />
        ))}
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
        bg="background"
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
