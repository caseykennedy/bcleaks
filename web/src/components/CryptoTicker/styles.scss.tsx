// CryptoTicker Styles:

// ___________________________________________________________________

import styled from 'styled-components'
import { animated } from 'react-spring'

import { Box, Flex } from '../ui'
import theme from '../../gatsby-plugin-theme-ui'

// ___________________________________________________________________

export const CryptoTicker = styled(Flex)`
  align-items: center;
  background-color: black;
  border-bottom: ${theme.border};
  font-size: ${theme.fontSizes[1]};
  overflow: hidden;
  padding: ${theme.space[1]} ${theme.space[3]};

  height: ${theme.tickerHeight};
  width: 100%;

  .ticker {
    &__inner {
      /* display: flex;
      white-space: nowrap;
      overflow: hidden; */
    }
  }
`

export const Coin = styled(Flex)`
  display: flex;
  flex-direction: row;


  margin-right: ${theme.space[5]};

  @media ${theme.mq.tablet} {
    margin-right: ${theme.space[6]};
  }

  .coin {
    &__image {
      flex: 1;
      margin-right: ${theme.space[2]};
    }

    &-title {
      color: ${theme.colors.gray};
      font-family: ${theme.fonts.sans};
      font-size: ${theme.fontSizes[0]};
      line-height: 1.35;

      @media ${theme.mq.tablet} {
        font-size: calc(${theme.fontSizes[1]} * 1.15);
      }

      &__name {
        font-weight: 500;
      }

      &__marker {
        color: ${theme.colors.tertiary};
        vertical-align: super;
        font-size: calc(${theme.fontSizes[1]} / 1.15);
      }
    }

    &-info {
      font-size: calc(${theme.fontSizes[1]} / 1.15);
      line-height: 1.35;

      @media ${theme.mq.tablet} {
        font-size: calc(${theme.fontSizes[1]} / 1);
      }

      &__price {
        margin-right: ${theme.space[2]};
      }

      &__change {
      }
    }
  }
`

// ___________________________________________________________________
