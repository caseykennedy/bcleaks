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
    coins: CoinNode[]
  }
  dispatch: any
}

const StoreContext = React.createContext<ContextProps>({})

export default StoreContext
