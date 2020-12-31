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
      /* max-width: 700px; */
      
      .post {
        .figure {
          background: ${theme.colors.secondary};
          border: ${theme.border};
          border-color: transparent;
          margin-bottom: ${theme.space[4]};
          width: 100%;
          overflow: hidden;

          position: relative;
          transform: matrix(1, 0, 0, 1, 0, 0);
          top: 0;
          right: 0;

          transition: all 0.222s ease-in-out 0s;

          &:hover {
            /* border-color: ${theme.colors.tertiary}; */
            @media ${theme.mq.tablet} {
              transform: matrix(1, 0, 0, 1, 4, -4);
            }
          }
        }

        .bg {
          position: relative;
          height: 100%;
          width: 100%;
          
          &::before {
            background: ${theme.colors.primary};
            content: '';
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            height: 100%;
            width: 100%;
          }
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
    /* padding-bottom: ${theme.space[7]}; */

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
