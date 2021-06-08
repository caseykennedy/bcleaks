// CryptoTicker Styles:

// ___________________________________________________________________

import styled from 'styled-components'
import { Flex } from '../ui'
import theme from '../../gatsby-plugin-theme-ui'

// ___________________________________________________________________

export const CryptoTicker = styled(Flex)`
  align-items: center;
  background: ${theme.colors.black};
  /* border-bottom: ${theme.border}; */
  font-size: ${theme.fontSizes[1]};

  height: ${theme.tickerHeight};
  width: 100%;

  .swiper-container {
    width: 100%;
    overflow: hidden;

    .swiper-wrapper {
    }
  }
`

export const Coin = styled(Flex)`
  display: flex;
  align-items: center;
  flex-direction: row;

  border-right: ${theme.border};
  padding: 0 ${theme.space[3]};
  max-width: 150px;

  @media ${theme.mq.tablet} {
    max-width: 180px;
    padding: 0 ${theme.space[4]};
  }

  .coin {
    &__image {
      flex: 1;
      margin-right: ${theme.space[3]};
    }

    &-title {
      color: ${theme.colors.gray};
      font-family: ${theme.fonts.sans};
      font-size: ${theme.fontSizes[1]};
      line-height: 1.35;

      @media ${theme.mq.tablet} {
        font-size: calc(${theme.fontSizes[1]} * 1.15);
      }

      &__name {
        font-weight: 500;
      }

      &__marker {
        color: ${theme.colors.tertiary};
        font-size: calc(${theme.fontSizes[1]} / 1.15);
        font-weight: 600;
        margin-left: ${theme.space[1]};
        vertical-align: super;
      }
    }

    &-info {
      display: flex;
      align-items: center;

      font-size: ${theme.fontSizes[0]};
      line-height: 1.35;

      @media ${theme.mq.tablet} {
        font-size: calc(${theme.fontSizes[1]} * 1.15);
      }

      &__price {
        font-family: ${theme.fonts.sans};
        margin-right: ${theme.space[3]};
      }

      &__carat {
      }

      &__change {
        font-size: ${theme.fontSizes[1]};
      }
    }
  }
`

// ___________________________________________________________________
