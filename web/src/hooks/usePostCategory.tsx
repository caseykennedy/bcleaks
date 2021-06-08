// usePostCategory hook

// ___________________________________________________________________

import { graphql, useStaticQuery } from 'gatsby'

// ___________________________________________________________________

type PostCategoryShape = {
  posts: {
    nodes: {
      id: string
      title: string
      description: string
      slug: {
        current: string
      }
    }[]
  }
}

const usePostCategory = () => {
  const data = useStaticQuery<PostCategoryShape>(graphql`
    query PostCategoryQuery {
      posts: allSanityPostCategory {
        nodes {
          id
          title
          description
          slug {
            current
          }
        }
      }
    }
  `)

  return data.posts.nodes
}

export default usePostCategory
