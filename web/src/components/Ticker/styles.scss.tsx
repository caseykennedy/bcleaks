// Layout Styles:

// ___________________________________________________________________

import styled from 'styled-components'
import { animated } from 'react-spring'

import { Box, Flex } from '../ui'
import theme from '../../../config/theme'

// ___________________________________________________________________

export const Ticker = styled(Flex)`
  background-color: black;
  border-bottom: 1px solid #545454;
  white-space: nowrap;
  overflow: hidden;
  padding: ${theme.space[3]};

  .coin {
    
  }

  .set1 {
    display: inline-block;
    position: relative;
    left: 0px;
  }

  .set2 {
    display: inline-block;
    position: relative;
    left: -1580px;
  }

  .coinHeader * {
    display: inline-block;
    color: #989898;
    font-size: 14px;
  }

  .hourMarker {
    font-size: 8px;
  }

  .priceHeader * {
    display: inline-block;
    font-size: 14px;
  }

  .currentPrice {
    padding-right: 5px;
  }
`

// ___________________________________________________________________
