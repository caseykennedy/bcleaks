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
        slidesPerView: 3,
        spaceBetween: 32
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

const Featured = () => {
  const posts = usePost()
  return (
    <S.Featured>
      <Box className="videos__posts">
        <FeaturedSlider>
          {posts.map(({ node: post }, idx) => (
            <Box className="post" key={idx}>
              {post.figure && (
                <Box className="figure">
                  <Img
                    fluid={post.figure.asset.fluid}
                    objectFit="cover"
                    objectPosition="50% 50%"
                    alt={post.title}
                  />
                </Box>
              )}
              <Link to={`/blog/${post.slug.current}`}>
                  <Heading as="h4">{post.title}</Heading>
                </Link>
              <Text
                as="p"
                color={theme.colors.tertiary}
                className="meta  t--small"
              >
                {post.publishedAt}
                <br />
                {post.authors && post.authors.name} in{' '}
                {post.categories && post.categories[0].title}
              </Text>
            </Box>
          ))}
        </FeaturedSlider>
      </Box>
    </S.Featured>
  )
}

export default Featured
