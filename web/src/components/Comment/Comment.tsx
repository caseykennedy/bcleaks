// Comment Component:

// ___________________________________________________________________

import React from 'react'
import { formatDistanceToNowStrict } from 'date-fns'

// Theme + ui
import * as S from './styles.scss'
import theme from '../../gatsby-plugin-theme-ui'
import { Box, Flex, Text, Heading, Button, Link, Divider } from 'theme-ui'

// ___________________________________________________________________

type Props = {
  commentId: string
  slug: string
  date: string
  name: string
  comment: string
}

const QUOTE_ICON_SIZE = 32

const Comment: React.FC<Props> = ({ commentId, slug, date, name, comment }) => {
  return (
    <Box sx={{ border: theme.border, mb: 4, p: 4 }}>
      <Box>
        <Text
          as="p"
          sx={{ color: 'gray', lineHeight: 1.15 }}
          className="text--sm"
        >
          <Box as="span" sx={{ color: 'text' }}>
            {name}
          </Box>{' '}
          •{' '}
          {formatDistanceToNowStrict(new Date(date), {
            addSuffix: true
          })}
        </Text>
      </Box>

      <Flex pt={[5, 6]}>
        <Text
          as="p"
          sx={{
            fontSize: `calc(${theme.fontSizes[2]} * 1.15)`,
            lineHeight: 1.15
          }}
        >
          {comment}
        </Text>
      </Flex>
    </Box>
  )
}

export default Comment
