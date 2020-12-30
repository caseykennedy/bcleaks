// Community Page:

// ___________________________________________________________________

import React from 'react'

// Theme
import * as S from './styles.scss'
import theme from '../../gatsby-plugin-theme-ui'
import { Box, Flex, Heading, Text } from '../../components/ui'

// Components
import ImgMatch from '../../components/ImgMatch'
import Section from '../../components/Section'

// ___________________________________________________________________

const CommunityPage = () => {
  return (
    <S.CommunityPage>
      <Section>
        <Heading as="h2">Community</Heading>
        <Text as="p">This page is in development.</Text>
      </Section>
    </S.CommunityPage>
  )
}

export default CommunityPage
