// Article template

// ___________________________________________________________________

// Libraries
import React, { Fragment } from 'react'
import { useQuery } from '@apollo/react-hooks'

// Theme + UI
import * as S from './styles.scss'
import theme from '../../../gatsby-plugin-theme-ui'
import { Box, Flex, Divider, Text, Heading } from 'theme-ui'

// Components
import Button from '../../../components/ui/Button'
import Comment from '../../../components/Comment'
import CommentForm from '../../../components/CommentForm'
import Section from '../../../components/Section'

// Data
import { GET_COMMENTS_BY_SLUG } from '../../../gql/query'

// ___________________________________________________________________

type Props = {
  slug: string
}

type QueryData = {
  getCommentsBySlug: {
    commentId: string
    slug: string
    date: string
    name: string
    comment: string
  }[]
}

type QueryVars = {
  slug: string
}

const CommentList: React.FC<Props> = ({ slug }) => {
  const { loading, data, error } = useQuery<QueryData, QueryVars>(
    GET_COMMENTS_BY_SLUG,
    {
      variables: {
        slug: `${slug}`
      }
    }
  )
  // console.log(loading)
  // console.log(error)
  // console.log(data)

  return (
    <S.CommentList>
      <Section bg={theme.colors.black} border={true} maxWidth={theme.leakWidth}>
        <CommentForm slug={'some-test-post'} />
      </Section>

      <Section border={true} maxWidth={theme.leakWidth}>
        {loading ? (
          <Text>loading...</Text>
        ) : (
          data?.getCommentsBySlug.map((comment, index) => (
            <Box key={index}>
              <Comment {...comment} />
            </Box>
          ))
        )}
      </Section>
    </S.CommentList>
  )
}

export default CommentList
