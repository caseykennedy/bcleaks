// HomePage:

// ___________________________________________________________________

import React, { useState } from 'react'

// Theme + UI
import { Box, Text } from '../../components/ui'
import theme from '../../gatsby-plugin-theme-ui'
import * as S from './styles.scss'

// Components
import FeaturedVideo from '../../components/FeaturedVideo'
import AdSpace from '../../components/AdSpace'

// Sections
import Videos from './Videos'
import Articles from './Articles'
import Community from './Community'

// Data
import useVideo from '../../hooks/useVideo'
import useAdvertisement from '../../hooks/useAdvertisement'

// ___________________________________________________________________

const HomePage: React.FC = () => {
  const videos = useVideo()
  const filteredVideos = videos.filter(v => v.node.videoUrl)
  const ads = useAdvertisement()
  const [ad, setAd] = useState()

  // const filteredAd = ads.filter(item => {
  //   if (item.slug.current.includes('homepage-banner')) {
  //     return item
  //   }
  //   return console.log('no ads')
  // })
  // console.log(filteredAd)
  return (
    <S.HomePage>
      <Box width={1} overflow="hidden">
        {filteredVideos.slice(2, 3).map(({ node: post }, key) => (
          <FeaturedVideo
            bg={theme.colors.black}
            post={post}
            hero={false}
            key={key}
          />
        ))}
      </Box>

      <Videos />

      <Box
        bg="background"
        px={theme.gutter.axis}
        py={6}
        style={{ borderTop: theme.border }}
      >
        <Text as="p" color="tertiary">
          Ad space
        </Text>
      </Box>

      <Articles />

      <Box
        bg="background"
        px={theme.gutter.axis}
        py={6}
        style={{ borderTop: theme.border }}
      >
        {/* <AdSpace figure={filteredAd.figure} url={} /> */}
      </Box>

      <Community />
    </S.HomePage>
  )
}

export default HomePage
