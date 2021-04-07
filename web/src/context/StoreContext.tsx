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
  state: {
    posts: FaunaDataQuery[]
    coins: {
      success: boolean
      message: string
      code: number
      data: CoinNode[]
    }
  }
  dispatch: any
}

const StoreContext = React.createContext<ContextProps>({})

export default StoreContext
