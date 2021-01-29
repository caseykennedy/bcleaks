// Post Meta

// ___________________________________________________________________

import * as React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import Img from 'gatsby-image/withIEPolyfill'

// import * as S from './styles.scss'
import theme from '../../gatsby-plugin-theme-ui'
import { Box, Flex, Text } from '../ui'

// ___________________________________________________________________

type MetaShape = {
  authors: PostAuthor
  categories: {
    title: string
  }[]
  publishedAt: string
}

const PostMeta: React.FC<MetaShape> = ({
  authors,
  categories,
  publishedAt
}) => {
  let pillColor
  if (categories[0].title === 'Altcoin') {
    pillColor = theme.colors.blue
  } else if (categories[0].title === 'Bitcoin') {
    pillColor = theme.colors.orange
  } else if (categories[0].title === 'Crypto Picks') {
    pillColor = theme.colors.pink
  } else if (categories[0].title === 'DeFi') {
    pillColor = theme.colors.yellow
  } else if (categories[0].title === 'Ethereum') {
    pillColor = theme.colors.purple
  } else if (categories[0].title === 'Investigations') {
    pillColor = theme.colors.gray
  } else if (categories[0].title === 'Live Streams') {
    pillColor = theme.colors.white
  } else {
    pillColor = theme.colors.tertiary
  }
  return (
    <Meta as="span" className="text--small">
      {authors && (
        <Avatar>
          <Img
            fluid={{
              ...authors.avatar.asset.fluid,
              aspectRatio: 1 / 1
            }}
            objectFit="cover"
            objectPosition="50% 50%"
            alt={authors && authors.name}
            className="author__img"
          />
        </Avatar>
      )}
      <Box>
        <Text as="span" className="date">
          {publishedAt}
        </Text>
        by <strong>{authors && authors.name}</strong> in{' '}
        <Link to={``}>
          <Box as="span" bg={pillColor} className="category">
            {categories && categories[0].title}
          </Box>
        </Link>
      </Box>
    </Meta>
  )
}

export default PostMeta

// ___________________________________________________________________

PostMeta.defaultProps = {}

const Meta = styled(Flex)`
  align-items: center;
  color: ${theme.colors.tertiary};
  margin-bottom: 0;
  width: 100%;

  .date {
    color: ${theme.colors.white};
    margin-bottom: 0;
    white-space: nowrap;
  }

  .category {
    /* background: ${theme.colors.primary}; */
    border-radius: 2px;

    color: ${theme.colors.black};
    font-size: ${theme.fontSizes[0]};
    font-weight: 500;
    text-transform: uppercase;

    padding: 0 ${theme.space[1]};

    @media ${theme.mq.tablet} {
      font-size: ${theme.fontSizes[1]};
    }
  }
`

const Avatar = styled(Flex)`
  display: block;
  margin-right: ${theme.space[4]};
  max-width: 48px;
  width: 100%;

  img {
    border: 1px solid ${theme.colors.tertiary};
    border-radius: 100rem;
  }

  @media ${theme.mq.tablet} {
  }
`
