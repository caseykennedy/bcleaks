// useFaunaDb hook
// Hook for querying data from FaunaDB

// ___________________________________________________________________

import { graphql, useStaticQuery } from 'gatsby'

// ___________________________________________________________________

const useFaunaDb = () => {
  const data = useStaticQuery<FaunaDbPostShape>(graphql`
    query FaunaDbPostQuery {
      posts: allFaunaDb(sort: { order: DESC, fields: createdOn }) {
        edges {
          node {
            _id
            assetUrl
            author
            body
            category
            createdOn
            postType
            title
            votes
          }
        }
      }
    }
  `)

  return data.posts.edges
}

export default useFaunaDb
