import React, { useState } from 'react'

/* Frontend code from src/utils/api.js */
/* Api methods to call /functions */

// type ContextProps = {
//   create: (data: PostShape) => Promise<string>
//   readAll: () => Promise<any>
//   update: (todoId: string, data: PostQuery) => Promise<any>
//   deleteTodo: (todoId: string) => Promise<any>
//   batchDeleteTodo: (arg1: any) => any
// }

type PostShape = {
  author: string
  postType: string
  category: string
  title: string
  text: string
  linkUrl: string
  votes: number
  createdOn: string
}

const createPost = (data: PostShape) => {
  return fetch('/.netlify/functions/todos-create', {
    body: JSON.stringify(data),
    method: 'POST'
  }).then(response => {
    return response.json()
  })
}

const readAllPosts = () => {
  return fetch('/.netlify/functions/todos-read-all').then((response) => {
    return response.json()
  })
}

const updatePost = (todoId: string, data: PostShape) => {
  return fetch(`/.netlify/functions/todos-update/${todoId}`, {
    body: JSON.stringify(data),
    method: 'POST'
  }).then(response => {
    return response.json()
  })
}

const deletePost = (todoId: string) => {
  return fetch(`/.netlify/functions/todos-delete/${todoId}`, {
    method: 'POST'
  }).then(response => {
    return response.json()
  })
}

const batchDeletePost = (todoIds: string[]) => {
  return fetch(`/.netlify/functions/todos-delete-batch`, {
    body: JSON.stringify({
      ids: todoIds
    }),
    method: 'POST'
  }).then(response => {
    return response.json()
  })
}

export default {
  create: createPost,
  readAll: readAllPosts,
  update: updatePost,
  delete: deletePost,
  batchDelete: batchDeletePost
}
