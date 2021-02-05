// HomePage:

// ___________________________________________________________________

import React from 'react'

// Theme + Styles
import theme from '../../gatsby-plugin-theme-ui'
import * as S from './styles.scss'

// UI
import { Box, Flex, Heading, Text } from '../../components/ui'

// Sections
import Hero from './Hero'
import Videos from './Videos'
import Articles from './Articles'
import Community from './Community'

// Components
import Section from '../../components/Section'

// ___________________________________________________________________

const HomePage: React.FC = () => {
  // const data = useHomePage()
  return (
    <S.HomePage>
      <Hero />
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
