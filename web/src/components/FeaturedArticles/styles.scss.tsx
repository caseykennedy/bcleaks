// Featured Articles Styles:

// ___________________________________________________________________

import styled from 'styled-components'
import { darken } from 'polished'

import theme from '../../gatsby-plugin-theme-ui'
import { Box, Flex } from '../ui'

import Section from '../Section'

// ___________________________________________________________________

export const FeaturedArticles = styled(Box)`
  background: ${theme.colors.black};
  border-top: ${theme.border};

  .featured {
    &__inner {
      display: flex;
      flex-wrap: wrap;
      flex-direction: column-reverse;

      margin-right: auto;
      max-width: ${theme.maxWidth};
      width: 100%;

      @media ${theme.mq.tablet} {
        flex-direction: row;
        justify-content: stretch;
      }
    }

    &__image {
      /* position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0; */

      flex: 1;

      /* overflow: hidden; */
      opacity: 0.85;
      mix-blend-mode: difference;

      /* height: 100%; */
      width: 100%;
      z-index: 0;

      .gatsby-image-wrapper {
        height: 100%;
      }
    }

    &__content {
      flex: 2;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      height: 100%;
      width: 100%;

      position: relative;
      z-index: 1;
    }

    &__panel{
      display: flex;
      flex: 2;
      padding: ${theme.space[4]};
      position: relative;

      &:first-child {
        border-bottom: ${theme.border};
      }

      @media ${theme.mq.tablet} {
        padding: ${theme.space[5]};

        &:first-child {
          border-right: ${theme.border};
          border-bottom: none;
        }
      }

      @media ${theme.mq.desktop} {
        padding: ${theme.space[6]};
      }

      @media (min-width: ${theme.maxWidth}) {
        border-right: ${theme.border};
      }

      &:hover {
        a {
          color: ${theme.colors.primary};
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
          width: ${theme.space[3]};

          @media ${theme.mq.tablet} {
            width: ${theme.space[4]};
          }
        }
      }
    }
  }
`
