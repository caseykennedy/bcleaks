/* Import faunaDB sdk */
const faunadb = require('faunadb')
const q = faunadb.query

exports.handler = (event, context) => {
  console.log('Function `post-read-all` invoked')
  /* configure faunaDB Client with our secret */
  const client = new faunadb.Client({
    secret: process.env.GATSBY_FAUNADB_SECRET
  })
  return client
    .query(q.Paginate(q.Match(q.Ref('indexes/all_posts'))))
    .then(response => {
      const postRefs = response.data
      console.log('post refs', postRefs)
      console.log(`${postRefs.length} posts found`)
      // create new query out of todo refs. http://bit.ly/2LG3MLg
      const getAllTodoDataQuery = postRefs.map(ref => {
        return q.Get(ref)
      })
      // then query the refs
      return client.query(getAllTodoDataQuery).then(ret => {
        return {
          statusCode: 200,
          body: JSON.stringify(ret)
        }
      })
    })
    .catch(error => {
      console.log('error', error)
      return {
        statusCode: 400,
        body: JSON.stringify(error)
      }
    })
}
