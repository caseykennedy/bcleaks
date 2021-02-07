// Card Leak Styles:

// ___________________________________________________________________

import styled from 'styled-components'
import { darken } from 'polished'

// Theme
import theme from '../../gatsby-plugin-theme-ui'

// Elements
import { Box, Flex } from '../ui'

// ___________________________________________________________________

export const CardLeak = styled(Flex)`
  border: ${theme.border};
  border-radius: ${theme.borderRadius};
  margin-bottom: ${theme.space[4]};
  padding: ${theme.space[2]};
  position: relative;

  @media ${theme.mq.tablet} {
    margin-bottom: ${theme.space[5]};
    padding: ${theme.space[3]};
  }

  .content {
    flex: 4;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    height: 100%;
    padding-right: ${theme.space[4]};
    padding-left: ${theme.space[1]};

    @media ${theme.mq.tablet} {
      padding-top: ${theme.space[1]};
      padding-right: ${theme.space[5]};
      padding-left: calc(${theme.space[7]} / 1.1);
    }

    .category {
      background: ${theme.colors.darkgray};
      border-radius: 2px;

      color: ${theme.colors.black};
      font-family: ${theme.fonts.body};
      font-size: ${theme.fontSizes[0]};
      font-weight: 500;
      text-transform: uppercase;

      margin-right: ${theme.space[3]};
      padding: 0 ${theme.space[1]};

      @media ${theme.mq.tablet} {
        font-size: ${theme.fontSizes[1]};
      }
    }

    .utilities {
      display: flex;
      align-items: center;
      justify-content: flex-start;

      margin-top: ${theme.space[5]};

      color: ${theme.colors.tertiary};
      font-family: ${theme.fonts.sans};
      font-size: ${theme.fontSizes[1]};
      width: 100%;

      @media ${theme.mq.tablet} {
      }

      .vote {
        display: flex;
        flex-direction: row;
        align-items: center;

        color: ${theme.colors.white};
        font-weight: 600;

        margin-right: ${theme.space[5]};

        @media ${theme.mq.tablet} {
          flex-direction: column;

          font-size: ${theme.fontSizes[3]};
          letter-spacing: 1.75px;

          margin-top: ${theme.space[4]};
          margin-right: 0;
          margin-left: ${theme.space[4]};
          position: absolute;
          top: 0;
          left: 0;
        }

        .vote-count {
          margin: 0 ${theme.space[3]};

          @media ${theme.mq.tablet} {
            margin: ${theme.space[1]} 0;
          }
        }

        .vote-arrow {
          svg {
            fill: ${theme.colors.white};
            width: ${theme.space[3]};
          }

          &--up {
            padding-bottom: ${theme.space[1]};

            svg {
              fill: ${theme.colors.primary};
              transform: rotate(-90deg);
            }
          }

          &--down {
            padding-top: ${theme.space[1]};

            svg {
              transform: rotate(90deg);
            }
          }
        }
      }
    }
  }

  a {
    flex: 1;
    width: 100%;
  }

  .figure {
    background: ${theme.colors.secondary};
    border: ${theme.border};
    border-color: transparent;

    width: 100%;

    position: relative;
    transform: matrix(1, 0, 0, 1, 0, 0);
    transition: all 0.222s ease-in-out 0s;
  }

  &:hover {
    .figure {
      border-color: ${theme.colors.primary};
      transform: matrix(1, 0, 0, 1, 5, -5);
    }

    .title {
      color: ${theme.colors.primary};
    }
  }

  .title {
    color: ${theme.colors.white};
    font-size: calc(${theme.fontSizes[2]});
    line-height: ${theme.root.font.headingLineHeight};

    margin-bottom: ${theme.space[1]};

    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 5; /* number of lines to show */
    -webkit-box-orient: vertical;

    @media ${theme.mq.tablet} {
      font-size: calc(${theme.fontSizes[3]});
      -webkit-line-clamp: 2; /* number of lines to show */
    }

    &--small {
      font-size: calc(${theme.fontSizes[2]});
      margin-bottom: ${theme.space[2]};

      @media ${theme.mq.tablet} {
        font-size: calc(${theme.fontSizes[3]} / 1.25);
      }
    }
  }

  .bg {
    position: relative;

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

  .horizontal {
  }
`
