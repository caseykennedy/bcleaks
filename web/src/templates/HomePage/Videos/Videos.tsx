// Videos Section:

// ___________________________________________________________________

import React from 'react'
import { Link } from 'gatsby'

// Theme + ui
import * as S from './styles.scss'
import theme from '../../../gatsby-plugin-theme-ui'
import { Box, Flex, Heading } from '../../../components/ui'

// Components
import CardSlider from '../../../components/CardSlider'
import CardLeak from '../../../components/CardLeak'

// Data
import usePost from '../../../hooks/usePost'

// ___________________________________________________________________

const Videos = () => {
  const posts = usePost()
  return (
    <S.Videos bg="quinary" border={false} overflow="hidden">
      <Flex className="videos__header" justifyContent="space-between">
        <Heading fontFamily="display" className="text--lg  text--uppercase">
          Videos
        </Heading>

        <Link to={`/videos`}>View All</Link>
      </Flex>

      <Box className="videos__posts">
        <CardSlider pagination={true} slidesPerView={3}>
          {posts.map(({ node: post }, idx) => (
            <Box key={idx}>
              <CardLeak post={post} video={true} />
            </Box>
          ))}
        </CardSlider>
      </Box>
    </S.Videos>
  )
}

export default Videos
