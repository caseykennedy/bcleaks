// Header Styles:

// ___________________________________________________________________

// Core
import { Link } from 'gatsby'
import styled from 'styled-components'
import { lighten } from 'polished'

// Theme
import theme from '../../gatsby-plugin-theme-ui'

// Elements
import { Box, Flex, AnimatedFlex } from '../ui'

// ___________________________________________________________________

export const Header = styled(Box)`
  border-bottom: ${theme.border};
  position: relative;
  width: 100%;
  z-index: 99;

  .header {
    &__inner {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-between;

      margin: 0 auto;
      /* max-width: ${theme.maxWidth}; */
      width: 100%;

      padding: 0 ${theme.space[4]};

      @media ${theme.mq.tablet} {
        padding: 0 ${theme.space[5]};
      }

      @media ${theme.mq.desktop} {
        padding: 0 ${theme.space[6]};
      }
    }
  }
`

export const Menu = styled(Flex)`
  align-items: center;
  flex-direction: row;

  /* padding: 0 ${theme.space[6]}; */
`

export const Logo = styled(Flex)`
  align-items: center;

  /* background: ${theme.colors.black}; */
  padding: 0 ${theme.space[9]} 0 0;

  @media ${theme.mq.tablet} {
  }

  .logo {
    &-symbol {
      position: relative;
      top: ${theme.space[1]};

      svg {
        width: calc(${theme.space[4]} * 2);
      }
    }

    &-lettermark {
      margin-left: ${theme.space[3]};
      /* margin-bottom: ${theme.space[2]}; */

      svg {
        width: calc(${theme.space[5]} * 10);
      }
    }
  }
`

export const Utilities = styled(Flex)`
  flex: 1;
  border-bottom: ${theme.border};

  .utilities {
    &__inner {
      display: flex;
      flex-wrap: wrap;
      
      margin: 0 auto;
      /* max-width: ${theme.maxWidth}; */
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
        /* border-right: ${theme.border}; */
        padding: ${theme.space[2]} 0;

        color: ${theme.colors.quaternary};
        font-family: ${theme.fonts.display};
        font-size: calc(${theme.fontSizes[2]} / 1.25);
        font-weight: 600;
        text-transform: uppercase;
      }

      .account {
        align-items: center;
        flex: 1;
        justify-content: flex-end;

        height: 100%;

        button {
          background: transparent;
          border: none;
          cursor: pointer;
          
          color: ${theme.colors.tertiary};
          font-family: ${theme.fonts.display};
          font-size: calc(${theme.fontSizes[2]} / 1.25);
          font-weight: 600;
          text-transform: uppercase;

          /* margin-left: ${theme.space[2]}; */
          position: relative;
          padding: ${theme.space[4]} ${theme.space[3]};
          transition: border-color 0.111s ease-in-out, background-color 0.111s ease-in-out;

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
            background: ${lighten(0.05, theme.colors.background)};
            border-color: ${theme.colors.primary};
            color: ${theme.colors.white};

            &:before {
              left: 0;
              width: 100%;
            }
          }
        }
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
