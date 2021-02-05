// Filter Nav Styles:

// ___________________________________________________________________

import styled from 'styled-components'
import theme from '../../gatsby-plugin-theme-ui'
import { Box, Flex } from '../ui'

// ___________________________________________________________________

export const FilterNav = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: space-between;

  background: ${theme.colors.black};
  border-top: ${theme.border};
  color: ${theme.colors.tertiary};

  width: 100%;

  position: sticky;
  top: ${theme.headerHeight};
  z-index: 99999;

  .inner {
    display: flex;
    flex-wrap: wrap;
    
    margin-right: auto;
    max-width: ${theme.maxWidth};
    width: 100%;

    .criteria {
      color: ${theme.colors.white};
      text-transform: uppercase;

      cursor: pointer;
      padding: ${theme.space[4]} 0;
      transition: color ${theme.transition.global};

      &:hover {
        color: ${theme.colors.primary};
      }
    }
  }
`
