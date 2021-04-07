// Ticker Component:

// ___________________________________________________________________

import React, { useContext, useEffect } from 'react'
import Marquee from 'react-fast-marquee'
import Swiper from 'react-id-swiper'

// Context
import StoreContext from '../../context/StoreContext'

// ui
import { Box, Flex } from '../ui'

// Theme + Styles
import * as S from './styles.scss'
import theme from '../../gatsby-plugin-theme-ui'

// ___________________________________________________________________

const Slider: React.FC<{ children: any }> = ({ children }) => {
  const params = {
    slidesPerView: 3,
    spaceBetween: 0,
    grabCursor: true,
    // freeMode: true,
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
          <div className="coin-info__change">{currentChange.toFixed(2)}%</div>
        </Flex>
      </Box>
    </S.Coin>
  )
}

const CryptoTicker = () => {
  const { state } = useContext(StoreContext)
  console.log(state)

  useEffect(() => {
    const CoinSlider = () =>
      state.coins.data.map((value, key) => <Coin coin={value} key={key} />)
  }, [])

  return (
    <S.CryptoTicker>
      {state.coins.data.length > 0 && (
        <Marquee gradient={false}>
          {state.coins.data.map((value, key) => (
            <Coin coin={value} key={key} />
          ))}
        </Marquee>
      )}
    </S.CryptoTicker>
  )
}

export default CryptoTicker
