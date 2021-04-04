// Global context provider

// ___________________________________________________________________

import React, { useState, useEffect, useReducer } from 'react'
import Context from '../context/StoreContext'

// ___________________________________________________________________

type StateProps = {
  posts: FaunaDataQuery[]
}

type ActionProps = {
  type: string
  payload: any
}

type ProviderProps = {
  children: React.ReactNode
}

const initialState = {
  posts: []
}

const reducer = (state: StateProps, action: ActionProps) => {
  switch (action.type) {
    case 'FETCH_FAUNA_POSTS':
      return { ...state, posts: action.payload }
    default:
      // return state
    throw new Error(`Unhandled action type: ${action.type}`)
  }
}

const ContextProvider: React.FC<ProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  // useEffect(() => {}, [])
  console.log('Context State', state)
  return (
    <Context.Provider
      value={{
        state,
        dispatch
      }}
    >
      {children}
    </Context.Provider>
  )
}

export default ContextProvider
