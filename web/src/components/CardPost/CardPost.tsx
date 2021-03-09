// Card Post

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
  bg?: any
  inline?: boolean
  post: PostQuery
  small?: boolean
  video?: boolean
}

const CardPost: React.FC<Props> = ({
  aspectRatio,
  bg,
  inline,
  post,
  small,
  video
}) => {
  const pagePrefix = !video ? `articles` : `videos`
  return (
    <Link to={`/${pagePrefix}/${post.slug.current && post.slug.current}`}>
      <S.CardPost inline={inline}>
        <Box width={!inline ? 1 : 1 / 3}>
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

        <Flex width={!inline ? 1 : 2 / 3} className="content">
          <Box>
            <Heading
              className={`title  ${!small ? `text--md` : `title--small`}`}
            >
              {post.title && post.title}
            </Heading>

            {post.tags && (
              <Flex className="pillbox">
                {post.tags.slice(0, 3).map((item, idx) => (
                  <Pill mb={2} key={idx}>
                    <span>#{item.tag}</span>
                  </Pill>
                ))}
              </Flex>
            )}
          </Box>

          <PostMeta
            authors={post.authors}
            categories={post.categories}
            publishedAt={post.publishedAt}
          />

          {/* {video && (
            <Box as="span" className="text--small">
              <Text as="span" color="white" mb={0}>
                {publishedAt}
              </Text>
              by {post.authors && post.authors.name} in{' '}
              <Link to={``}>
                <Box as="span" className="category">
                  {post.categories && post.categories[0].title}
                </Box>
              </Link>
            </Box>
          )} */}
        </Flex>
      </S.CardPost>
    </Link>
  )
}

export default CardPost

// ___________________________________________________________________

CardPost.defaultProps = {
  aspectRatio: 16 / 9,
  bg: theme.colors.background,
  small: false
}
