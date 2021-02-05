// Featured Section:

// ___________________________________________________________________

import React from 'react'

// Theme + ui
import * as S from './styles.scss'
import theme from '../../gatsby-plugin-theme-ui'
import { Flex } from '../ui'

// Components
import CardSlider from '../CardSlider'
import CardLeak from '../CardPost'

// Data
import usePost from '../../hooks/usePost'

// ___________________________________________________________________

const TopArticles = () => {
  const posts = usePost()
  return (
    <S.TopArticles>
      <CardSlider pagination={true} slidesPerView={3}>
        {posts.slice(0, 4).map(({ node: post }, idx) => (
          <Flex key={idx}>
            <CardLeak post={post} small={true} />
          </Flex>
        ))}
      </CardSlider>
    </S.TopArticles>
  )
}

export default TopArticles
