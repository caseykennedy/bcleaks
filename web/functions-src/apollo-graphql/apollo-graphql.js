const faunadb = require('faunadb')
const { ApolloServer, gql } = require('apollo-server-lambda')

const q = faunadb.query

const client = new faunadb.Client({
  secret: process.env.GATSBY_FAUNADB_SECRET
})

// ___________________________________________________________________

// POSTS
const POSTS_COLLECTION_NAME = process.env.GATSBY_FAUNA_COMMENTS_COLLECTION
const ALL_POSTS_INDEX = process.env.GATSBY_FAUNA_ALL_POSTS_INDEX
const GET_POSTS_BY_SLUG_INDEX = process.env.GATSBY_FAUNA_GET_POSTS_BY_SLUG_INDEX
const GET_POSTS_BY_AUTHOR_INDEX =
  process.env.GATSBY_FAUNA_GET_POSTS_BY_AUTHOR_INDEX

// COMMENTS
const COMMENTS_COLLECTION_NAME = process.env.GATSBY_FAUNA_COMMENTS_COLLECTION
const ALL_COMMENTS_INDEX = process.env.GATSBY_FAUNA_ALL_COMMENTS_INDEX
const GET_COMMENTS_BY_SLUG_INDEX =
  process.env.GATSBY_FAUNA_GET_COMMENTS_BY_SLUG_INDEX

// ___________________________________________________________________

const typeDefs = gql`
  type Query {
    getAllComments: [CommentObject]
    getCommentsBySlug(slug: String!): [CommentObject]

    getAllPosts: [PostObject]
    getPostsByAuthor(author: String!): [PostObject]
    getPostsBySlug(slug: String!): [PostObject]
  }

  type Mutation {
    createComment(slug: String!, name: String!, comment: String): CreatedComment
    deleteCommentById(commentId: String!): DeletedComment
    approveCommentById(commentId: String!): ApprovedComment

    createPost(
      category: String!
      linkUrl: String!
      postType: String!
      text: String!
      title: String!
    ): CreatedPost
    deletePostById(postId: String!): DeletedPost
    updatePostById(postId: String!): UpdatedPost
    castVoteById(postId: String!, voters: String!, votes: Int): CastVote
  }

  ## COMMENTS
  type CommentObject {
    commentId: String
    isApproved: Boolean
    slug: String
    date: String
    name: String
    comment: String
  }

  type DeletedComment {
    commentId: String
  }

  type ApprovedComment {
    isApproved: Boolean
  }

  type CreatedComment {
    commentId: String
  }

  ## POSTS
  type PostObject {
    postId: String
    author: String
    category: String
    createdOn: String
    linkUrl: String
    postType: String
    slug: String
    text: String
    title: String
    voters: String
    votes: Int
  }

  type VoterShape {
    user: String
    vote: Int
  }

  type DeletedPost {
    postId: String
  }

  type UpdatedPost {
    postId: String
  }

  type CastVote {
    postId: String
  }

  type CreatedPost {
    postId: String
  }
`

// ___________________________________________________________________

const resolvers = {
  Query: {
    // GET ALL COMMENTS
    getAllComments: async () => {
      const results = await client.query(
        q.Paginate(q.Match(q.Index(ALL_COMMENTS_INDEX)))
      )
      return results.data.map(
        ([ref, isApproved, slug, date, name, comment]) => ({
          commentId: ref.id,
          isApproved,
          slug,
          date,
          name,
          comment
        })
      )
    },

    // GET COMMENT BY SLUG
    getCommentsBySlug: async (root, args, context) => {
      const results = await client.query(
        q.Paginate(q.Match(q.Index(GET_COMMENTS_BY_SLUG_INDEX), args.slug))
      )

      return results.data.map(
        ([ref, isApproved, slug, date, name, comment]) => ({
          commentId: ref.id,
          isApproved,
          slug,
          date,
          name,
          comment
        })
      )
    },

    // GET ALL POSTS
    getAllPosts: async () => {
      const results = await client.query(
        q.Paginate(q.Match(q.Index(ALL_POSTS_INDEX)))
      )
      return results.data.map(
        ([
          ref,
          author,
          category,
          createdOn,
          linkUrl,
          postType,
          slug,
          text,
          title,
          voters,
          votes
        ]) => ({
          postId: ref.id,
          author,
          category,
          createdOn,
          linkUrl,
          postType,
          slug,
          text,
          title,
          voters,
          votes
        })
      )
    },

    // GET POSTS BY SLUG
    getPostsBySlug: async (root, args, context) => {
      const results = await client.query(
        q.Paginate(q.Match(q.Index(GET_POSTS_BY_SLUG_INDEX), args.slug))
      )
      return results.data.map(
        ([
          ref,
          author,
          category,
          createdOn,
          linkUrl,
          postType,
          slug,
          text,
          title,
          voters,
          votes
        ]) => ({
          postId: ref.id,
          author,
          category,
          createdOn,
          linkUrl,
          postType,
          slug,
          text,
          title,
          voters,
          votes
        })
      )
    },

    // GET POSTS BY AUTHOR
    getPostsByAuthor: async (root, args, context) => {
      const results = await client.query(
        q.Paginate(q.Match(q.Index(GET_POSTS_BY_AUTHOR_INDEX), args.author))
      )
      return results.data.map(
        ([
          ref,
          author,
          category,
          createdOn,
          linkUrl,
          postType,
          slug,
          text,
          title,
          voters,
          votes
        ]) => ({
          postId: ref.id,
          author,
          category,
          createdOn,
          linkUrl,
          postType,
          slug,
          text,
          title,
          voters,
          votes
        })
      )
    }
  },

  Mutation: {
    // COMMENT FUNCTIONS
    // ___________________________________________________________________

    // CREATE COMMENT
    createComment: async (root, args, context) => {
      const results = await client.query(
        q.Create(q.Collection(COMMENTS_COLLECTION_NAME), {
          data: {
            isApproved: false,
            slug: args.slug,
            date: new Date().toString(),
            name: args.name,
            comment: args.comment
          }
        })
      )

      return {
        commentId: results.ref.id
      }
    },

    // DELETE COMMENT BY ID
    deleteCommentById: async (root, args, context) => {
      const results = await client.query(
        q.Delete(q.Ref(q.Collection(COMMENTS_COLLECTION_NAME), args.commentId))
      )

      return {
        commentId: results.ref.id
      }
    },

    // APPROVE COMMENT BY ID
    // approveCommentById: async (root, args, context) => {
    //   const results = await client.query(
    //     q.Update(
    //       q.Ref(q.Collection(COMMENTS_COLLECTION_NAME), args.commentId),
    //       {
    //         data: {
    //           isApproved: true
    //         }
    //       }
    //     )
    //   )

    //   return {
    //     isApproved: results.isApproved
    //   }
    // },

    // POST FUNCTIONS
    // ___________________________________________________________________

    // CREATE POST
    createPost: async (root, args, context) => {
      const results = await client.query(
        q.Create(q.Collection(POSTS_COLLECTION_NAME), {
          data: {
            author: args.author,
            category: args.category,
            createdOn: new Date().toString(),
            linkUrl: args.linkUrl,
            postType: args.postType,
            slug: args.slug,
            text: args.text,
            title: args.title,
            voters: [],
            votes: 0
          }
        })
      )

      return {
        postId: results.ref.id
      }
    },

    // DELETE POST BY ID
    deletePostById: async (root, args, context) => {
      const results = await client.query(
        q.Delete(q.Ref(q.Collection(POSTS_COLLECTION_NAME), args.postId))
      )

      return {
        postId: results.ref.id
      }
    },

    // UPDATE POST BY ID
    updatePostById: async (root, args, context) => {
      const results = await client.query(
        q.Update(q.Ref(q.Collection(POSTS_COLLECTION_NAME), args.postId), {
          data: {
            category: args.category,
            editedOn: new Date().toString(),
            linkUrl: args.linkUrl,
            postType: args.postType,
            text: args.text,
            title: args.title
          }
        })
      )

      return {
        postId: results.ref.postId
      }
    },

    // CAST VOTE BY ID
    castVoteById: async (root, args, context) => {
      const results = await client.query(
        q.Update(q.Ref(q.Collection(POSTS_COLLECTION_NAME), args.postId), {
          data: {
            voters: args.voters,
            votes: args.votes
          }
        })
      )

      return {
        postId: results.ref.postId
      }
    }
  }
}

// ___________________________________________________________________

const server = new ApolloServer({
  typeDefs,
  resolvers,
  playground: true,
  introspection: true
})

exports.handler = server.createHandler({
  cors: {
    origin: '*',
    credentials: true
  }
})
