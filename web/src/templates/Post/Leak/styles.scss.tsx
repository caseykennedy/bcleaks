// Post Styles:

// ___________________________________________________________________

import styled from 'styled-components'
import { darken } from 'polished'
import theme from '../../../gatsby-plugin-theme-ui'
import { Box, Flex } from 'theme-ui'

// ___________________________________________________________________

export const Leak = styled.div`
  background: ${theme.colors.background};

  .swiper-container {
    overflow: visible;
    padding-bottom: ${theme.space[7]};
  }

  a {
    /* These are technically the same, but use both */
    overflow-wrap: break-word;
    word-wrap: break-word;
    -ms-word-break: break-all;
    /* This is the dangerous one in WebKit, as it breaks things wherever */
    word-break: break-all;
    /* Instead use this non-standard one: */
    word-break: break-word;
    /* Adds a hyphen where the word breaks, if supported (No Blink) */
    -ms-hyphens: auto;
    -moz-hyphens: auto;
    -webkit-hyphens: auto;
    hyphens: auto;
  }

  img {
    background: ${theme.colors.white};
  }

  .utilities {
    @media ${theme.mq.tablet} {
      position: sticky;
      top: calc(${theme.headerHeight} + ${theme.space[5]});
    }
  }

  .link-url {
    position: relative;

    a {
      color: ${darken(0.1, theme.colors.primary)};
      font-size: calc(${theme.fontSizes[1]} / 1.15);
      letter-spacing: -0.5px;

      display: -webkit-box;
      overflow: hidden;
      position: relative;
      text-overflow: ellipsis;
      -webkit-line-clamp: 1; /* number of lines to show */
      -webkit-box-orient: vertical;

      &:hover {
        color: ${theme.colors.primary};
      }
    }
  }
`

export const PageTitle = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: space-between;

  background: ${theme.colors.black};
  /* height: ${theme.tickerHeight}; */
  width: 100%;

  h4 {
    white-space: nowrap;
  }

  .pillbox {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;

    border-left: ${theme.border};
    margin-left: ${theme.space[4]};
    padding: ${theme.space[2]} 0 ${theme.space[2]} ${theme.space[2]};
    width: 100%;

    @media ${theme.mq.tablet} {
      padding: ${theme.space[3]} 0 ${theme.space[3]} ${theme.space[3]};
    }
  }
`
