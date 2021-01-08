// Card Leak

// ___________________________________________________________________

import * as React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image/withIEPolyfill'

// import * as S from './styles.scss'
import theme from '../../gatsby-plugin-theme-ui'
import { Box, Flex, Heading, Text } from '../ui'
import Pill from '../ui/Pill'
import Card from '../ui/Card'
import PostMeta from '../PostMeta'

// ___________________________________________________________________

type Props = {
  aspectRatio?: number
  bg?: any
  inline?: boolean
  post: PostQuery
  small?: boolean
  video?: boolean
}

const CardLeak: React.FC<Props> = ({
  aspectRatio,
  bg,
  inline,
  post,
  small,
  video
}) => {
  const pagePrefix = !video ? `articles` : `videos`
  return (
    <Card inline={inline}>
      <Box width={!inline ? 1 : 1 / 3}>
        {post.figure && (
          <Link to={`/${pagePrefix}/${post.slug.current && post.slug.current}`}>
            <Box className="bg">
              <Box className="figure">
                <Img
                  fluid={{
                    ...post.figure.asset.fluid,
                    aspectRatio: `${aspectRatio}`
                  }}
                  objectFit="cover"
                  objectPosition="50% 50%"
                  alt={post.title}
                />
              </Box>
            </Box>
          </Link>
        )}
      </Box>

      <Flex width={!inline ? 1 : 2 / 3} className="content">
        <Box>
          {post.tags && (
            <Flex mb={4} width={1}>
              {post.tags.slice(0, 3).map((item, idx) => (
                <Pill key={idx}>
                  <span>#{item.tag}</span>
                </Pill>
              ))}
            </Flex>
          )}

          <Heading className={`title  ${!small ? `text--md` : `title--small`}`}>
            <Link
              to={`/${pagePrefix}/${post.slug.current && post.slug.current}`}
            >
              {post.title && post.title}
            </Link>
          </Heading>
        </Box>

        <PostMeta
          authors={post.authors}
          categories={post.categories}
          publishedAt={post.publishedAt}
        />
      </Flex>
    </Card>
  )
}

export default CardLeak

// ___________________________________________________________________

CardLeak.defaultProps = {
  aspectRatio: 20 / 9,
  bg: theme.colors.background,
  small: false
}
