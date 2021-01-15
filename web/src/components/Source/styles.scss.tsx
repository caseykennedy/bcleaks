// Source Styles:

// ___________________________________________________________________

import styled from 'styled-components'
import theme from '../../gatsby-plugin-theme-ui'
import { Box, Flex } from '../ui'

// ___________________________________________________________________

export const Source = styled(Box)`
  flex: 1;
  width: 100%;

  &:hover {
    .title {
      color: ${theme.colors.primary};

      span {
        bottom: ${theme.space[2]};
      }
    }

    .url {
      color: ${theme.colors.white};
    }
  }

  .title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: ${theme.colors.lightgray};
    text-transform: uppercase;
    width: 100%;

    &:hover {
      color: ${theme.colors.primary};
    }

    span {
      position: relative;
      bottom: 0;

      transition: ${theme.transition.all};

      svg {
        fill: ${theme.colors.primary};
      }
    }
  }

  .url {
    color: ${theme.colors.gray};
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
`
