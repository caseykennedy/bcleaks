// Videos Styles:

// ___________________________________________________________________

import styled from 'styled-components'
import Section from '../../../../components/Section'
import theme from '../../../../gatsby-plugin-theme-ui'
import { Box, Flex } from '../../../../components/ui'

// ___________________________________________________________________

export const Featured = styled(Box)`
  .videos {
    &__header {
      display: flex;
      justify-content: space-between;

      margin-bottom: ${theme.space[6]};
      width: 100%;
    }

    &__posts {
      .post {
        .video {
          background: ${theme.colors.secondary};
          border: ${theme.border};
          margin-bottom: ${theme.space[4]};
          height: 300px;
          width: 100%;
        }

        .lead {
          font-size: calc(${theme.fontSizes[3]} / 1);
          text-transform: capitalize;

          @media ${theme.mq.tablet} {
            font-size: calc(${theme.fontSizes[3]} / 1.25);
          }

          .meta {

          }
        }
      }
    }
  }

  .swiper-container {
    overflow: visible;
    padding-bottom: ${theme.space[7]};

    .parallax-bg {
      background: yellow;
    }

    .swiper-wrapper {
      .swiper-slide {
        transition: ${theme.transition.all};

        &:hover {
          /* cursor: pointer; */
        }

        &.swiper-slide-active {
          /* background: ${theme.colors.primary}; */
        }
      }
    }

    .swiper-pagination {
      bottom: -${theme.space[7]};
      left: 0;
      text-align: left;

      @media ${theme.mq.tablet} {
        display: inherit;
      }

      &.swiper-pagination-bullets {
        .swiper-pagination-bullet {
          background: transparent;
          cursor: pointer;
          opacity: 0.75;

          color: ${theme.colors.primary};
          font-size: ${theme.fontSizes[2]};

          margin-right: ${theme.space[3]};
          padding: 0;
          height: auto;

          transition: opacity 0.222s ease-in-out 0s;

          &:hover {
            opacity: 1;
          }

          &-active {
            color: ${theme.colors.white};
          }
        }
      }
    }
  }
`
