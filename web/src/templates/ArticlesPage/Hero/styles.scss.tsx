// Hero Styles:

// ___________________________________________________________________

import styled from 'styled-components'
import Section from '../../../components/Section'
import theme from '../../../gatsby-plugin-theme-ui'
import { Box, Flex } from '../../../components/ui'

// ___________________________________________________________________

export const Hero = styled(Box)`
  background: ${theme.colors.black};
  border-top: ${theme.border};

  .hero__inner {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;

    margin-right: auto;
    max-width: ${theme.maxWidth};
    width: 100%;

    @media ${theme.mq.tablet} {
      flex-direction: row;
    }

    .panel {
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      height: auto;
      width: 100%;

      &:first-child {
        border-bottom: ${theme.border};
      }

      @media ${theme.mq.tablet} {
        &:first-child {
          border-right: ${theme.border};
          border-bottom: none;
        }
      }

      @media (min-width: ${theme.maxWidth}) {
        border-right: ${theme.border};
      }
    }

    .meta {
      display: flex;
      justify-content: space-between;
      width: 1;
    }
  }
`
