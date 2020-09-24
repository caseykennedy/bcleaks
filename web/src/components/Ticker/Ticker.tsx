// Ticker Component:

// ___________________________________________________________________

import React, { useEffect, useState } from 'react'
import CoinGecko from 'coingecko-api'

// Libraries
import ReactTicker from 'react-ticker'

// ui
import { Box, Flex, Text } from '../ui'

// Theme + Styles
import * as S from './styles.scss'
import theme from '../../../config/theme'
import { AnyARecord } from 'dns'

// ___________________________________________________________________

type CoinShape = {
  node: {
    props: {
      coin: {
        ath: number
        ath_change_percentage: number
        ath_date: string
        atl: number
        atl_change_percentage: number
        atl_date: string
        circulating_supply: number
        current_price: number
        fully_diluted_valuation: number
        high_24h: number
        id: string
        image: string
        last_updated: string
        low_24h: number
        market_cap: number
        market_cap_change_24h: number
        market_cap_change_percentage_24h: number
        market_cap_rank: number
        max_supply: number
        name: string
        price_change_24h: number
        price_change_percentage_24h: number
        price_change_percentage_24h_in_currency: number
        roi: null
        symbol: string
        total_supply: number
        total_volume: number
      }
    }
  }
}

const Coin: React.FC<{ coin: any }> = ({ coin }) => {
  const coinName = coin.name
  const currentPrice = coin.current_price
  const currentChange = coin.price_change_percentage_24h

  let color
  if (typeof parseFloat(currentChange) === 'number') {
    const currentChangeFixed = currentChange.toFixed(2)
    if (currentChangeFixed.toString(10).startsWith('-')) {
      color = theme.colors.red
    } else {
      color = theme.colors.primary
    }
  }
  return (
    <>
      {!color ? (
        'Loading...'
      ) : (
        <S.Coin>
          <Flex className="coin-title">
            <div className="coin-title__name">{coinName}</div>
            <div className="coin-title__marker">24h</div>
          </Flex>
          <Flex color={color} className="coin-info">
            <div className="coin-info__price">${currentPrice.toFixed(2)}</div>
            <div className="coin-info__change">({currentChange}%)</div>
          </Flex>
        </S.Coin>
      )}
    </>
  )
}

const GetCoinGecko = () => {
  const CoinGeckoClient = new CoinGecko()
  // Fetch Coin data
  const [data, setData] = useState(null)
  const getCoins = async () => {
    const results = await CoinGeckoClient.coins.markets({
      vs_currency: 'usd',
      order: 'market_cap_desc',
      per_page: 15,
      page: 1,
      ids: [
        'bitcoin',
        'ethereum',
        'chainlink',
        'maker',
        'litecoin',
        'unibright',
        '0x',
        'republic-protocol',
        'tezos',
        'stellar',
        'monero',
        'zcash',
        'cosmos',
        'handshake',
        'digibyte'
      ],
      sparkline: false,
      price_change_percentage: '24h'
    })
    setData(results.data)
  }

  useEffect(() => {
    getCoins()
  }, [])

  const coins = []
  if (data) {
    for (const [key, value] of Object.entries(data)) {
      const temp = <Coin coin={value} key={key} />
      coins.push(temp)
    }
  }

  console.log(coins)

  return data ? <>{coins}</> : <Box>Loading...</Box>
}

const Ticker = () => {
  return (
    <S.Ticker>
      <GetCoinGecko />
    </S.Ticker>
  )
}

export default Ticker
