// Videos Section:

// ___________________________________________________________________

import React from 'react'
import { Link } from 'gatsby'

// Theme + ui
import * as S from './styles.scss'
import theme from '../../../gatsby-plugin-theme-ui'
import { Box, Flex, Heading } from '../../../components/ui'
import { Grid } from 'theme-ui'

// Components
import CardSlider from '../../../components/CardSlider'
import CardLeak from '../../../components/CardPost'

// Data
import useVideo from '../../../hooks/useVideo'

// ___________________________________________________________________

const Videos = () => {
  const videos = useVideo()
  const filteredVideos = videos.filter(v => v.node.videoUrl)
  return (
    <S.Videos bg="background" overflow="hidden">
      <Flex className="videos__header">
        <Heading fontFamily="display" className="text--lg  text--uppercase">
          Videos
        </Heading>

        <Link to={`/videos`}>View All</Link>
      </Flex>

      <Box className="videos__posts">
        <CardSlider pagination={false} slidesPerView={3}>
          {filteredVideos.slice(0, 3).map(({ node: post }, idx) => (
            <Flex key={idx}>
              <CardLeak post={post} video={true} small={true} />
            </Flex>
          ))}
        </CardSlider>
      </Box>
    </S.Videos>
  )
}

export default Videos
