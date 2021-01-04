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
import useVideo from '../../../hooks/useVideo'

// ___________________________________________________________________

const Videos = () => {
  const videos = useVideo()
  return (
    <S.Videos bg="black" border={true} overflow="hidden">
      <Flex className="videos__header" justifyContent="space-between">
        <Heading fontFamily="display" className="text--lg  text--uppercase">
          Videos
        </Heading>

        <Link to={`/videos`}>View All</Link>
      </Flex>

      <Box className="videos__posts">
        <CardSlider pagination={true} slidesPerView={3}>
          {videos.map(({ node: post }, idx) => (
            <Box key={idx}>
              <CardLeak post={post} small={true} video={true} />
            </Box>
          ))}
        </CardSlider>
      </Box>
    </S.Videos>
  )
}

export default Videos
