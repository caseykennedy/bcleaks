// Videos Section:

// ___________________________________________________________________

import React from 'react'
import { Link } from 'gatsby'

// Libraries
import Swiper from 'react-id-swiper'

import * as S from './styles.scss'
import { Box, Flex, Heading, Text, AnimatedBox } from '../../../components/ui'
import theme from '../../../gatsby-plugin-theme-ui'

// ___________________________________________________________________

const ReviewSlider: React.FC = ({ children }) => {
  const params = {
    // loop: true,
    // centeredSlides: true,
    // effect: 'fade',
    slidesPerView: 1,
    spaceBetween: 32,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      renderBullet: (index: any, className: string) => {
        return `<span class="${className}">${index + 1}</span>`
      }
    },
    breakpoints: {
      1024: {
        slidesPerView: 3,
        spaceBetween: 32
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 32,
        grabCursor: true
      },
      640: {
        slidesPerView: 1,
        spaceBetween: 32,
        grabCursor: true
      },
      320: {
        slidesPerView: 1,
        spaceBetween: 32,
        grabCursor: true
      }
    }
  }
  return <Swiper {...params}>{children}</Swiper>
}

const Videos = () => {
  return (
    <S.Videos bg="quinary" overflow="hidden">
      <Flex className="videos__header" justifyContent="space-between">
        <Heading fontFamily="display" className="text--lg">
          Videos
        </Heading>
        <Link to="/">View All</Link>
      </Flex>
      <Box className="videos__posts">
        <ReviewSlider>
          {data.map((post, idx) => (
            <Box className="post" key={idx}>
              <Box className="video" />
              <Text as="p">
                <Link to={`/`}>{post.title}</Link>
              </Text>
              <Text as="p" color={theme.colors.tertiary} className="meta  t--small">
                {post.date}
                <br />
                {post.author}
              </Text>
            </Box>
          ))}
        </ReviewSlider>
      </Box>
    </S.Videos>
  )
}

export default Videos

const data = [
  {
    date: 'OCT 1, 2020 at 8:43 AM',
    author: 'Chris Jones',
    category: 'crypto',
    title: "Let's raise the quality of the information: IQ"
  },
  {
    date: 'SEP 29, 2020 at 3:13 PM',
    author: 'Taylor Johnson',
    category: 'block chain',
    title: 'Taking a monkey wrench to the game'
  },
  {
    date: 'OCT 1, 2020 at 8:43 AM',
    author: 'Chris Jones',
    category: 'crypto',
    title: "Let's raise the quality of the information: IQ"
  },
  {
    date: 'SEP 29, 2020 at 3:13 PM',
    author: 'Taylor Johnson',
    category: 'block chain',
    title: 'Taking a monkey wrench to the game'
  },
  {
    date: 'SEP 29, 2020 at 3:13 PM',
    author: 'Taylor Johnson',
    category: 'block chain',
    title: 'Taking a monkey wrench to the game'
  },
  {
    date: 'SEP 29, 2020 at 3:13 PM',
    author: 'Taylor Johnson',
    category: 'block chain',
    title: 'Taking a monkey wrench to the game'
  }
]
