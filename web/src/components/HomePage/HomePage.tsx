// HomePage:

// ___________________________________________________________________

import React from 'react'

// Theme + Styles
import theme from '../../../config/theme'
import * as S from './styles.scss'

// UI
import { Box, Flex, Heading, Text } from '../ui'

// Sections
import Hero from './Hero'
import Articles from './Articles'
import Community from './Community'

// import Hero from './Hero'

// ___________________________________________________________________

const HomePage: React.FC = () => {
  // const data = useHomePage()
  return (
    <S.HomePage>
      <Hero />
      <Articles />
      <Community />
    </S.HomePage>
  )
}

export default HomePage
