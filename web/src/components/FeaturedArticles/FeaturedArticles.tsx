// Featured Section:

// ___________________________________________________________________

import React from 'react'

// Theme + ui
import * as S from './styles.scss'
import theme from '../../gatsby-plugin-theme-ui'
import { Flex } from '../ui'

// Components
import CardSlider from '../CardSlider'
import CardLeak from '../CardLeak'

// Data
import usePost from '../../hooks/usePost'

// ___________________________________________________________________

const Featured = () => {
  const posts = usePost()
  return (
    <S.Featured>
      <CardSlider pagination={false} slidesPerView={2}>
        {posts.slice(2, 4).map(({ node: post }, idx) => (
          <Flex key={idx}>
            <CardLeak post={post} />
          </Flex>
        ))}
      </CardSlider>
    </S.Featured>
  )
}

export default Featured
