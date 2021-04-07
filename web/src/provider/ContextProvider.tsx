// Global context provider

// ___________________________________________________________________

import React, { useState, useEffect, useReducer } from 'react'
import CoinGecko from 'coingecko-api'
import Context from '../context/StoreContext'

// ___________________________________________________________________

type StateProps = {
  posts: FaunaDataQuery[]
  coins: {
    success: boolean
    message: string
    code: number
    data: CoinNode[]
  }
}

type ActionProps = {
  type: string
  payload: any
}

type ProviderProps = {
  children: React.ReactNode
}

const initialState = {
  posts: [],
  coins: {
    data: []
  }
}

const reducer = (state: StateProps, action: ActionProps) => {
  switch (action.type) {
    case 'FETCH_FAUNA_POSTS':
      return { ...state, posts: action.payload }
    case 'FETCH_COINGECKO':
      return { ...state, coins: action.payload }
    default:
      // return state
      throw new Error(`Unhandled action type: ${action.type}`)
  }
}

const ContextProvider: React.FC<ProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  
  const CoinGeckoClient = new CoinGecko()
  const getCoins = async () => {
    const results = await CoinGeckoClient.coins.markets({
      vs_currency: 'usd',
      order: 'name',
      per_page: 15,
      page: 1,
      ids: [
        'bitcoin',
        'ethereum',
        'chainlink',
        'cosmos',
        'handshake',
        'maker',
        'litecoin',
        'tezos',
        'stellar',
        'monero',
        'zcash'
      ],
      sparkline: false,
      price_change_percentage: '24h'
    })
    dispatch({
      type: 'FETCH_COINGECKO',
      payload: results
    })
  }

  useEffect(() => {
    getCoins()
  }, [])
  
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
