// Category Nav Styles:

// ___________________________________________________________________

import styled from 'styled-components'
import theme from '../../gatsby-plugin-theme-ui'
import { Box } from '../ui'

// ___________________________________________________________________

export const CatNav = styled(Box)`
  align-items: center;
  justify-content: space-between;

  background: ${theme.colors.black};
  border-bottom: ${theme.border};
  color: ${theme.colors.tertiary};

  min-height: ${theme.tickerHeight};
  width: 100%;

  position: sticky;
  top: ${theme.headerHeight};
  z-index: 99999;

  display: none;

  @media ${theme.mq.tablet} {
    display: flex;
  }

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
      transition: color ${theme.transition.global};

      &:hover {
        color: ${theme.colors.primary};
      }
    }
  }
`
