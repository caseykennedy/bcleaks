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
    <S.Comment>
      <Flex className="meta  text--xs">
        <Flex className="meta__user">
          <Flex className="avatar" />
          <Text>{name}</Text>
        </Flex>
        <Text>
          {formatDistanceToNowStrict(new Date(date), {
            addSuffix: true
          })}
        </Text>
      </Flex>

      <Flex mt={5} p={3}>
        <Text as="p" sx={{ color: 'gray', fontSize: [2] }}>
          {comment}
        </Text>
      </Flex>
    </S.Comment>
  )
}

export default Comment
