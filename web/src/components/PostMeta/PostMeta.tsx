// Post Meta

// ___________________________________________________________________

import * as React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

// import * as S from './styles.scss'
import theme from '../../gatsby-plugin-theme-ui'
import { Box, Text } from '../ui'

// ___________________________________________________________________

type MetaShape = {
  authors: {
    name: string
  }
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
  if (categories[0].title === 'Crypto') {
    pillColor = theme.colors.primary
  } else if (categories[0].title === 'Bitcoin') {
    pillColor = theme.colors.bitcoin
  } else if (categories[0].title === 'Videos') {
    pillColor = theme.colors.purple
  } else {
    pillColor = theme.colors.tertiary
  }

  return (
    <Meta as="p" className="text--small">
      <Text as="span" color="white" mb={0}>
        {publishedAt}
      </Text>
      by {authors && authors.name} in{' '}
      <Link to={``}>
        <Box as="span" bg={pillColor} className="category">
          {categories && categories[0].title}
        </Box>
      </Link>
    </Meta>
  )
}

export default PostMeta

// ___________________________________________________________________

PostMeta.defaultProps = {}

const Meta = styled(Text)`
  color: ${theme.colors.tertiary};
  margin-bottom: 0;

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
