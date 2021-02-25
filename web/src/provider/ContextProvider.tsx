// Global context provider

// ___________________________________________________________________

import React, { useState, useEffect, useReducer } from 'react'
import Context from '../context/StoreContext'

// ___________________________________________________________________

type StateProps = {
  vote: number
  totalVote: number
  isClicked: boolean
  isUpvote: boolean
  isDownvote: boolean
}

type ActionProps = {
  type: 'increment' | 'decrement' | 'reset'
  message: string
}

type ProviderProps = {
  children: React.ReactNode
}

const initialStoreState = {
  vote: 0,
  totalVote: 0,
  isClicked: false,
  isUpvote: false,
  isDownvote: false,
  message: ''
}

const reducer = (state: StateProps, action: ActionProps) => {
  switch (action.type) {
    case 'increment':
      return {
        vote: state.vote + 1,
        totalVote: state.totalVote + 1,
        isClicked: true,
        isUpvote: true,
        message: action.message
      }
    case 'decrement':
      return {
        vote: state.vote - 1,
        totalVote: state.totalVote - 1,
        isClicked: true,
        isDownvote: true,
        message: action.message
      }
    case 'reset':
      return {
        vote: 0
      }
    default:
      throw new Error(`Unhandled action type: ${action.type}`)
  }
}

const ContextProvider: React.FC<ProviderProps> = ({ children }) => {
  // const [store, updateStore] = useState(initialStoreState)
  const [state, dispatch] = useReducer<{ (prevState: any, action: any): any }>(
    reducer,
    initialStoreState
  )

  // useEffect(() => {}, [])

  return (
    <Context.Provider
      value={{
        state,
        dispatch,
        update: (todoId: any, data: any) => {
          return fetch(`/.netlify/functions/todos-update/${todoId}`, {
            body: JSON.stringify(data),
            method: 'POST'
          }).then(response => {
            return response.json()
          })
        },
        create: (data: any) => {
          return fetch('/.netlify/functions/todos-create', {
            body: JSON.stringify(data),
            method: 'POST'
          }).then(response => {
            return response.json()
          })
        },
        readAll: () => {
          return fetch('/.netlify/functions/todos-read-all')
            .then(response => {
              return response.json()
            })
            .then(console.log)
        },
        deleteTodo: (todoId: any) => {
          return fetch(`/.netlify/functions/todos-delete/${todoId}`, {
            method: 'POST'
          }).then(response => {
            return response.json()
          })
        },
        batchDeleteTodo: (todoIds: any) => {
          return fetch(`/.netlify/functions/todos-delete-batch`, {
            body: JSON.stringify({
              ids: todoIds
            }),
            method: 'POST'
          }).then(response => {
            return response.json()
          })
        }
      }}
    >
      {children}
    </Context.Provider>
  )
}

export default ContextProvider
