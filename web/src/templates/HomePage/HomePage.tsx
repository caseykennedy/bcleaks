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

// import Hero from './Hero'

// ___________________________________________________________________

const HomePage: React.FC = () => {
  // const data = useHomePage()
  return (
    <S.HomePage>
      <Hero />
      <Videos />
      <Articles />
      <Community />
    </S.HomePage>
  )
}

export default HomePage
