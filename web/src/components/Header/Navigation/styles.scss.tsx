// Navigation Styles:

// ___________________________________________________________________

import styled from 'styled-components'
import { Link } from 'gatsby'

import { Box, Flex, Text } from '../../ui'

import theme from '../../../gatsby-plugin-theme-ui'

// ___________________________________________________________________

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;

  a {
    font-family: ${theme.fonts.heading};
    font-size: calc(${theme.fontSizes[2]} * 1);
    text-transform: uppercase;
    color: ${theme.colors.white};

    display: flex;
    justify-content: center;
    align-items: center;

    border-left: ${theme.border};
    height: ${theme.headerHeight};
    padding: 0 ${theme.space[5]};
    width: 100%;

    /* &:last-child {
      border-right: ${theme.border};
    } */

    &::before {
      content: '';
      background: ${theme.colors.primary};
      width: 0;
      height: 2px;

      position: absolute;

      top: 0;
      left: 0;
      z-index: 0;

      transition: width 0.222s ease-in-out;
    }

    &.active,
    &:hover {
      color: ${theme.colors.primary};
      background: ${theme.colors.black};

      /* &::before {
        width: 100%;
      } */
    }
  }
`

export const SignIn = styled(Link)`
  color: ${theme.colors.text};
  font-size: ${theme.fontSizes[1]};
  text-transform: uppercase;
  letter-spacing: 0.5px;

  display: flex;
  align-items: center;
  box-sizing: content-box;

  height: ${theme.headerHeight};
  padding: 0 ${theme.space[4]};
  border-left: ${theme.border};

  @media ${theme.mq.tablet} {
    padding: ${theme.space[2]} ${theme.space[4]};
  }

  &:hover {
    color: ${theme.colors.white};
    background: ${theme.colors.bloodshot};
  }
`
