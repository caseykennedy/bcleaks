// GraphQL queries

import { gql } from 'apollo-boost'

// Posts
// ___________________________________________________________________

export const GET_POSTS_BY_AUTHOR = gql`
  query($author: String!) {
    getPostsByAuthor(author: $author) {
      postId
      author
      category
      createdOn
      linkUrl
      postType
      slug
      text
      title
      voters
      votes
    }
  }
`

export const GET_POSTS_BY_SLUG = gql`
  query($slug: String!) {
    getPostsBySlug(slug: $slug) {
      postId
      author
      category
      createdOn
      linkUrl
      postType
      slug
      text
      title
      voters
      votes
    }
  }
`

// Comments
// ___________________________________________________________________

export const GET_ALL_COMMENTS = gql`
  query {
    getAllComments {
      commentId
      isApproved
      slug
      date
      name
      comment
    }
  }
`

export const GET_COMMENTS_BY_SLUG = gql`
  query($slug: String!) {
    getCommentsBySlug(slug: $slug) {
      commentId
      isApproved
      slug
      date
      name
      comment
    }
  }
`
