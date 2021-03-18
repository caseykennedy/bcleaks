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
  display: flex;

  border: ${theme.border};
  margin-bottom: ${theme.space[4]};
  padding: ${theme.space[2]};
  position: relative;
  width: 100%;

  transition: ${theme.transition.all};

  &:hover {
    border-color: ${theme.colors.primary};
  }

  @media ${theme.mq.tablet} {
    margin-bottom: ${theme.space[5]};
    padding: ${theme.space[3]};
  }

  .content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex: 1;
    padding-right: ${theme.space[4]};
    padding-left: ${theme.space[1]};
    width: 100%;

    @media ${theme.mq.tablet} {
      flex: 4;
      padding-right: ${theme.space[5]};
      padding-left: calc(${theme.space[6]});
    }

    .meta {
      color: ${theme.colors.gray};
      font-family: ${theme.fonts.sans};
      font-size: ${theme.fontSizes[0]};
      letter-spacing: 0.5px;
      margin-bottom: ${theme.space[4]};

      @media ${theme.mq.tablet} {
        font-size: ${theme.fontSizes[1]};
      }

      .category {
        border-radius: 2px;

        color: ${theme.colors.black};
        font-family: ${theme.fonts.body};
        font-size: ${theme.fontSizes[0]};
        font-weight: 500;
        letter-spacing: ${theme.root.font.baseLetterSpacing};
        text-transform: uppercase;

        margin-right: ${theme.space[3]};
        padding: 0 ${theme.space[1]};

        @media ${theme.mq.tablet} {
          font-size: ${theme.fontSizes[1]};
        }
      }

      .user {
        text-decoration: underline;
      }
    }

    .title {
      color: ${theme.colors.white};
      font-family: ${theme.fonts.sans};
      font-size: calc(${theme.fontSizes[2]} * 1.15);
      line-height: 1.5;

      margin-bottom: calc(${theme.space[1]} / 2);

      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 5; /* number of lines to show */
      -webkit-box-orient: vertical;

      @media ${theme.mq.tablet} {
        font-size: calc(${theme.fontSizes[3]});
        -webkit-line-clamp: 4; /* number of lines to show */
      }

      &--small {
        font-size: calc(${theme.fontSizes[2]});
        margin-bottom: ${theme.space[2]};

        @media ${theme.mq.tablet} {
          font-size: calc(${theme.fontSizes[3]} / 1.25);
        }
      }
    }

    .link-url {
      position: relative;

      a {
        color: ${theme.colors.primary};
        font-size: ${theme.fontSizes[0]};

        display: -webkit-box;
        overflow: hidden;
        position: relative;
        text-overflow: ellipsis;
        -webkit-line-clamp: 1; /* number of lines to show */
        -webkit-box-orient: vertical;

        @media ${theme.mq.tablet} {
          font-size: ${theme.fontSizes[1]};
        }
      }

      span {
        position: absolute;
        top: 0;
        right: calc(${theme.space[4]} * -1);

        transition: ${theme.transition.all};

        svg {
          fill: ${theme.colors.primary};
          width: 12px;
        }
      }
    }

    .text {
      color: ${darken (0.05, theme.colors.lightgray)};
      font-family: ${theme.fonts.sans};
      font-size: calc(${theme.fontSizes[2]});
      line-height: 1.75;

      margin-top: ${theme.space[3]};
      margin-bottom: ${theme.space[0]};
    }

    .utilities {
      display: flex;
      align-items: center;
      justify-content: flex-start;

      color: ${theme.colors.tertiary};
      font-family: ${theme.fonts.sans};
      font-size: ${theme.fontSizes[1]};

      margin-top: ${theme.space[4]};
      width: 100%;

      .vote {
        display: flex;
        flex-direction: row;
        align-items: center;

        color: ${theme.colors.white};
        font-weight: 600;

        margin: 0 ${theme.space[4]} 0 0;

        @media ${theme.mq.tablet} {
          flex-direction: column;

          font-size: ${theme.fontSizes[3]};
          letter-spacing: 1.75px;

          margin: ${theme.space[3]} 0 0 ${theme.space[3]};
          position: absolute;
          top: 0;
          left: 0;
        }

        .vote-count {
          font-size: ${theme.fontSizes[0]};
          margin: 0 ${theme.space[3]};

          @media ${theme.mq.tablet} {
            margin: ${theme.space[1]} 0;
          }
        }

        button,
        .vote-arrow {
          display: flex;
          cursor: pointer;

          background: ${theme.colors.black};
          border: none;
          padding: ${theme.space[2]};

          svg {
            fill: ${theme.colors.gray};
            width: ${theme.space[3]};
          }

          &--up {
            svg {
              transform: rotate(-90deg);
            }

            &:hover {
              svg {
                fill: ${theme.colors.primary};
              }
            }

            &:disabled,
            &[disabled] {
              cursor: default;

              svg {
                fill: ${theme.colors.primary};
              }
            }
          }

          &--down {
            svg {
              transform: rotate(90deg);
            }

            &:hover {
              svg {
                fill: ${theme.colors.purple};
              }
            }

            &:disabled,
            &[disabled] {
              cursor: default;

              svg {
                fill: ${theme.colors.purple};
              }
            }
          }
        }
      }
    }
  }

  .figure {
    background: ${theme.colors.secondary};
    border: ${theme.border};
    border-color: transparent;

    display: inherit;
    flex: 1.25;
    height: 100%;
    width: 100%;

    position: relative;
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
`
