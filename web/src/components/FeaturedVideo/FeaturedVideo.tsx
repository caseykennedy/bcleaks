// Featured Video:

// ___________________________________________________________________

import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image/withIEPolyfill'

// Theme + ui
import * as S from './styles.scss'
import theme from '../../gatsby-plugin-theme-ui'
import { Box, Flex, Heading, Text } from 'theme-ui'

// Components
import Pill from '../ui/Pill'
import Icon from '../Icons'
import PostMeta from '../PostMeta'

// ___________________________________________________________________

type Props = {
  hero?: boolean
  post: PostQuery
} & typeof defaultProps

const defaultProps = {
  bg: theme.colors.background
}

const FeaturedVideo: React.FC<Props> = ({ bg, hero, post }) => {
  return (
    <S.FeaturedVideo bg={bg} hero={hero}>
      <Flex className="featured__inner">
        <Flex className="featured__panel">
          <Flex className="content">
            <Box sx={{ width: '100%' }}>
              <Heading as="h1" mb={1} className="text--xl  text--uppercase">
                <Link to={`/videos/${post.slug && post.slug.current}`}>
                  {post.title}
                </Link>
              </Heading>

              {post.tags && (
                <Flex sx={{ mb: 6, width: '100%' }}>
                  {post.tags.slice(0, 3).map((item, idx) => (
                    <Pill key={idx}>
                      <span>#{item.tag}</span>
                    </Pill>
                  ))}
                </Flex>
              )}
            </Box>

            <Flex
              sx={{ alignItems: 'flex-end', justifyContent: 'space-between' }}
            >
              <PostMeta
                authors={post.authors}
                categories={post.categories}
                publishedAt={post.publishedAt}
              />

              <Box className="button">
                <Icon name="carat" />
              </Box>
            </Flex>
          </Flex>
        </Flex>

        <Box className="featured__embed">
          {post.figure && (
            <Link
              to={`/videos/${post.slug && post.slug.current}`}
              className="featured__image"
            >
              <Img
                fluid={{
                  ...post.figure.asset.fluid,
                  aspectRatio: 16 / 9
                }}
                objectFit="cover"
                objectPosition="50% 50%"
                alt={post.title}
              />
            </Link>
          )}
        </Box>
      </Flex>
    </S.FeaturedVideo>
  )
}

export default FeaturedVideo

// ___________________________________________________________________

FeaturedVideo.defaultProps = defaultProps
