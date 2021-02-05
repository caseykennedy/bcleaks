// Ticker Component:

// ___________________________________________________________________

import React, { ReactChild, useEffect, useState } from 'react'
import CoinGecko from 'coingecko-api'
import Swiper from 'react-id-swiper'

// Libraries
import Ticker from 'nice-react-ticker'

// ui
import { Box, Flex, Text } from '../ui'

// Theme + Styles
import * as S from './styles.scss'
import theme from '../../gatsby-plugin-theme-ui'
import { AnyARecord } from 'dns'

// ___________________________________________________________________

type CoinNode = {
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

const Slider: React.FC<{ children: React.ReactChild }> = ({ children }) => {
  const params = {
    slidesPerView: 3,
    spaceBetween: 0,
    grabCursor: true,
    freeMode: true,
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: true
    },
    breakpoints: {
      1024: {
        slidesPerView: 8,
        spaceBetween: 0
      },
      768: {
        slidesPerView: 8,
        spaceBetween: 0
      },
      640: {
        slidesPerView: 4,
        spaceBetween: 0
      },
      320: {
        slidesPerView: 3,
        spaceBetween: 0
      }
    }
  }
  return <Swiper {...params}>{children}</Swiper>
}

const Coin: React.FC<{ coin: any }> = ({ coin }) => {
  const coinName = coin.name
  const currentPrice = coin.current_price
  const currentChange = coin.price_change_percentage_24h

  let color
  let carat
  if (typeof parseFloat(currentChange) === 'number') {
    const currentChangeFixed = currentChange.toFixed(2)
    if (currentChangeFixed.toString(2).startsWith('-')) {
      color = theme.colors.red
      carat = ``
    } else {
      color = theme.colors.primary
      carat = `+`
    }
  }
  return (
    <>
      {!color ? (
        'Loading...'
      ) : (
        <S.Coin>
          <Box flex={1} className="coin__image">
            <img height="18px" src={coin.image} />
          </Box>
          <Box flex={3}>
            <Flex className="coin-title">
              <div className="coin-title__name">{coinName}</div>
              {/* <div className="coin-title__marker">24h</div> */}
            </Flex>
            <Flex color={color} className="coin-info">
              <div className="coin-info__price">${currentPrice.toFixed(2)}</div>
              <div className="coin-info__carat">{carat}</div>
              <div className="coin-info__change">
                {currentChange.toFixed(2)}%
              </div>
            </Flex>
          </Box>
        </S.Coin>
      )}
    </>
  )
}

const GetCoinGecko = () => {
  const CoinGeckoClient = new CoinGecko()
  // Fetch Coin data
  const [data, setData] = useState<any>(null)

  console.log(data)

  useEffect(() => {
    async function getCoins() {
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
      setData(results.data)
    }
    getCoins()
  }, [])

  const coins = []
  if (data) {
    for (const [key, value] of Object.entries(data)) {
      const temp = <Coin coin={value} key={key} />
      coins.push(temp)
    }
  }

  return data ? <>{coins}</> : <Box>Loading...</Box>
}

const CryptoTicker = () => {
  return (
    <S.CryptoTicker>
      <Slider>
        <GetCoinGecko />
      </Slider>
    </S.CryptoTicker>
  )
}

export default CryptoTicker
