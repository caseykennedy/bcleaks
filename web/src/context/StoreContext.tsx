// Global context

import React from 'react'

// ___________________________________________________________________

type ContextProps = {
  state: {
    posts: FaunaDataQuery[]
    coins: CoinNode[]
  }
  dispatch: any
}

const StoreContext = React.createContext<ContextProps>({})

export default StoreContext
