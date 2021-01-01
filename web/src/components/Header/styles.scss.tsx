// Header Styles:

// ___________________________________________________________________

import styled from 'styled-components'
import { lighten } from 'polished'

// Theme
import theme from '../../gatsby-plugin-theme-ui'

// Elements
import { Box, Flex } from '../ui'

// ___________________________________________________________________

export const Header = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: space-between;

  background: ${theme.colors.background};
  border-bottom: ${theme.border};
  margin: 0 auto;
  padding: 0 ${theme.space[4]};
  position: sticky;
  top: 0;

  width: 100%;
  z-index: 999999;

  @media ${theme.mq.tablet} {
    padding: 0 ${theme.space[5]};
  }

  @media ${theme.mq.desktop} {
    padding: 0 ${theme.space[6]};
  }
`

export const Menu = styled(Flex)`
  align-items: center;
  flex-direction: row;

  flex: 1;
  display: none;

  @media (min-width: 800px) {
    display: flex;
  }
`

export const Logo = styled(Flex)`
  align-items: center;
  flex: 1;

  padding-right: ${theme.space[5]};

  @media ${theme.mq.tablet} {
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

export const Account = styled(Flex)`
  align-items: center;
  justify-content: flex-end;
  flex: 1;

  padding-left: ${theme.space[5]};
  height: 100%;

  .span {
    display: flex;

    @media ${theme.mq.tablet} {
      display: none;
    }

    svg {
    }
  }

  button {
    background: transparent;
    border: none;
    cursor: pointer;

    color: ${theme.colors.tertiary};
    font-family: ${theme.fonts.display};
    font-size: calc(${theme.fontSizes[2]} / 1.25);
    font-weight: 600;
    text-transform: uppercase;
    white-space: nowrap;

    position: relative;
    padding: ${theme.space[4]} ${theme.space[3]};
    transition: border-color 0.111s ease-in-out,
      background-color 0.111s ease-in-out;

    &:before {
      background: ${theme.colors.primary};
      content: '';
      position: absolute;
      width: 0%;
      height: calc(${theme.space[1]} / 1.5);
      top: 0;
      right: 0;
      transition: width ${theme.transition.global};
    }

    &:hover {
      border-color: ${theme.colors.primary};
      color: ${theme.colors.white};

      &:before {
        left: 0;
        width: 100%;
      }
    }
  }
`

export const Announcement = styled(Flex)`
  background: ${theme.colors.background};
  border-bottom: ${theme.border};
  flex: 1;

  .announcement {
    &__inner {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;

      margin: 0 auto;

      width: 100%;

      padding: 0 ${theme.space[4]};

      @media ${theme.mq.tablet} {
        padding: 0 ${theme.space[5]};
      }

      @media ${theme.mq.desktop} {
        padding: 0 ${theme.space[6]};
      }

      .page-title {
        display: flex;
        align-items: center;

        padding: ${theme.space[2]} 0;

        color: ${theme.colors.quaternary};
        font-family: ${theme.fonts.display};
        font-size: calc(${theme.fontSizes[2]} / 1.25);
        text-transform: uppercase;
      }
    }
  }
`

export const Toggle = styled.div`
  display: flex;
  align-items: flex-start;
  box-sizing: content-box;
  padding: ${theme.space[5]};

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
