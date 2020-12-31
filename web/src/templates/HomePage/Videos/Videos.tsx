// Videos Section:

// ___________________________________________________________________

import React from 'react'
import Img from 'gatsby-image/withIEPolyfill'
import { Link } from 'gatsby'

// Libraries
import Swiper from 'react-id-swiper'

// Data
import usePost from '../../../hooks/usePost'

// Theme + ui
import * as S from './styles.scss'
import theme from '../../../gatsby-plugin-theme-ui'
import { Box, Flex, Heading, Text, AnimatedBox } from '../../../components/ui'
import Pill from '../../../components/ui/Pill'

// ___________________________________________________________________

const ReviewSlider: React.FC = ({ children }) => {
  const params = {
    // loop: true,
    // centeredSlides: true,
    // effect: 'fade',
    slidesPerView: 1,
    spaceBetween: 8,
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
        spaceBetween: 24
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 16,
        grabCursor: true
      },
      640: {
        slidesPerView: 1,
        spaceBetween: 8,
        grabCursor: true
      },
      320: {
        slidesPerView: 1,
        spaceBetween: 8,
        grabCursor: true
      }
    }
  }
  return <Swiper {...params}>{children}</Swiper>
}

const Videos = () => {
  const posts = usePost()
  return (
    <S.Videos bg="quinary" border={true} overflow="hidden">
      <Flex className="videos__header" justifyContent="space-between">
        <Heading fontFamily="display" className="text--lg  text--uppercase">
          Videos
        </Heading>

        <Link to="/">View All</Link>
      </Flex>

      <Box className="videos__posts">
        <ReviewSlider>
          {posts.map(({ node: post }, idx) => (
            <Box className="post" key={idx}>
              {post.figure && (
                <Link to={`/blog/${post.slug.current}`}>
                  <Box className="bg">
                    <Box className="figure">
                      <Img
                        fluid={post.figure.asset.fluid}
                        objectFit="cover"
                        objectPosition="50% 50%"
                        alt={post.title}
                      />
                    </Box>
                  </Box>
                </Link>
              )}

              <Flex mb={4}>
                <Pill>
                  <span>#featured</span>
                </Pill>
                <Pill>
                  <span>#stateMachine</span>
                </Pill>
                <Pill>
                  <span>#ETH</span>
                </Pill>
              </Flex>

              <Heading as="h4">
                <Link to={`/blog/${post.slug.current}`}>{post.title}</Link>
              </Heading>

              <Text
                as="p"
                color={theme.colors.tertiary}
                className="meta  t--small"
              >
                <Text as="span" color="white" mb={0}>
                  {post.publishedAt}
                </Text>
                by {post.authors && post.authors.name} in{' '}
                <Link to={``}>
                  <Box as="span" color="primary">
                    {post.categories && post.categories[0].title}
                  </Box>
                </Link>
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
