// GraphQL queries

import { gql } from 'apollo-boost'

// Posts
// ___________________________________________________________________



// Comments
// ___________________________________________________________________

const DELETE_COMMENT_BY_ID = gql`
  mutation($commentId: String!) {
    deleteCommentById(commentId: $commentId) {
      commentId
    }
  }
`
