// Ticker Component:

// ___________________________________________________________________

import React, { useContext, useEffect, useState } from 'react'
import CoinGecko from 'coingecko-api'
import Swiper from 'react-id-swiper'

// Context
import StoreContext from '../../context/StoreContext'

// ui
import { Box, Flex } from '../ui'

// Theme + Styles
import * as S from './styles.scss'
import theme from '../../gatsby-plugin-theme-ui'

// ___________________________________________________________________

const Slider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const params = {
    slidesPerView: 'auto',
    spaceBetween: 0,
    grabCursor: true,
    freeMode: true,
    rebuildOnUpdate: true,
    // observer: true,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: true
    },
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
          <div className="coin-info__change">{currentChange.toFixed(2)}%</div>
        </Flex>
      </Box>
    </>
  )
}

const CryptoTicker = () => {
  const CoinGeckoClient = new CoinGecko()
  const { state, dispatch } = useContext(StoreContext)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
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
          payload: results.data
        })
        setIsLoading(false)
      } catch (e) {
        console.log(e)
      }
    }
    fetchData()
  })

  return (
    <S.CryptoTicker>
      <Slider>
        {!isLoading ? (
          state.coins.map((value, idx) => (
            <S.Coin key={idx}>
              <Coin coin={value} />
            </S.Coin>
          ))
        ) : (
          <Box pl={theme.gutter.axis}>loading...</Box>
        )}
      </Slider>
    </S.CryptoTicker>
  )
}

export default CryptoTicker
