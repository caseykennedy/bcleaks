// Featured Section:

// ___________________________________________________________________

import React from 'react'
import Img from 'gatsby-image/withIEPolyfill'
import { Link } from 'gatsby'

// Libraries
import Swiper from 'react-id-swiper'

// Hooks
import usePost from '../../../../hooks/usePost'

import * as S from './styles.scss'
import {
  Box,
  Flex,
  Heading,
  Text,
  AnimatedBox
} from '../../../../components/ui'
import theme from '../../../../gatsby-plugin-theme-ui'

// ___________________________________________________________________

const FeaturedSlider: React.FC = ({ children }) => {
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
        slidesPerView: 1,
        spaceBetween: 32
      },
      768: {
        slidesPerView: 1,
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

const Featured = () => {
  const posts = usePost()
  return (
    <S.Featured>
      <Box className="videos__posts">
        <FeaturedSlider>
          {posts.slice(0, 3).map(({ node: post }, idx) => (
            <Box className="post" key={idx}>
              {post.figure && (
                <Link to={`/blog/${post.slug.current}`}>
                  <Box className="figure">
                    <Img
                      fluid={post.figure.asset.fluid}
                      objectFit="cover"
                      objectPosition="50% 50%"
                      alt={post.title}
                    />
                  </Box>
                </Link>
              )}

              <S.PillBox>
                <Box>
                  <span>#featured</span>
                </Box>
                <Box>
                  <span>#stateMachine</span>
                </Box>
                <Box>
                  <span>#ETH</span>
                </Box>
              </S.PillBox>

              <Link to={`/blog/${post.slug.current}`}>
                <Heading as="h3">{post.title}</Heading>
              </Link>

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
        </FeaturedSlider>
      </Box>
    </S.Featured>
  )
}

export default Featured
