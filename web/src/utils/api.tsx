/* Frontend code from src/utils/api.js */
/* Api methods to call /functions */

// type ContextProps = {
//   create: (data: PostShape) => Promise<string>
//   readAll: () => Promise<any>
//   update: (postId: string, data: PostQuery) => Promise<any>
//   deleteTodo: (postId: string) => Promise<any>
//   batchDeleteTodo: (arg1: any) => any
// }

const createPost = (data: FaunaDbPostShape) => {
  return fetch('/.netlify/functions/post-create', {
    body: JSON.stringify(data),
    method: 'POST'
  }).then(response => {
    return response.json()
  })
}

const readAllPosts = () => {
  return fetch('/.netlify/functions/post-read-all').then(response => {
    return response.json()
  })
}

const updatePost = (postId: string, data: FaunaDbPostShape) => {
  return fetch(`/.netlify/functions/post-update/${postId}`, {
    body: JSON.stringify(data),
    method: 'POST'
  }).then(response => {
    return response.json()
  })
}

const updateVote = (
  postId: string,
  data: { votes: number; voters: VoterShape[] }
) => {
  return fetch(`/.netlify/functions/post-update/${postId}`, {
    body: JSON.stringify(data),
    method: 'POST'
  }).then(response => {
    return response.json()
  })
}

const deletePost = (postId: string) => {
  return fetch(`/.netlify/functions/post-delete/${postId}`, {
    method: 'POST'
  }).then(response => {
    return response.json()
  })
}

const batchDeletePost = (postIds: string[]) => {
  return fetch(`/.netlify/functions/post-delete-batch`, {
    body: JSON.stringify({
      ids: postIds
    }),
    method: 'POST'
  }).then(response => {
    return response.json()
  })
}

export default {
  castVote: updateVote,
  create: createPost,
  readAll: readAllPosts,
  update: updatePost,
  delete: deletePost,
  batchDelete: batchDeletePost
}
