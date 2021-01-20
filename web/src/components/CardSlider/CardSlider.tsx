// Card Slider

// ___________________________________________________________________

import * as React from 'react'
import Swiper from 'react-id-swiper'

// import * as S from './styles.scss'
import theme from '../../gatsby-plugin-theme-ui'

// ___________________________________________________________________

type Props = {
  pagination?: boolean
} & typeof defaultProps

const defaultProps = {
  slidesPerView: 3
}

const CardSlider: React.FC<Props> = ({
  children,
  pagination,
  slidesPerView
}) => {
  const params = {
    slidesPerView: 1,
    spaceBetween: 8,
    grabCursor: true,
    // freeMode: true,
    breakpoints: {
      1024: {
        slidesPerView: `${slidesPerView}`,
        spaceBetween: 24
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 16,
      },
      640: {
        slidesPerView: 1,
        spaceBetween: 8,
      },
      320: {
        slidesPerView: 1,
        spaceBetween: 8,
      }
    }
  }
  const paramsPagination = {
    slidesPerView: 1,
    spaceBetween: 8,
    grabCursor: true,
    // freeMode: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      renderBullet: (index: any, className: string) => {
        return `<span class="${className}">${index + 1}</span>`
      }
    },
    breakpoints: {
      1024: {
        slidesPerView: `${slidesPerView}`,
        spaceBetween: 24
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 16,
        grabCursor: true
      },
      640: {
        slidesPerView: 1,
        spaceBetween: 8,
        grabCursor: true
      },
      320: {
        slidesPerView: 1,
        spaceBetween: 8,
        grabCursor: true
      }
    }
  }
  return !pagination ? (
    <Swiper {...params}>{children}</Swiper>
  ) : (
    <Swiper {...paramsPagination}>{children}</Swiper>
  )
}

export default CardSlider
