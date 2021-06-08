// gatsby-node.js

// Log out information after a build is done
exports.onPostBuild = ({ reporter }) => {
  reporter.info(`Your Gatsby site has been built!`)
}

const { paginate } = require('gatsby-awesome-pagination')

// Category Pages
// ___________________________________________________________________
async function createCategoryPages(graphql, actions) {
  // Get Gatsby‘s method for creating new pages
  const { createPage } = actions
  const CategoryTemplate = require.resolve(
    './src/templates/ArticleCategoryPage/ArticleCategoryPage.tsx'
  )

  // Query Gatsby‘s GraphAPI for all the categories that come from Sanity
  // You can query this API on http://localhost:8000/___graphql
  const result = await graphql(`
    {
      allSanityPostCategory {
        nodes {
          id
          slug {
            current
          }
        }
      }
    }
  `)
  // If there are any errors in the query, cancel the build and tell us
  if (result.errors) throw result.errors
  // Let‘s gracefully handle if allSanityCategory is null
  const postNodes = (result.data.allSanityPostCategory || {}).nodes || []

  postNodes
    // Loop through the category nodes, but don't return anything
    .forEach(node => {
      // Desctructure the id and slug fields for each category
      const { id, slug = {} } = node
      // If there isn't a slug, we want to do nothing
      if (!slug) return
      // Make the URL with the current slug
      const path = `/articles/${slug.current}`
      // Create the page using the URL path and the template file, and pass down the id
      // that we can use to query for the right category in the template file
      createPage({
        path,
        component: CategoryTemplate,
        context: { id }
      })
    })
}

// Article Post Pages
// ___________________________________________________________________
async function createArticlePostPages(graphql, actions) {
  // Get Gatsby‘s method for creating new pages
  const { createPage } = actions
  const PostTemplate = require.resolve('./src/templates/Post/Article/index.tsx')

  // Query Gatsby‘s GraphAPI for all the categories that come from Sanity
  // You can query this API on http://localhost:8000/___graphql
  const result = await graphql(`
    {
      allSanityPost(sort: { order: DESC, fields: publishedAt }) {
        nodes {
          title
          _rawExcerpt
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
            caption
          }
          categories {
            title
          }
          authors {
            name
            role
            avatar {
              asset {
                fluid(maxWidth: 300) {
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
          }
          sources {
            title
            url
          }
        }
      }
    }
  `)
  // If there are any errors in the query, cancel the build and tell us
  if (result.errors) throw result.errors
  // Let‘s gracefully handle if allSanityCatgogy is null
  const postNodes = (result.data.allSanityPost || {}).nodes || []

  postNodes
    // Loop through the category nodes, but don't return anything
    .forEach(node => {
      // Desctructure the id and slug fields for each category
      const { id, slug = {} } = node
      // If there isn't a slug, we want to do nothing
      if (!slug) return
      // Make the URL with the current slug
      const path = `/articles/${slug.current}`
      // Create the page using the URL path and the template file, and pass down the id
      // that we can use to query for the right category in the template file
      createPage({
        path,
        component: PostTemplate,
        context: {
          post: node
        }
      })
    })
}

// Video Post Pages
// ___________________________________________________________________
async function createVideoPostPages(graphql, actions) {
  // Get Gatsby‘s method for creating new pages
  const { createPage } = actions
  const VideoTemplate = require.resolve('./src/templates/Post/Video/index.tsx')

  // Query Gatsby‘s GraphAPI for all the categories that come from Sanity
  // You can query this API on http://localhost:8000/___graphql
  const result = await graphql(`
    {
      allSanityVideo(sort: { order: DESC, fields: publishedAt }) {
        nodes {
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
            caption
          }
          categories {
            title
          }
          authors {
            name
            role
            avatar {
              asset {
                fluid(maxWidth: 300) {
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
          }
          sources {
            title
            url
          }
        }
      }
    }
  `)
  // If there are any errors in the query, cancel the build and tell us
  if (result.errors) throw result.errors
  // Let‘s gracefully handle if allSanityCatgogy is null
  const postNodes = (result.data.allSanityVideo || {}).nodes || []

  postNodes
    // Loop through the category nodes, but don't return anything
    .forEach(node => {
      // Desctructure the id and slug fields for each category
      const { id, slug = {} } = node
      // If there isn't a slug, we want to do nothing
      if (!slug) return
      // Make the URL with the current slug
      const path = `/videos/${slug.current}`
      // Create the page using the URL path and the template file, and pass down the id
      // that we can use to query for the right category in the template file
      createPage({
        path,
        component: VideoTemplate,
        context: {
          post: node
        }
      })
    })
}

// Create Pages
// ___________________________________________________________________
exports.createPages = async ({ graphql, actions }) => {
  await createCategoryPages(graphql, actions)
  await createArticlePostPages(graphql, actions)
  await createVideoPostPages(graphql, actions)
}

// Category Resolvers
// ___________________________________________________________________
exports.createResolvers = ({ createResolvers }) => {
  const resolvers = {
    SanityPostCategory: {
      posts: {
        type: ['SanityPost'],
        resolve(source, args, context, info) {
          return context.nodeModel.runQuery({
            type: 'SanityPost',
            query: {
              filter: {
                categories: {
                  elemMatch: {
                    _id: {
                      eq: source._id
                    }
                  }
                }
              }
            }
          })
        }
      }
    }
  }
  createResolvers(resolvers)
}
