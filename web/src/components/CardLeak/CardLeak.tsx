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

// ___________________________________________________________________

type Props = {
  bg?: any
  video?: boolean
  post: PostQuery
}

const CardLeak: React.FC<Props> = ({ bg, video, post }) => {
  return (
    <Card>
      {post.figure && (
        <Link to={`/blog/${post.slug.current}`}>
          <Box className="bg">
            <Box className="figure">
              <Img
                fluid={{ ...post.figure.asset.fluid, aspectRatio: 20 / 9 }}
                objectFit="cover"
                objectPosition="50% 50%"
                alt={post.title}
              />
            </Box>
          </Box>
        </Link>
      )}

      <Flex className="content">
        <Box>
          <Flex mb={4}>
            <Pill>
              <span>#featured</span>
            </Pill>
          </Flex>

          <Heading className={`${!video ? 'text--md' : 'title'}`}>
            <Link to={`/blog/${post.slug.current}`}>{post.title}</Link>
          </Heading>
        </Box>

        <Text as="p" color={theme.colors.tertiary} className="meta  t--small">
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
      </Flex>
    </Card>
  )
}

export default CardLeak

// ___________________________________________________________________

CardLeak.defaultProps = {
  bg: theme.colors.background
}
