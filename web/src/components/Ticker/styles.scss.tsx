// Ticker Styles:

// ___________________________________________________________________

import styled from 'styled-components'
import { animated } from 'react-spring'

import { Box, Flex } from '../ui'
import theme from '../../gatsby-plugin-theme-ui'

// ___________________________________________________________________

export const Ticker = styled(Flex)`
  background-color: black;
  border-bottom: ${theme.border};
  max-width: 100vw;
  overflow: hidden;
  padding: ${theme.space[3]} ${theme.space[3]};
  font-size: ${theme.fontSizes[1]};

  .ticker {
    &__inner {
      /* display: flex;
      white-space: nowrap;
      overflow: hidden; */
    }
  }
`

export const Coin = styled(Box)`
  margin-right: ${theme.space[6]};

  .coin {
    &-title {
      color: ${theme.colors.tertiary};
      font-size: font-size: calc(${theme.fontSizes[1]} * 1.15);;
      
      &__name {
        font-weight: 600;
      }
      &__marker {
        color: ${theme.colors.tertiary};
        vertical-align: super;
        font-size: calc(${theme.fontSizes[1]} / 1.15);
      }
    }

    &-info {
      font-size: calc(${theme.fontSizes[1]} / 1.15);

      &__price {
        margin-right: ${theme.space[2]};
      }
      &__change {
        
      }
    }
  }
`

// ___________________________________________________________________