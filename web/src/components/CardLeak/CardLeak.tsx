// Card Leak

// ___________________________________________________________________

import * as React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image/withIEPolyfill'

import * as S from './styles.scss'
import theme from '../../gatsby-plugin-theme-ui'
import { Box, Flex, Heading, Text } from '../ui'

import Icon from '../Icons'

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
        <Flex className="content">
          <Box>
            <Text as="p" color="gray" fontFamily="sans" className="text--small">
              <Box as="span" className="category">
                c/BITCOIN
              </Box>{' '}
              Posted 8 hrs ago by{' '}
              <Box as="span" className="text--underline">
                u/cryptoproject
              </Box>
            </Text>
            <Heading
              className={`title  ${!small ? `text--md` : `title--small`}`}
            >
              {post.title && post.title}
            </Heading>
            <Link to={`#`}>
              <Text color="primary" fontSize={[0, 1]}>youtu.be/p0mNQx...</Text>
            </Link>
          </Box>

          <Flex className="utilities">
            <Flex className="vote">
              <Flex className="vote-arrow  vote-arrow--up">
                <Icon name="arrow" />
              </Flex>

              <Flex className="vote-count">137</Flex>

              <Flex className="vote-arrow  vote-arrow--down">
                <Icon name="arrow" />
              </Flex>
            </Flex>

            <Flex mr={5} className="comments">
              comments
            </Flex>

            <Flex className="share">share</Flex>
          </Flex>
        </Flex>

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
