// Header Styles:

// ___________________________________________________________________

// Core
import { Link } from 'gatsby'
import styled from 'styled-components'
import { readableColor, darken } from 'polished'

// Theme
import theme from '../../../config/theme'

// Elements
import { Box, Flex, AnimatedFlex } from '../ui'

// ___________________________________________________________________

export const Header = styled(Flex)`
  flex-direction: row;
  flex-wrap: wrap;

  border-bottom: ${theme.border};
  position: relative;
  z-index: 99;

  @media ${theme.mq.tablet} {
  }
`

export const Utilities = styled(Flex)`
  align-items: center;
  justify-content: space-between;
  width: 100%;

  padding: ${theme.space[4]} ${theme.space[6]};

  button {
    background: ${theme.colors.black};
    border: none;
    color: ${theme.colors.text};
    cursor: pointer;
    text-transform: capitalize;

    margin-left: ${theme.space[2]};
    position: relative;
    padding: ${theme.space[4]} ${theme.space[3]} ${theme.space[3]};
    transition: border-color 0.111s ease-in-out;

    &:before {
      background: ${theme.colors.primary};
      content: '';
      position: absolute;
      width: 0%;
      height: ${theme.space[2]};
      top: 0;
      right: 0;
      transition: width ${theme.transition.global};
    }

    &:hover {
      border-color: ${theme.colors.primary};

      &:before {
        left: 0;
        width: 100%;
      }
    }
  }
`

export const Logo = styled(Flex)`
  align-items: center;
  padding: ${theme.space[4]} ${theme.space[6]};
  width: 100%;

  @media ${theme.mq.tablet} {
  }

  a {
    svg {
      width: calc(${theme.space[3]} * 5);
    }
  }

  .logo-lettermark {
    margin-left: ${theme.space[5]};

    svg {
      width: calc(${theme.space[6]} * 10);
    }
  }
`

export const Menu = styled(Flex)`
  flex: 1;
  border-top: 1px solid ${theme.colors.tertiary};

  .page-title {
    display: flex;
    align-items: center;
    border-right: 1px solid ${theme.colors.tertiary};
    padding: ${theme.space[2]} ${theme.space[6]};

    font-size: ${theme.fontSizes[4]};
    text-transform: uppercase;
  }

  .navigation {
    display: none;
    flex: 1;
    padding: 0 ${theme.space[6]};
    width: 100%;

    @media ${theme.mq.tablet} {
      display: flex;
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
