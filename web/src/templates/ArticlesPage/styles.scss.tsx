// ArticlesPage Styles:

// ___________________________________________________________________

import styled from 'styled-components'
import { darken } from 'polished'

import { Box, Flex, Heading } from '../../components/ui'

import theme from '../../gatsby-plugin-theme-ui'

// ___________________________________________________________________

export const ArticlesPage = styled(Box)`
  width: 100%;

  @media ${theme.mq.tablet} {
  }
`

export const PageTitle = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: space-between;

  background: ${theme.colors.black};
  height: ${theme.tickerHeight};
  width: 100%;

  @media ${theme.mq.tablet} {
  }
`

export const FilterNav = styled(Flex)`
  display: flex;
  align-items: center;
  justify-content: space-between;

  background: ${theme.colors.black};
  color: ${theme.colors.tertiary};

  height: calc(${theme.headerHeight});
  width: 100%;

  position: sticky;
  top: ${theme.headerHeight};
  z-index: 99999;

  .inner {
    display: flex;
    margin-right: auto;
    max-width: ${theme.maxWidth};
    width: 100%;

    .criteria {
      color: ${theme.colors.tertiary};
      cursor: pointer;
      font-weight: 500;
      text-transform: uppercase;
      transition: color ${theme.transition.global};

      &:hover {
        color: ${theme.colors.primary};
      }
    }
  }
`

