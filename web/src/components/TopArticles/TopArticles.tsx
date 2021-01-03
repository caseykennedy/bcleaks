// Featured Section:

// ___________________________________________________________________

import React from 'react'

// Theme + ui
import * as S from './styles.scss'
import theme from '../../gatsby-plugin-theme-ui'
import { Box } from '../ui'

// Components
import CardSlider from '../CardSlider'
import CardLeak from '../CardLeak'

// Data
import usePost from '../../hooks/usePost'

// ___________________________________________________________________

const TopArticles = () => {
  const posts = usePost()
  return (
    <S.TopArticles>
      <CardSlider pagination={true} slidesPerView={3}>
        {posts.map(({ node: post }, idx) => (
          <Box key={idx}>
            <CardLeak post={post} video={true} />
          </Box>
        ))}
      </CardSlider>
    </S.TopArticles>
  )
}

export default TopArticles
