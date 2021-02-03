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

export const Filter = styled.div`
  width: 100%;
  position: relative;

  @media ${theme.mq.tablet} {
  }

  .anchor-link {
    display: flex;
    align-items: center;
    position: relative;
    z-index: 999;

    background: ${theme.colors.background};
    border-top: ${theme.border};
    border-bottom: ${theme.border};
    color: ${theme.colors.text};
    padding: ${theme.space[4]} 0 ${theme.space[4]} ${theme.space[2]};
    width: 100%;

    @media ${theme.mq.tablet} {
      padding: ${theme.space[3]} 0 ${theme.space[3]} calc(${theme.space[5]});
      position: sticky;
      top: 0;
    }

    .filter {
      &__inner {
        display: flex;
        align-items: center;

        margin-bottom: ${theme.space[6]};
        width: 100%;

        position: sticky;
        top: ${theme.headerHeight};
        z-index: 99999;
      }

      &__btn {
        font-family: ${theme.fonts.heading};
        font-size: calc(${theme.fontSizes[2]} * 1.15);
        text-transform: capitalize;

        padding: ${theme.space[2]} ${theme.space[4]};
        margin-bottom: -2px;
        cursor: pointer;

        &:first-child {
          @media ${theme.mq.desktop} {
            padding-left: 0;
          }
        }

        &:hover {
          color: ${theme.colors.tertiary};
        }
      }
    }
  }
`


export const Toggler = styled(Flex)`
  margin-right: ${theme.space[5]};
  margin-left: auto;

  @media ${theme.mq.tablet} {
    margin-right: ${theme.space[7]};
  }

  .toggler__btn {
    font-family: ${theme.fonts.heading};
    font-size: calc(${theme.fontSizes[2]} * 1.15);
    text-transform: capitalize;

    margin-bottom: -4px;
    margin-left: ${theme.space[3]};
    cursor: pointer;

    &:first-child {
      @media ${theme.mq.desktop} {
        padding-left: 0;
      }
    }

    svg {
      fill: ${theme.colors.tertiary};
    }

    &:hover,
    &.active {
      svg {
        fill: ${theme.colors.black};
      }
    }
  }
`
