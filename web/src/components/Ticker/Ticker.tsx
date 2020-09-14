// Billboard Component:

// ___________________________________________________________________

import React, { useEffect, useState } from 'react'

import CoinGecko from 'coingecko-api'

// ui
import { Box, Flex } from '../ui'

// Theme + Styles
import * as S from './styles.scss'
import theme from '../../../config/theme'

// ___________________________________________________________________

type Props = {}

const Coin: React.FC<{ coin: any }> = ({ coin }) => {
  const coinName = coin.name
  const currentPrice = coin.current_price
  const currentChange = coin.price_change_percentage_24h

  let color
  if (typeof parseFloat(currentChange) === 'number') {
    const currentChangeFixed = currentChange.toFixed(2)
    if (currentChangeFixed.toString(10).startsWith('-')) {
      color = theme.colors.quaternary
    } else {
      color = theme.colors.primary
    }
  }
  return (
    <>
      {!color ? (
        'Loading...'
      ) : (
        <div className="coin">
          <div className="coinHeader">
            <div className="coinName">{coinName}</div>
            <div className="hourMarker">24h</div>
          </div>
          <div className="priceHeader" style={{ color: `${color}` }}>
            <div className="currentPrice">${currentPrice.toFixed(2)}</div>
            <div className="currentChange">({currentChange}%)</div>
          </div>
        </div>
      )}
    </>
  )
}

const Ticker: React.FC<Props> = () => {
  const CoinGeckoClient = new CoinGecko()
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

  return (
    <S.Ticker>
      <div className="set1">{coins}</div>
      <div className="set2">{coins}</div>
    </S.Ticker>
  )
}

export default Ticker

// ___________________________________________________________________

const defaultProps = {}

Ticker.defaultProps = defaultProps
