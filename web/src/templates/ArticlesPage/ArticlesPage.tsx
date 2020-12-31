// Videos Page:

// ___________________________________________________________________

import React from 'react'

// Theme
import * as S from './styles.scss'
import theme from '../../gatsby-plugin-theme-ui'
import { Heading, Text } from '../../components/ui'

// Components
import Section from '../../components/Section'
import CardLeak from '../../components/CardLeak'

// Data
import usePost from '../../hooks/usePost'

// ___________________________________________________________________

const ArticlesPage = () => {
  const posts = usePost()
  return (
    <S.ArticlesPage>
      <Section>
        <Heading as="h2">Articles</Heading>
        <Text as="p">This page is in development.</Text>
      </Section>
      <Section>
        {posts.map(({ node: post }, idx) => (
          <CardLeak post={post} key={idx} />
        ))}
      </Section>
    </S.ArticlesPage>
  )
}

export default ArticlesPage
