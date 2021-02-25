// Global context

import React from 'react'

// ___________________________________________________________________

type TodoData = {
  author: string
  body: string
  postType: string
  title: string
  votes: number
}

type ContextProps = {
  create: (data: TodoData) => Promise<string>
  readAll: () => Promise<any>
  update: (todoId: string, data: PostQuery) => Promise<any>
  deleteTodo: (todoId: string) => Promise<any>
  batchDeleteTodo: (arg1: any) => any
  state: {
    vote: number
    isClicked: boolean
    isUpvote: boolean
    isDownvote: boolean
    message: string
  }
  dispatch: any
}

const StoreContext = React.createContext<ContextProps>({})

export default StoreContext
