// Navigation Styles:

// ___________________________________________________________________

import styled from 'styled-components'
import { Link } from 'gatsby'

import { Box, Flex, Text } from '../../ui'

import theme from '../../../../config/theme'

// ___________________________________________________________________

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 999;

  width: 100%;

  @media ${theme.mq.desktop} {
  }

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

    &:last-child {
      border-right: ${theme.border};
    }

    &::before {
      content: '';
      background: ${theme.colors.tertiary};
      width: 0;
      height: 2px;

      position: absolute;

      bottom: 0;
      left: 0;
      z-index: 0;

      transition: width 0.222s ease-in-out;
    }

    &.active,
    &:hover {
      color: ${theme.colors.primary};

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
