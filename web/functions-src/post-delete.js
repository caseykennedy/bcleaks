/* code from functions/todos-delete.js */
const faunadb = require('faunadb')
const getId = require('./utils/getId')

const q = faunadb.query
const client = new faunadb.Client({
  secret: process.env.FAUNADB_SECRET
})

exports.handler = (event, context, callback) => {
  const id = getId(event.path)
  console.log(`Function 'post-delete' invoked. delete id: ${id}`)
  return client
    .query(q.Delete(q.Ref(q.Collection('posts'), id)))
    .then(response => {
      console.log('success', response)
      return callback(null, {
        statusCode: 200,
        body: JSON.stringify(response)
      })
    })
    .catch(error => {
      console.log('error', error)
      return callback(null, {
        statusCode: 400,
        body: JSON.stringify(error)
      })
    })
}
