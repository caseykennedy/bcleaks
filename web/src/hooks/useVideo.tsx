// useVideo hook
// Hook for querying data

// ___________________________________________________________________

import { graphql, useStaticQuery } from 'gatsby'

// ___________________________________________________________________

const useVideo = () => {
  const data = useStaticQuery<VideoShape>(graphql`
    query VideoQuery {
      videos: allSanityVideo(sort: { order: DESC, fields: publishedAt }) {
        edges {
          node {
            videoUrl
            title
            _rawBody
            _id
            publishedAt(formatString: "MMM. DD, YYYY | hh:mma")
            slug {
              current
            }
            tags {
              tag
            }
            figure {
              alt
              asset {
                fluid(maxWidth: 800) {
                  srcWebp
                  srcSetWebp
                  srcSet
                  src
                  sizes
                  base64
                  aspectRatio
                }
              }
            }
            categories {
              title
            }
            authors {
              name
              role
              avatar {
                asset {
                  fluid(maxWidth: 600) {
                    aspectRatio
                    base64
                    sizes
                    src
                    srcSet
                    srcSetWebp
                    srcWebp
                  }
                }
              }
            }
          }
          previous {
            slug {
              current
            }
            title
          }
          next {
            slug {
              current
            }
            title
          }
        }
      }
    }
  `)

  return data.videos.edges
}

export default useVideo
