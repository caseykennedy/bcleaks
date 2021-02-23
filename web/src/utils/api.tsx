/* Frontend code from src/utils/api.js */
/* Api methods to call /functions */

const create = (data: any) => {
  return fetch('/.netlify/functions/todos-create', {
    body: JSON.stringify(data),
    method: 'POST'
  }).then(response => {
    return response.json()
  })
}

const readAll = () => {
  return fetch('/.netlify/functions/todos-read-all').then(response => {
    return response.json()
  })
}

const update = (todoId: string, data: object) => {
  return fetch(`/.netlify/functions/todos-update/${todoId}`, {
    body: JSON.stringify(data),
    method: 'POST'
  }).then(response => {
    return response.json()
  })
}

const deleteTodo = (todoId: string) => {
  return fetch(`/.netlify/functions/todos-delete/${todoId}`, {
    method: 'POST'
  }).then(response => {
    return response.json()
  })
}

const batchDeleteTodo = (todoIds: any) => {
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
  create,
  readAll,
  update,
  delete: deleteTodo,
  batchDelete: batchDeleteTodo
}
