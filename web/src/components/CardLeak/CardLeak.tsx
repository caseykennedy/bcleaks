// Card Leak

// ___________________________________________________________________

import * as React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image/withIEPolyfill'

import * as S from './styles.scss'
import theme from '../../gatsby-plugin-theme-ui'
import { Box, Flex, Heading, Text } from '../ui'
import Pill from '../ui/Pill'
import PostMeta from '../PostMeta'

// ___________________________________________________________________

type Props = {
  aspectRatio?: number
  post: PostQuery
  small?: boolean
  video?: boolean
}

const CardLeak: React.FC<Props> = ({ aspectRatio, post, small, video }) => {
  const pagePrefix = !video ? `articles` : `videos`
  return (
    <Link to={`/${pagePrefix}/${post.slug.current && post.slug.current}`}>
      <S.CardLeak>
        <Box flex={1}>
          <Box className="bg">
            <Box className="figure">
              {post.figure.asset.fluid && (
                <Img
                  fluid={{
                    ...post.figure.asset.fluid,
                    aspectRatio: `${aspectRatio}`
                  }}
                  objectFit="cover"
                  objectPosition="50% 50%"
                  alt={post.title}
                />
              )}
            </Box>
          </Box>
        </Box>

        <Flex className="content">
          <Box>
            <Text as="p" color="tertiary" className="text--small">
              <Box as="span" className="category">
                c/BITCOIN
              </Box>{' '}
              Posted 8 hrs ago by u/cryptoproject
            </Text>
            <Heading
              className={`title  ${!small ? `text--md` : `title--small`}`}
            >
              {post.title && post.title}
            </Heading>
          </Box>

          <Flex className="utilities">
            <Flex className="vote">137</Flex>
            <Flex ml={4} className="comments">comments</Flex>
            <Flex ml={4} className="share">share</Flex>
          </Flex>
        </Flex>
      </S.CardLeak>
    </Link>
  )
}

export default CardLeak

// ___________________________________________________________________

CardLeak.defaultProps = {
  aspectRatio: 16 / 9,
  small: false
}
