// Boop boop bippity bop
// Test functions
// To run: > node boop functionName

const faunadb = require('faunadb')
const q = faunadb.query

const client = new faunadb.Client({
  secret: `fnAD0oxsu0ACCDlse35dLqC4sEBwj7d89gST5_am`
})
const COMMENT_COLLECTION_NAME = `comments`
const POST_COLLECTION_NAME = `posts`

module.exports = {
  // Comment functions
  // ___________________________________________________________________

  // CREATE COMMENT
  createComment: async () => {
    const slug = '/posts/some-post'
    const name = 'some name'
    const comment = 'some comment'
    const results = await client.query(
      q.Create(q.Collection(COMMENT_COLLECTION_NAME), {
        data: {
          isApproved: false,
          slug: slug,
          date: new Date().toString(),
          name: name,
          comment: comment
        }
      })
    )
    console.log(JSON.stringify(results, null, 2))
    return {
      commentId: results.ref.id
    }
  },

  // DELETE COMMENT BY ID
  deleteCommentById: async () => {
    const commentId = '303042046878286402'
    const results = await client.query(
      q.Delete(q.Ref(q.Collection(COMMENT_COLLECTION_NAME), commentId))
    )
    console.log(JSON.stringify(results, null, 2))
    return {
      commentId: results.ref.id
    }
  },

  // GET ALL COMMENTS
  getAllComments: async () => {
    const results = await client.query(
      q.Paginate(q.Match(q.Index('all_comments')))
    )
    console.log(JSON.stringify(results, null, 2))
    return results.data.map(([ref, isApproved, slug, date, name, comment]) => ({
      commentId: ref.id,
      isApproved,
      slug,
      date,
      name,
      comment
    }))
  },

  // GET COMMENT BY SLUG
  getCommentBySlug: async () => {
    const slug = '/posts/searchforme'
    const results = await client.query(
      q.Paginate(q.Match(q.Index('get-comments-by-slug'), slug))
    )
    console.log(JSON.stringify(results, null, 2))
    return results.data.map(([ref, isApproved, slug, date, name, comment]) => ({
      commentId: ref.id,
      isApproved,
      slug,
      date,
      name,
      comment
    }))
  },

  // APPROVE COMMENT BY ID
  approveCommentById: async () => {
    const commentId = '263413122555970050'
    const results = await client.query(
      q.Update(q.Ref(q.Collection(COMMENT_COLLECTION_NAME), commentId), {
        data: {
          isApproved: true
        }
      })
    )
    console.log(JSON.stringify(results, null, 2))
    return {
      isApproved: results.isApproved
    }
  },

  // Post functions
  // ___________________________________________________________________

  // CREATE POST
  createPost: async () => {
    const author = 'some author'
    const category = 'Bitcoin'
    const linkUrl = 'www.somelink.com'
    const postType = 'link or text'
    const slug = 'some-test-post'
    const title = 'some test title'
    const text = 'some test text'
    const results = await client.query(
      q.Create(q.Collection(POST_COLLECTION_NAME), {
        data: {
          author: author,
          category: category,
          createdOn: new Date().toString(),
          linkUrl: linkUrl,
          postType: postType,
          slug: slug,
          text: text,
          title: title,
          voters: [],
          votes: 0
        }
      })
    )
    console.log(JSON.stringify(results, null, 2))
    return {
      postId: results.ref.id
    }
  },

  // DELETE COMMENT BY ID
  deletePostById: async () => {
    postId = '303303773647798849'
    const results = await client.query(
      q.Delete(q.Ref(q.Collection(POST_COLLECTION_NAME), postId))
    )
    console.log(JSON.stringify(results, null, 2))
    return {
      postId: results.ref.id
    }
  },

  // UPDATE POST BY ID
  updatePostById: async () => {
    const postId = '303303773647798849'
    const category = 'Ethereum'
    const linkUrl = 'www.someEDITEDlink.com'
    const postType = 'link or text EDITED'
    const title = 'some EDITED test title'
    const text = 'some EDITED test text'
    const results = await client.query(
      q.Update(q.Ref(q.Collection(POST_COLLECTION_NAME), postId), {
        data: {
          category: category,
          editedOn: new Date().toString(),
          linkUrl: linkUrl,
          postType: postType,
          text: text,
          title: title
        }
      })
    )
    console.log(JSON.stringify(results, null, 2))
    return {
      postId: results.ref.id
    }
  },

  // CAST VOTE BY ID
  castVoteById: async () => {
    const postId = '303303831363519041'
    const user = 'testy123456'
    const voters = [{ user: user, vote: 1 }]
    const votes = 4
    const results = await client.query(
      q.Update(q.Ref(q.Collection(POST_COLLECTION_NAME), postId), {
        data: {
          voters: voters,
          votes: votes
        }
      })
    )
    console.log(JSON.stringify(results, null, 2))
    return {
      postId: results.ref.id
    }
  },

  // GET ALL POSTS
  getAllPosts: async () => {
    const results = await client.query(
      q.Paginate(q.Match(q.Index('all_graphql_posts')))
    )
    console.log(JSON.stringify(results, null, 2))
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
  getPostsBySlug: async () => {
    const slug = 'title-to-slug-test'
    const results = await client.query(
      q.Paginate(q.Match(q.Index('get-posts-by-slug'), slug))
    )
    console.log(JSON.stringify(results, null, 2))
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
  getPostsByAuthor: async () => {
    const author = 'some author'
    const results = await client.query(
      q.Paginate(q.Match(q.Index('get-posts-by-author'), author))
    )
    console.log(JSON.stringify(results, null, 2))
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
}

require('make-runnable/custom')({
  printOutputFrame: false
})
