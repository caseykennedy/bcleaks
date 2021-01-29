// VideosPage Styles:

// ___________________________________________________________________

import styled from 'styled-components'
import { darken } from 'polished'

import { Box, Flex, Heading } from '../../components/ui'

import theme from '../../gatsby-plugin-theme-ui'

// ___________________________________________________________________

export const VideosPage = styled(Box)`
  width: 100%;

  .swiper-container {
    overflow: visible;
    /* padding-bottom: ${theme.space[7]}; */
  }
`

export const PageTitle = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: space-between;

  background: ${theme.colors.black};
  border-bottom: ${theme.border};
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
  border-top: ${theme.border};
  color: ${theme.colors.tertiary};

  min-height: ${theme.headerHeight};
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

export const AllPosts = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  margin: -12px;

  > * {
    flex: 0 0 33.3333%;
    padding: 12px;
  }

  @media ${theme.mq.tablet} {
  }
`
