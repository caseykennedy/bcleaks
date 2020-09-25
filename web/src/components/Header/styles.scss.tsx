// Header Styles:

// ___________________________________________________________________

// Core
import { Link } from 'gatsby'
import styled from 'styled-components'
import { lighten } from 'polished'

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
    transition: border-color 0.111s ease-in-out, background 0.111s ease-in-out;

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
      background: ${lighten(0.05, theme.colors.background)};
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

  .logo {
    &-symbol {
      svg {
        width: calc(${theme.space[3]} * 5);
      }
    }

    &-lettermark {
      margin-left: ${theme.space[5]};
      margin-bottom: ${theme.space[4]};

      svg {
        width: calc(${theme.space[5]} * 13);
      }
    }
  }
`

export const Menu = styled(Flex)`
  flex: 1;
  flex-wrap: wrap;
  border-top: 1px solid ${theme.colors.quaternary};

  .page-title {
    display: flex;
    align-items: center;
    border-right: 1px solid ${theme.colors.quaternary};
    padding: ${theme.space[3]} ${theme.space[6]};

    color: ${theme.colors.quaternary};
    font-family: ${theme.fonts.display};
    font-size: ${theme.fontSizes[3]};
    font-weight: 600;
    text-transform: uppercase;
  }

  .nav-outer {
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
