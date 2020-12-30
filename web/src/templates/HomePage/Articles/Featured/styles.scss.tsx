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
      max-width: 700px;
      
      .post {
        .figure {
          background: ${theme.colors.secondary};
          border: ${theme.border};
          margin-bottom: ${theme.space[4]};
          width: 100%;
          overflow: hidden;

          transition: border-color ${theme.transition.global};

          &:hover {
            border-color: ${theme.colors.primary};
          }

          /* img {
            transition: ${theme.transition.all};

            &:hover {
              transform: scale(1.05);
            }
          } */
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

export const PillBox = styled(Flex)`
  display: flex;
  margin-bottom: ${theme.space[4]};

  div {
    display: flex;
    align-items: center;
    border: ${theme.border};
    border-radius: ${theme.borderRadius};
    margin-right: ${theme.space[2]};
    padding: ${theme.space[1]} ${theme.space[2]};

    span {
      color: ${theme.colors.primary};
      font-size: ${theme.fontSizes[0]};
    }
  }
`
