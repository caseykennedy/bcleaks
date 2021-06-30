// Card Leak Styles:

// ___________________________________________________________________

import styled from 'styled-components'
import { darken } from 'polished'

// Theme
import theme from '../../gatsby-plugin-theme-ui'

// Elements
import { Flex } from 'theme-ui'

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
    padding-left: ${theme.space[1]};
    width: 100%;

    @media ${theme.mq.tablet} {
      flex: 4;
      padding-left: calc(${theme.space[5]});
    }

    &:hover {
      .meta svg {
        fill: ${theme.colors.primary};
      }
    }

    .meta {
      display: flex;
      justify-content: space-between;
      color: ${theme.colors.gray};
      font-family: ${theme.fonts.sans};
      font-size: ${theme.fontSizes[0]};
      letter-spacing: 0.5px;
      margin-bottom: ${theme.space[4]};

      @media ${theme.mq.tablet} {
        font-size: ${theme.fontSizes[1]};
      }

      svg {
        transition: ${theme.transition.all};
        fill: ${darken(0.1, theme.colors.primary)};
        width: 12px;
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
        font-size: calc(${theme.fontSizes[2]} * 1.25);
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
        color: ${darken(0.1, theme.colors.primary)};
        font-size: calc(${theme.fontSizes[1]} / 1.15);
        letter-spacing: -0.5px;

        display: -webkit-box;
        overflow: hidden;
        position: relative;
        text-overflow: ellipsis;
        -webkit-line-clamp: 1; /* number of lines to show */
        -webkit-box-orient: vertical;

        &:hover {
          color: ${theme.colors.primary};
        }
      }

      span {
        margin-left: ${theme.space[4]};

        svg {
          fill: ${theme.colors.primary};
          width: 12px;
        }
      }
    }

    .text {
      color: ${darken(0.05, theme.colors.lightgray)};
      font-family: ${theme.fonts.sans};
      font-size: calc(${theme.fontSizes[1]});
      line-height: 1.5;

      margin-bottom: ${theme.space[0]};

      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 3; /* number of lines to show */
      -webkit-box-orient: vertical;

      @media ${theme.mq.tablet} {
        font-size: calc(${theme.fontSizes[2]});
        -webkit-line-clamp: 2; /* number of lines to show */
      }
    }

    .utilities {
      display: flex;
      align-items: center;
      justify-content: flex-start;

      color: ${theme.colors.tertiary};
      font-family: ${theme.fonts.sans};
      font-size: ${theme.fontSizes[1]};

      margin-top: ${theme.space[5]};
      width: 100%;

      &__item {
        transition: color ${theme.transition.global};

        span svg {
          fill: ${theme.colors.darkgray};
          margin-right: ${theme.space[2]};
          width: 12px;
        }

        &:hover {
          color: ${theme.colors.gray};

          span svg {
            fill: ${theme.colors.gray};
          }
        }
      }

      .vote {
        display: flex;
        flex-direction: row;
        align-items: center;

        color: ${theme.colors.white};
        font-weight: 600;

        margin: 0 ${theme.space[4]} 0 0;

        @media ${theme.mq.tablet} {
          flex-direction: column;

          margin: ${theme.space[3]} 0 0 ${theme.space[3]};
          position: absolute;
          top: 0;
          left: 0;
        }

        .vote-count {
          font-size: ${theme.fontSizes[0]};
          margin: 0 ${theme.space[3]};

          @media ${theme.mq.tablet} {
            font-size: ${theme.fontSizes[1]};
            margin: ${theme.space[1]} 0;
          }
        }

        button,
        .vote-arrow {
          display: flex;
          cursor: pointer;

          background: ${theme.colors.black};
          border: none;
          outline: 0;
          padding: ${theme.space[2]};

          svg {
            fill: ${theme.colors.gray};
            width: calc(${theme.space[3]} * 1.25);

            @media ${theme.mq.tablet} {
              width: ${theme.space[3]};
            }
          }

          &--up {
            svg {
              transform: rotate(-90deg);
            }

            &.active,
            &:hover:enabled {
              svg {
                fill: ${theme.colors.primary};
              }
            }

            &:disabled,
            &[disabled] {
              cursor: default;
            }
          }

          &--down {
            svg {
              transform: rotate(90deg);
            }

            &.active,
            &:hover:enabled {
              svg {
                fill: ${theme.colors.purple};
              }
            }

            &:disabled,
            &[disabled] {
              cursor: default;
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
