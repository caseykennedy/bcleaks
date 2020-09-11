// HomePage:

// ___________________________________________________________________

import React from 'react'

// Theme + Styles
import theme from '../../../config/theme'
import * as S from './styles.scss'

// UI
import { Box, Flex, Heading, Text } from '../ui'
import Divider from '../ui/Divider'

// Components
import ImgMatch from '../ImgMatch'
import Section from '../Section'

// Sections

// import Hero from './Hero'

// ___________________________________________________________________

const HomePage: React.FC = () => {
  // const data = useHomePage()
  return (
    <S.HomePage>
      <Section>
        <Heading as="h1">Crypto</Heading>
      </Section>
    </S.HomePage>
  )
}

export default HomePage
