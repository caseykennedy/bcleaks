// Global context provider

// ___________________________________________________________________

import React, { useState, useEffect } from 'react'
import Context from '../context/StoreContext'

// ___________________________________________________________________

type Props = {
  children: React.ReactNode
}

const ContextProvider: React.FC<Props> = ({ children }) => {
  const initialStoreState = {
    isLoggedIn: false
  }

  const [store, updateStore] = useState(initialStoreState)

  useEffect(() => {}, [])

  // Test
  const test = `yoCrypto`

  return <Context.Provider value={{ test }}>{children}</Context.Provider>
}

export default ContextProvider
