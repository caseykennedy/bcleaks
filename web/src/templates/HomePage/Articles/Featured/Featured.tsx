// Featured Section:

// ___________________________________________________________________

import React from 'react'

// Theme + ui
import * as S from './styles.scss'
import theme from '../../../../gatsby-plugin-theme-ui'
import { Box } from '../../../../components/ui'

// Components
import CardSlider from '../../../../components/CardSlider'
import CardLeak from '../../../../components/CardLeak'

// Data
import usePost from '../../../../hooks/usePost'

// ___________________________________________________________________

const Featured = () => {
  const posts = usePost()
  return (
    <S.Featured>
      <CardSlider pagination={false} slidesPerView={2}>
        {posts.slice(2, 4).map(({ node: post }, idx) => (
          <Box key={idx}>
            <CardLeak post={post} />
          </Box>
        ))}
      </CardSlider>
    </S.Featured>
  )
}

export default Featured
