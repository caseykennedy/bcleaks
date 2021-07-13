// GraphQL queries

import { gql } from 'apollo-boost'

// Posts
// ___________________________________________________________________

// Comments
// ___________________________________________________________________

export const CREATE_COMMENT = gql`
  mutation($slug: String!, $name: String!, $comment: String!) {
    createComment(slug: $slug, name: $name, comment: $comment) {
      commentId
    }
  }
`

export const DELETE_COMMENT_BY_ID = gql`
  mutation($commentId: String!) {
    deleteCommentById(commentId: $commentId) {
      commentId
    }
  }
`
