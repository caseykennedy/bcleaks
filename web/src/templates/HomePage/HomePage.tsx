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
      <Section bg="quaternary" color="black" border={true}>
        <Text as="p" textAlign="center">Ad space</Text>
      </Section>
      <Articles />
      <Community />
    </S.HomePage>
  )
}

export default HomePage
