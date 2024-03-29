// Featured Videos Styles:

// ___________________________________________________________________

import styled from 'styled-components'

import theme from '../../gatsby-plugin-theme-ui'
import { Box } from 'theme-ui'

// ___________________________________________________________________

export const FeaturedVideo = styled(Box)<{ hero?: boolean }>`
  border-bottom: ${theme.border};

  .featured {
    &__inner {
      display: flex;
      flex-wrap: wrap;
      flex-direction: column-reverse;

      margin-right: auto;
      width: 100%;

      @media ${theme.mq.tablet} {
        flex-direction: row;
        justify-content: stretch;
      }
    }

    &__embed {
      flex: 1;

      opacity: 0.85;
      mix-blend-mode: difference;
      width: 100%;
      z-index: 0;

      @media ${theme.mq.tablet} {
      }

      .gatsby-image-wrapper {
        height: 100%;
      }
    }

    &__panel {
      display: flex;
      flex: 1;
      padding: ${theme.space[4]};
      position: relative;
      width: 100%;

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
        flex: 1;
      }

      @media (min-width: ${theme.maxWidth}) {
        border-right: ${theme.border};
      }

      .content {
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        height: 100%;
        width: 100%;

        position: relative;
        z-index: 1;
      }

      &:hover {
        .button {
          span > svg {
            stroke: ${theme.colors.primary};
          }
        }
      }

      a:hover {
        color: ${theme.colors.primary};
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
