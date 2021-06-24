// Footer styles:

// ___________________________________________________________________

import styled from 'styled-components'
import { darken } from 'polished'
import { Box, Flex } from '../ui'
import theme from '../../gatsby-plugin-theme-ui'

// ___________________________________________________________________

export const Footer = styled(Flex)`
  align-items: flex-end;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;

  position: relative;
  padding: ${theme.space[7]} ${theme.space[4]} ${theme.space[4]};

  background: ${theme.colors.black};
  border-top: ${theme.border};

  @media ${theme.mq.tablet} {
    padding: ${theme.space[8]} ${theme.space[5]} ${theme.space[5]};
  }

  .logo {
    &-symbol {
      position: relative;
      top: ${theme.space[1]};

      svg {
        width: calc(${theme.space[5]} * 1);

        @media ${theme.mq.tablet} {
          width: calc(${theme.space[6]} * 1.15);
        }
      }
    }

    &-lettermark {
      display: none;
      align-items: center;
      margin-left: ${theme.space[5]};

      @media ${theme.mq.desktop} {
        display: flex;
      }

      svg {
        width: calc(${theme.space[8]} * 1.15);
      }
    }
  }
`

export const Bulletin = styled(Box)`
  background: ${theme.colors.black};
  border-top: ${theme.border};
  width: 100%;

  .inner {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;

    max-width: ${theme.maxWidth};
    width: 100%;

    @media ${theme.mq.tablet} {
      flex-direction: row;
    }
  }

  .bulletin {
    &__newsletter-form {
      flex: 1;
      border-bottom: ${theme.border};
      margin-bottom: ${theme.space[6]};

      @media ${theme.mq.tablet} {
        border-bottom: none;
        border-right: ${theme.border};
        margin-bottom: 0;
      }

      @media ${theme.mq.desktop} {
        flex: 2;
      }

      form {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;

        @media ${theme.mq.desktop} {
          flex-direction: row;
          flex-wrap: nowrap;
        }

        input[type='email'] {
          border: ${theme.border};
          border-color: ${theme.colors.primary};
          border-radius: 0;

          color: ${theme.colors.primary};
          outline: none;

          padding: ${theme.space[3]} ${theme.space[4]};

          &::placeholder {
            color: ${darken(0.15, theme.colors.primary)};
            font-weight: 400;
          }
        }

        button {
          background: ${darken(0.1, theme.colors.primary)};
          border: none;
          border-color: ${theme.colors.primary};
          border-radius: 0;
          cursor: pointer;

          padding: ${theme.space[3]} ${theme.space[5]};
          text-transform: uppercase;

          transition: ${theme.transition.all};

          &:hover {
            background: ${theme.colors.primary};
          }

          @media ${theme.mq.desktop} {
            margin-top: 0;
          }
        }
      }
    }

    &__social {
      flex: 1;

      .btn {
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: center;

        background: transparent;
        border: ${theme.border};
        border-color: ${theme.colors.darkgray};

        color: ${theme.colors.gray};
        font-size: ${theme.fontSizes[2]};
        text-transform: uppercase;

        padding: ${theme.space[4]};
        cursor: pointer;
        transition: ${theme.transition.all};

        height: ${theme.btnHeight};
        width: 100%;

        &:hover {
          border-color: ${theme.colors.primary};
          color: ${theme.colors.primary};
        }
      }

      span svg {
        width: calc(${theme.space[7]} / 1.15);

        @media ${theme.mq.tablet} {
          width: ${theme.space[7]};
        }
      }
    }
  }
`

export const Social = styled(Flex)`
  border-top: ${theme.border};
  background: ${theme.colors.black};

  .inner {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;

    max-width: ${theme.maxWidth};
    width: 100%;

    @media ${theme.mq.tablet} {
      flex-direction: row;
    }
  }

  .social {
    &__links {
      flex: 1;

      @media ${theme.mq.tablet} {
        border-right: ${theme.border};
      }
    }

    &__podcast {
      flex: 2;
      flex-wrap: wrap;
    }
  }
`
