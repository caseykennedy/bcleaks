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
  padding: ${theme.space[4]};
  position: relative;
  z-index: 99;

  @media ${theme.mq.tablet} {
    padding: ${theme.space[4]} ${theme.space[6]};
  }
`

export const Utilities = styled(Flex)`
  align-items: center;
  justify-content: space-between;
  width: 100%;

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

export const Logo = styled(Box)`
  padding: ${theme.space[4]} 0;
  width: 100%;

  h1 {
    font-size: ${theme.fontSizes[2]};
    font-family: ${theme.fonts.code};
  }

  @media ${theme.mq.tablet} {
  }

  svg {
    fill: ${theme.colors.secondary};
    width: 100%;
  }
`

export const Tools = styled(Flex)`
  justify-content: space-between;
  flex: 1;
`

export const Nav = styled(Flex)`
  flex: 1;
  display: none;
  justify-content: flex-end;

  @media ${theme.mq.desktop} {
    display: flex;
  }

  .cta {
    /* display: none; */

    @media ${theme.mq.desktop} {
      display: initial;
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

  @media ${theme.mq.desktop} {
    display: none;
  }

  span {
    svg {
      width: ${theme.space[5]};
    }
  }
`
