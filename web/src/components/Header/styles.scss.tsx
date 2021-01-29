// Header Styles:

// ___________________________________________________________________

import styled from 'styled-components'
import { lighten } from 'polished'

// Theme
import theme from '../../gatsby-plugin-theme-ui'

// Elements
import { Box, Flex } from '../ui'

// ___________________________________________________________________

export const Header = styled(Flex)`
  .inner {
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 100%;
    padding-left: ${theme.space[4]};

    @media ${theme.mq.tablet} {
      padding-left: ${theme.space[5]};
    }

    @media ${theme.mq.desktop} {
      padding-left: ${theme.space[5]};
    }
  }

  background: ${theme.colors.background};
  border-bottom: ${theme.border};
  margin: 0 auto;
  position: sticky;
  top: 0;

  width: 100%;
  z-index: 999999;
`

export const Menu = styled(Flex)`
  align-items: center;
  flex-direction: row;

  flex: 1;
  display: none;

  @media ${theme.mq.tablet} {
    display: flex;
  }
`

export const Logo = styled(Flex)`
  align-items: center;
  padding: ${theme.space[1]} ${theme.space[5]} ${theme.space[1]} 0;

  @media ${theme.mq.tablet} {
    padding: 0 ${theme.space[5]} 0 0;
  }

  .logo {
    &-symbol {
      position: relative;
      top: ${theme.space[1]};

      svg {
        width: calc(${theme.space[5]} * 1);

        @media ${theme.mq.tablet} {
          width: calc(${theme.space[5]} * 1.15);
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

export const Utilities = styled(Flex)`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  background: ${theme.colors.background};
  border-bottom: ${theme.border};
  flex: 1;
  font-size: calc(${theme.fontSizes[2]} / 1.15);

  margin: 0 auto;
  width: 100%;

  .date {
    display: flex;
    align-items: center;

    color: ${theme.colors.tertiary};
    font-size: calc(${theme.fontSizes[1]} / 1.25);
    font-family: ${theme.fonts.display};
    text-transform: uppercase;

    @media ${theme.mq.tablet} {
      font-size: calc(${theme.fontSizes[2]});
    }
  }

  .account {
    flex: 1;
    justify-content: flex-end;

    button {
      background: transparent;
      border: none;
      cursor: pointer;

      color: ${theme.colors.tertiary};
      font-family: ${theme.fonts.display};
      font-weight: 600;
      text-transform: uppercase;
      white-space: nowrap;

      position: relative;
      padding: ${theme.space[2]} 0 ${theme.space[2]} ${theme.space[4]};
      transition: color 0.111s ease-in-out,
      background-color 0.111s ease-in-out;

      /* &:before {
        background: ${theme.colors.primary};
        content: '';
        position: absolute;
        width: 0%;
        height: calc(${theme.space[1]} / 1.5);
        bottom: 0;
        right: 0;
        transition: width ${theme.transition.global};
      } */

      &:hover {
        color: ${theme.colors.white};

        /* &:before {
          left: 0;
          width: 100%;
        } */
      }
    }
  }
`

export const Toggle = styled(Box)`
  display: flex;
  align-items: flex-start;
  box-sizing: content-box;

  color: ${theme.colors.text};
  font-size: calc(${theme.fontSizes[2]});
  font-weight: 400;
  cursor: pointer;

  @media ${theme.mq.tablet} {
    display: none;
  }

  span {
    svg {
      width: ${theme.space[5]};
    }
  }
`
