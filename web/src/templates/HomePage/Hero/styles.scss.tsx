// Hero Styles:

// ___________________________________________________________________

import styled from 'styled-components'
import { darken } from 'polished'
import Section from '../../../components/Section'
import theme from '../../../gatsby-plugin-theme-ui'
import { Box, Flex } from '../../../components/ui'

// ___________________________________________________________________

export const Hero = styled(Section)`
  background: ${theme.colors.black};

  h1 a:hover {
  }

  .hero__inner {
    .panel {
      cursor: pointer;
      
      &:hover {
        a {
          color: ${darken(0.15, theme.colors.white)};
        }

        .button {
          span > svg {
            stroke: ${theme.colors.primary};
          }
        }
      }

      .button {
        padding: 0 ${theme.space[4]};

        span > svg {
          stroke: ${theme.colors.white};
          width: ${theme.space[4]};
        }
      }
    }

    .meta {
      display: flex;
      justify-content: space-between;
      width: 1;
    }
  }
`
